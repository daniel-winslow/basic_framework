import { ReactNode } from 'react';

interface CardProps {
    /** Additional CSS classes to apply to the card container. */
    className?: string;
    /** Title of the card. */
    cardTitle?: ReactNode;
    /** Description of the card. */
    cardDescription?: ReactNode;
    /** Footer content of the card. */
    cardFooter?: ReactNode;
    /** Main content of the card. */
    cardContent?: ReactNode;
    /** Children elements to be rendered inside the card. */
    children?: ReactNode;
}

export default CardProps;