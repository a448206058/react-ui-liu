import { FC } from 'react';
import { MenuProps } from './menu';
import { SubMenuProps } from './subMenu';
import { MenuItemProps } from './menuItem';
export declare type IMenuCompoennt = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuCompoennt;
export default TransMenu;
