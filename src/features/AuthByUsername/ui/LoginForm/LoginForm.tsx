import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const LoginForm = (props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <Text title={t('Форма авторизации')} />
      <Input
        autofocus
        type="text"
        placeholder={t('Имя пользователя')}
        // value={username}
        // onChange={onChangeUsername}
      />
      <Input
        type="text"
        placeholder={t('Пароль')}
        // value={password}
        // onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        // onClick={onLoginClick}
        // disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

export default LoginForm;
