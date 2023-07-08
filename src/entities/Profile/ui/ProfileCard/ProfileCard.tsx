import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeLastname,
    onChangeFirstname,
  } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, [className, cls.error])}>
        <Text
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
        />
        <Button
          onClick={reloadPage}
          className={cls.reloadBtn}
        >
          {t('Обновить страницу')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          onChange={onChangeLastname}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
