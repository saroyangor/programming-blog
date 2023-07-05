import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isAuthModal, setAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setAuthModal(false);
  }, [setAuthModal]);

  const onOpenModal = useCallback(() => {
    setAuthModal(true);
  }, [setAuthModal]);

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onOpenModal}
      >
        {t('Войти')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onCloseModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aperiam assumenda delectus est fugit molestias nulla officia possimus, quasi tempora vel.
      </Modal>
    </div>
  );
});
