import CardProps from './CardProps';

/**
 * Card Description Section of Card Component
 */
const CardDescription = ({ children, className = '' }: CardProps) => {
    return (
        <p className={`card-description ${className}`}>
            {children}
        </p>
    );
}

export default CardDescription;