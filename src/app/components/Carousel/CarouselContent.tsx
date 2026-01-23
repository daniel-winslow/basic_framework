import { ReactNode } from 'react';
import { useCarousel } from '@/app/hooks';

/** CarouselContent Component - handles the display and sliding of carousel items */
const CarouselContent = ({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) => {
    const { currentIndex, slidesPerView, gap } = useCarousel();

    // Calculate transform
    const slideWidth = `calc((100% - ${gap * (slidesPerView - 1)}px) / ${slidesPerView})`;
    const translateX = `calc(-${currentIndex} * (${slideWidth} + ${gap}px))`;

    return (
        <div className={`carousel-viewport ${className}`}>
            <div
                className="carousel-track"
                style={{
                    transform: `translateX(${translateX})`,
                    gap: `${gap}px`,
                }}
            >
                {children}
            </div>
        </div>
    );
}

export default CarouselContent;