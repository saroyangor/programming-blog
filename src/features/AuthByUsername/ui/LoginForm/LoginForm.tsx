import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';

import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const onChangeUsername = useCallback((str: string) => {
    dispatch(loginActions.setUsername(str));
  }, [dispatch]);

  const onChangePassword = useCallback((str: string) => {
    dispatch(loginActions.setPassword(str));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({
      username,
      password,
    }));

    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.LoginForm, [className])}>
        <Text title={t('Форма авторизации')} />
        {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
