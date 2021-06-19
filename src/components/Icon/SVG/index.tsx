import { IconType } from 'react-icons/lib';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartLine } from 'react-icons/ri';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

type Icon = {
  [key: string]: IconType;
};

const icon: Icon = {
  HamburgerMenu: GiHamburgerMenu,
  ShoppingCart: RiShoppingCartLine,
  CheckCircle: FiCheckCircle,
  Circle: FiCircle,
  Unchecked: ImCheckboxUnchecked,
  Checked: ImCheckboxChecked,
};

export default icon;
