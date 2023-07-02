import {memo} from 'react';

import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {classNames} from '@/shared/lib/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Home</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
      </div>
    </div>
  );
});
