import { Suspense } from 'react';

import { Modal } from '@/shared/ui/Modal';
import { Loader } from '@/shared/ui/Loader';
import { classNames } from '@/shared/lib/classNames';

import LoginForm from '../LoginForm/LoginForm';

export default {};
interface LoginModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', [className])}
    >
      <Suspense fallback={<Loader />}>
        <LoginForm onSuccess={() => {}} />
      </Suspense>
    </Modal>
  );
};
