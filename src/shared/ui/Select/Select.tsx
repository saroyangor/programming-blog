import { ChangeEvent, memo, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';

import cls from './Select.module.scss';

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const optionsList = useMemo(() => options?.map((option) => (
    <option
      className={cls.option}
      value={option.value}
      key={option.value}
    >
      {option.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, [className])}>
      {
        label && (
        <span
          className={classNames(cls.label, [], { [cls.readonly]: readonly })}
        >
          {`${label}>`}
        </span>
        )
      }
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
