import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';

interface BugButtonProps {
    className?: string
}

export const BugButton = (props: BugButtonProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
      className={classNames('', [className])}
    >
      {t('выдать ошибку')}
    </Button>
  );
};
