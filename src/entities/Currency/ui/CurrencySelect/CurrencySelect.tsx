import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';

import { classNames } from '@/shared/lib/classNames';
import { Select } from '@/shared/ui/Select';

import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  const countryOptions = useMemo(() => Object.entries(Currency).map((val) => (
    {
      value: val[0],
      content: val[1],
    })), []);

  return (
    <Select
      className={classNames('', [className])}
      label={t('Ваша валюта')}
      options={countryOptions}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
