import CardProps from './CardProps';

/**
 * Card Footer Section of Card Component
 */
const CardFooter = ({ children, className = '' }: CardProps) => {
    return (
        <div className={`card-footer ${className}`}>
            {children}
        </div>
    );
}

export default CardFooter;