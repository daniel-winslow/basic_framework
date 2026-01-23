

/** Animated hamburger icon that changes appearance when open. Goes criss cross applesauce */
const AnimatedHamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <div className={`hamburger-icon ${isOpen ? 'hamburger-open' : ''}`}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </div>
    );
}

export default AnimatedHamburgerIcon;