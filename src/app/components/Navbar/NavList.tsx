import { Link } from "react-router-dom";
import NavItem from "./NavItem";

type Page = 'components' | 'layouts' | 'docs';

interface NavListProps {
    /** Array of navigation item links */
    navItems: Page[];
    /** The currently active page */
    currentPage: Page;
}

/** 
 * NavList component rendering a list of navigation items 
 */
const NavList = ({ navItems, currentPage }: NavListProps) => {
    return (
        <ul className="nav-list">
            {navItems.map((link) => (

                <Link to={`/${link}`} key={link}><NavItem link={link} isActive={!currentPage || currentPage === link} /></Link>
            ))}
        </ul>
    );
}

export default NavList;