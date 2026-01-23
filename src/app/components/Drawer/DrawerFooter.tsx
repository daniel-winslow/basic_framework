import { ReactNode } from 'react';

/** Component representing the body section of a drawer */
const DrawerFooter = ({ children }: { children: ReactNode }) => {
    return <div className="drawer-footer">{children}</div>;
}

export default DrawerFooter;