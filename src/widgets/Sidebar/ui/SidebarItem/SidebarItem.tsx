import React, { memo } from 'react';

import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

import { SidebarItemType } from '../../model/items';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={cls.item}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>
        {collapsed ? '' : item.text}
      </span>
    </AppLink>
  );
});
