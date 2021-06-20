import styled from 'styled-components';
import { colors } from 'theme';
import { HTMLMotionProps, motion } from 'framer-motion';

type ModalOverlayProps = {
  setIsShow: (boolean) => void;
} & HTMLMotionProps<'div'>;

const ModalOverlay = ({ setIsShow }: ModalOverlayProps) => {
  return <OverlayStyle onClick={() => setIsShow(false)} />;
};

const OverlayStyle = styled(motion.div)`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.black};
  opacity: 0.7;
`;

export default ModalOverlay;
