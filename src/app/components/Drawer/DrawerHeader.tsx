import { DrawerHeaderProps } from './drawerTypes';
import { Icon } from '@/app/components';

/** Component representing the header section of a drawer */
const DrawerHeader = ({ children, onClose, showCloseButton = true }: DrawerHeaderProps) => {
    return (
        <div className="drawer-header">
            <div className="drawer-header-content">{children}</div>
            {showCloseButton && onClose && (
                <button className="drawer-close-btn" onClick={onClose} aria-label="Close drawer">
                    <Icon name="close" />
                </button>
            )}
        </div>
    );
}

export default DrawerHeader;