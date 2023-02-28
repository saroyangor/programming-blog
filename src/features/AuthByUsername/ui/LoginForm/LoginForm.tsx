import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button, ButtonTheme, Input } from '@/shared/ui';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <Input
        autofocus
        type="text"
        placeholder={t('Имя пользователя')}
      />
      <Input
        type="text"
        placeholder={t('Пароль')}
      />
      <Button theme={ButtonTheme.CLEAR} className={cls.loginBtn}>
        {t('Войти')}
      </Button>
    </div>
  );
};
