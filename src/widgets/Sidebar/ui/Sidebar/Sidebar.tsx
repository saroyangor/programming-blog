import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';

import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}
      data-testid="sidebar"
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        {
          sidebarItemsList.map((item) => (
            <SidebarItem
              key={item.path}
              item={item}
              collapsed={collapsed}
            />
          ))
        }
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
