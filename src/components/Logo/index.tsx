import Link from 'next/link';

const Logo = () => {
  return (
    <h1>
      <Link href="/">
        <a>
          <img src="logo.svg" alt="ff" />
        </a>
      </Link>
    </h1>
  );
};

export default Logo;
