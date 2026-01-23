import { useState } from 'react';
import { Icon } from '@/app/components';

interface AlertProps {
    /** The type of alert. Can be 'success', 'danger', 'warning', or 'info' */
    type: 'success' | 'danger' | 'warning' | 'info';
    /** Whether the alert can be dismissed */
    dismissible?: boolean;
    /** The alert message to display */
    message: string;
}

/**
 * Alert Component - can be made dismissible or permanent until page reload
 */
const Alert = ({ type, message, dismissible }: AlertProps) => {
    const [ visible, setVisible ] = useState(true);

    return (
        visible && (
            <div className={`alert alert-${type} flex justify-between items-center`}>
                <span>{message}</span>
                {dismissible && <button className="btn btn-sm btn-clear alert-close" onClick={() => setVisible(false)} aria-label="Close Alert">
                    <Icon name="close" />
                </button>}
            </div>
        )
    );
};

export default Alert;