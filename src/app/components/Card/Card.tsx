import CardProps from './CardProps';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardTitle from './CardTitle';
import CardDescription from './CardDescription';

/**
 * Card Component
 */
const Card = ({ cardContent, cardTitle, cardDescription, cardFooter, className = '' }: CardProps) => {
    return (
        <div className={`card text-card-foreground flex flex-col gap-6 rounded-xl border ${className}`}>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
                <CardDescription>{cardDescription}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                {cardContent}
            </CardContent>
            <CardFooter>
                {cardFooter}
            </CardFooter>
        </div>
    );
}

export default Card;