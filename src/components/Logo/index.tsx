import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/logo.svg';

const Logo = () => {
  return (
    <h1>
      <Link href="/">
        <a>
          <Image src={logoImg} alt="퍼플스토어" />
        </a>
      </Link>
    </h1>
  );
};

export default Logo;
