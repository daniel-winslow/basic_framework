import CardProps from './CardProps';

/**
 * Card Header Section of Card Component
 */
const CardHeader = ({ children, className = '' }: CardProps) => {
    return (
        <div className={`card-header ${className}`}>
            {children}
        </div>
    );
}

export default CardHeader;