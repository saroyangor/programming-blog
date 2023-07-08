import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getProfileReadonly, profileActions } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly);

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <div className={cls.buttons}>
          <Button onClick={onCancelEdit}>
            {t('Отмена')}
          </Button>
          <Button>
            {t('Сохранить')}
          </Button>
        </div>
      )}
    </div>
  );
};
