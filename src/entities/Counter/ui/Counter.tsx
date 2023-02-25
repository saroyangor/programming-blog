import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string
}

export const Counter = (props: CounterProps) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classNames('', [className])}>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment-btn">{t('Increment')}</Button>
      <Button onClick={decrement} data-testid="decrement-btn">{t('Decrement')}</Button>
    </div>
  );
};
