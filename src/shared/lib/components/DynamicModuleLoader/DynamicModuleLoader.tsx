import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
  children: ReactNode
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
