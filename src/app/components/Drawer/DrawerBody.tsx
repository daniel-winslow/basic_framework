import { ReactNode } from 'react';

/** Component representing the body section of a drawer */
const DrawerBody = ({ children }: { children: ReactNode }) => {
    return <div className="drawer-body">{children}</div>;
}

export default DrawerBody;