import {Theme, useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib";
import {Button, ThemeButton} from "shared/ui";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;

    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightIcon/> : <DarkIcon/>}
        </Button>
    );
};
