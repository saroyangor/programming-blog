import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/shared/ui/Page';

import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound = (props: NotFoundProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page className={classNames(cls.NotFound, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};
