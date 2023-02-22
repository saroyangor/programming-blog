import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { classNames } from '@/shared/lib';
import { RoutePath } from '@/shared/config/routeConfig';
import { AppLink, AppLinkTheme, Button, ButtonSize, ButtonTheme } from '@/shared/ui';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation();

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
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.link}>
            {t(collapsed ? '' : 'Главная')}
          </span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t(collapsed ? '' : 'О сайте')}
          </span>
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
