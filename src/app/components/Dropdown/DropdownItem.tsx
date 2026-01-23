import { ReactNode } from 'react';

/** Single item in a dropdown menu */
const DropdownItem = ({ label, onClick }: { label: ReactNode; onClick?: () => void }) => {
    return (
        <div className="dropdown-item" onClick={onClick}>
            {label}
        </div>
    );
}
export default DropdownItem;