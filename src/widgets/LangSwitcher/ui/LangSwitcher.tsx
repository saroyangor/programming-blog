import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ThemeButton } from 'shared/ui';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LangSwitcher, [className])}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
