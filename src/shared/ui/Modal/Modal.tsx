import {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
  MouseEvent,
  MutableRefObject,
} from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';
import { Portal } from '@/shared/ui/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    lazy,
    isOpen,
    onClose,
  } = props;

  const [isClosing, setClosing] = useState(false);
  const [isMounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, [className], mods)}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
