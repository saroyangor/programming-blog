import React, {useState} from "react";

import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import { classNames } from "shared/lib";

import cls from './Sidebar.module.scss';
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            className={classNames(cls.Sidebar, [className], {[cls.collapsed]: collapsed})}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
