import { ReactNode } from 'react';

type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

interface DrawerProps {
    /** Whether the drawer is open or closed */
    isOpen: boolean;
    /** Function to call when the drawer should be closed */
    onClose: () => void;
    /** Optional. Position of the drawer (Default is left.) */
    position?: DrawerPosition;
    /** Content to be rendered inside the drawer */
    children: ReactNode;
    /** Optional. Whether to show an overlay behind the drawer */
    showOverlay?: boolean;
    /** Optional. Whether clicking on the overlay should close the drawer */
    closeOnOverlayClick?: boolean;
    /** Optional. Size of the drawer (e.g., '300px', '50%') */
    size?: string;
    /** Optional. Custom styles for the drawer */
    style?: React.CSSProperties;
    /** Optional. Class name for the drawer */
    className?: string;
    /** Optional. Width for top/bottom positioned drawers */
    width?: string;
    /** Optional. Height for left/right positioned drawers */
    height?: string;
    /** Optional. Header content */
    header?: ReactNode;
    /** Optional. Footer content */
    footer?: ReactNode;
}

interface DrawerHeaderProps {
    /** Content to be rendered inside the drawer header */
    children: ReactNode;
    /** Optional. Function to call when the close button is clicked */
    onClose?: () => void;
    /** Optional. Whether to show the close button */
    showCloseButton?: boolean;
}

export type { DrawerProps, DrawerHeaderProps };