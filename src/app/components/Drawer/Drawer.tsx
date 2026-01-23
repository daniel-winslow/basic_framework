import { useState, useEffect } from 'react';
import { DrawerProps } from './drawerTypes';
import DrawerHeader from './DrawerHeader';
import DrawerBody from './DrawerBody';
import DrawerFooter from './DrawerFooter';

/** Drawer component that slides in from the specified position */
const Drawer = ({
    isOpen,
    onClose,
    position = 'left',
    children,
    showOverlay = true,
    closeOnOverlayClick = true,
    width,
    height,
    header,
    footer,
}: DrawerProps) => {
    const [ isVisible, setIsVisible ] = useState(false);
    const [ isAnimating, setIsAnimating ] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsAnimating(true);
                });
            });
        } else {
            setIsAnimating(false);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [ isOpen ]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [ isOpen, onClose ]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [ isOpen ]);

    if (!isVisible) return null;

    const handleOverlayClick = () => {
        if (closeOnOverlayClick) {
            onClose();
        }
    };

    const drawerStyle: React.CSSProperties = {};
    if (width && (position === 'left' || position === 'right')) {
        drawerStyle.width = width;
    }
    if (height && (position === 'top' || position === 'bottom')) {
        drawerStyle.height = height;
    }

    return (
        <div className={`drawer-container ${isAnimating ? 'drawer-active' : ''}`}>
            {showOverlay && (
                <div className="drawer-overlay" onClick={handleOverlayClick} />
            )}
            <div
                className={`drawer drawer-${position}`}
                style={drawerStyle}
            >
                <div className="drawer-content">
                    {header && (
                        <DrawerHeader onClose={onClose}>
                            {header}
                        </DrawerHeader>
                    )}
                    <DrawerBody>{children}</DrawerBody>
                    {footer && (
                        <DrawerFooter>{footer}</DrawerFooter>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Drawer;