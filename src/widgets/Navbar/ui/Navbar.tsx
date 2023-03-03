import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from '@/shared/lib';
import { Button, ButtonTheme } from '@/shared/ui';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData, userActions } from '@/entities/User';
import { StateSchema } from '@/app/providers/StoreProvider';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useDispatch();
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
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
