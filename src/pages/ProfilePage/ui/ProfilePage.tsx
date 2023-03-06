import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from '@/shared/lib';
import { profileReducer } from '@/entities/Profile';

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', [className])}>
        {t('Профиль')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
