import React from 'react';
import { Icon } from '@/app/components';
import { useCarousel } from '@/app/hooks';

/** CarouselNext Component - button to navigate to the next slide in the carousel */
const CarouselNext = ({
    className = '',
    style,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
        <button
            className={`carousel-btn carousel-btn-next btn btn-secondary ${className}`}
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
            style={{ ...style }}
            {...props}
        >
            <Icon name="chevron-up" style={{ transform: 'rotate(90deg)' }} />
        </button>
    );
}

export default CarouselNext;