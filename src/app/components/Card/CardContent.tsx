import CardProps from './CardProps';

/**
 * Card Content Section of Card Component
 */
const CardContent = ({ children, className = '' }: CardProps) => {
    return (
        <div className={`card-body ${className}`}>
            {children}
        </div>
    );
}

export default CardContent;