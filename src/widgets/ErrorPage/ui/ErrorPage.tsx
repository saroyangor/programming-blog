import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button
        onClick={reloadPage}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
