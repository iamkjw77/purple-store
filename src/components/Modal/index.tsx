import React from 'react';
import ModalOverlay from 'components/ModalOverlay';

type ModalProps = {
  /** 모달 내용 */
  children: React.ReactNode;
  /** 모달 가시 여부 업데이트 함수 */
  setIsShow: (boolean) => void;
};

const Modal = ({ children, setIsShow }: ModalProps) => {
  return (
    <>
      {children}
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        setIsShow={setIsShow}
      />
    </>
  );
};

export default React.memo(Modal);
