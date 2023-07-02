import { classNames } from '@/shared/lib/classNames';

import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string
}

export const NotFound = (props: NotFoundProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.NotFound, [className])}>
      Страница не найдена
    </div>
  );
};
