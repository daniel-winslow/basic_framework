import { ThemeToggle } from "@/app/components";
import NavList from "./NavList";

type Page = 'components' | 'layouts' | 'docs';

interface NavbarProps {
    /** The currently active page */
    currentPage: Page;
    /** Optional boolean to add a bottom border */
    borderBottom?: boolean;
}

/** 
 * Navbar component with optional bottom border 
 */
const Navbar = ({ currentPage, borderBottom }: NavbarProps) => {
    return (
        <nav className={`nav${borderBottom ? ' border-b' : ''}`}>
            <div className="container">
                <div className="flex items-center justify-between flex-wrap gap-md">
                    <div className="flex items-center gap-md lg:gap-lg flex-wrap">
                        <h2 className="mb-0 text-lg md:text-2xl">Yo Mamma's House</h2>
                        <NavList navItems={[ 'components', 'layouts' ]} currentPage={currentPage} />
                    </div>
                    <div className="flex items-center gap-md">
                        <span className="text-sm text-secondary hidden sm:inline">Theme</span>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;