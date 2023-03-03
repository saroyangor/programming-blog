import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button, ButtonTheme, Input, Text, TextTheme } from '@/shared/ui';

import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;

  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const { t } = useTranslation();

  const onChangeUsername = useCallback((str: string) => {
    dispatch(loginActions.setUsername(str));
  }, [dispatch]);

  const onChangePassword = useCallback((str: string) => {
    dispatch(loginActions.setPassword(str));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({
      username,
      password,
    }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text title={t(error)} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        placeholder={t('Имя пользователя')}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        type="text"
        placeholder={t('Пароль')}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
