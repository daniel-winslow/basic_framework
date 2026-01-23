import { useState } from 'react';
import Alert from '../Alert';

interface AlertListProps {
    /** Whether the entire alert list can be dismissed */
    dismissible: boolean;
    /** Array of alert objects to display */
    alerts: { type: 'success' | 'danger' | 'warning' | 'info'; message: string; dismissible: boolean }[];
}

/**
 * Displays a list of alerts, can be dismissed as a whole
 */
const AlertList = ({ dismissible, alerts }: AlertListProps) => {
    const [ visible, setVisible ] = useState(true);

    return (
        visible && (<div className="alert-list">
            <h2>Alert List</h2>
            {dismissible && <button className="btn btn-danger btn-outline mb-md" onClick={() => setVisible(false)} aria-label="Close Alert">
                Dismiss All
            </button>}
            {alerts.map((alert, index) => (
                <Alert key={index} type={alert.type} message={alert.message} dismissible={alert.dismissible} />
            ))}
        </div>
        )
    );
};
export default AlertList;