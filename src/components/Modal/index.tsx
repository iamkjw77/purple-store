import ModalOverlay from 'components/ModalOverlay';

type ModalProps = {
  children: React.ReactNode;
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

export default Modal;
