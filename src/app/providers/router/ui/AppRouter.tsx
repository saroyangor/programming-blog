import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { routeConfig } from '@/shared/config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { getUserAuthData } from '@/entities/User';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((router) => !(router.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {Object.values(routes).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
});
