import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const authData = useSelector((state: StateSchema) => getUserAuthData(state));

  const [isAuthModal, setAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setAuthModal(false);
  }, [setAuthModal]);

  const onOpenModal = useCallback(() => {
    setAuthModal(true);
  }, [setAuthModal]);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </div>
  );
});
