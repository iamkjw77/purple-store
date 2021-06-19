import icon from './SVG';

type IconProps = {
  /** 아이콘 이름 */
  name: string;
  /** 아이콘 크기 */
  size: number;
  /** 클래스 네임 */
  className?: string;
};

const Icon = ({ name, size, className }: IconProps) => {
  const SVGIcon = icon[name];
  return <SVGIcon size={size} className={className} />;
};

export default Icon;
