import CardProps from './CardProps';

/**
 * Card Title Section of Card Component
 */
const CardTitle = ({ children, className = '' }: CardProps) => {
    return (
        <h3 className={`card-title ${className}`}>
            {children}
        </h3>
    );
}

export default CardTitle;