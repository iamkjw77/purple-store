import ModalOverlay from 'components/ModalOverlay';

type ModalProps = {
  children: React.ReactNode;
  setIsShow: (boolean) => void;
};

const Modal = ({ children, setIsShow }: ModalProps) => {
  return (
    <>
      {children}
      <ModalOverlay setIsShow={setIsShow} />
    </>
  );
};

export default Modal;
