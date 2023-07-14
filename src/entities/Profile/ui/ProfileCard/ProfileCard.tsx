import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Loader } from '@/shared/ui/Loader';
import { Button } from '@/shared/ui/Button';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';

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
  onChangeAge?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
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
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
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

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, [className], mods)}>
      <div className={cls.data}>
        {data?.avatar && <Avatar src={data?.avatar} alt={data?.username} />}
        <div className={cls.inputs}>
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
          <Input
            value={data?.age}
            placeholder={t('Ваш возраст')}
            onChange={onChangeAge}
            readonly={readonly}
          />
          <Input
            value={data?.city}
            placeholder={t('Ваш город')}
            onChange={onChangeCity}
            readonly={readonly}
          />
          <Input
            value={data?.username}
            placeholder={t('Ваше имя пользователя')}
            onChange={onChangeUsername}
            readonly={readonly}
          />
          <Input
            value={data?.avatar}
            placeholder={t('Ваш аватар')}
            onChange={onChangeAvatar}
            readonly={readonly}
          />
          <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
          />
          <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
          />
        </div>
      </div>
    </div>
  );
};
