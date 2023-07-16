import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, [className])}>
      ArticleImageBlockComponent
    </div>
  );
};