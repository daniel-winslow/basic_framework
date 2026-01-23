import { ReactNode } from 'react';

interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to call when closing the modal */
  onClose: () => void;
  /** Title of the modal */
  title: string;
  /** Content of the modal */
  children: ReactNode;
  /** Optional footer content */
  footer?: ReactNode;
}

/** Modal component with overlay, header, body, and optional footer */
const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="mb-0">{title}</h3>
          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;