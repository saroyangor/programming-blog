import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList, useAppDispatch } from '@/shared/lib';
import { fetchProfileData, ProfileCard, profileReducer } from '@/entities/Profile';

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
