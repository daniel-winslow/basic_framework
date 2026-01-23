interface NavItemProps {
    /** The link text for the navigation item */
    link: string;
    /** Boolean indicating if the item is active */
    isActive: boolean;
}

/** 
 * NavItem component representing a single item in the navigation bar 
 */
const NavItem = ({ link, isActive }: NavItemProps) => {
    return (
        <li className={`nav-item nav-link${isActive ? ' active' : ''}`}>
            {link}
        </li>
    );
};

export default NavItem;