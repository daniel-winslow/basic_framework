import { useCarousel } from "@/app/hooks";
import { Icon } from "@/app/components";

/** CarouselNext Component - button to navigate to the next slide in the carousel */
const CarouselPrevious = ({
    className = '',
    style,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
        <button
            className={`carousel-btn carousel-btn-prev btn btn-secondary ${className}`}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
            style={{ ...style }}
            {...props}
        >
            <Icon name="chevron-down" style={{ transform: 'rotate(90deg)' }} />
        </button>
    );
}

export default CarouselPrevious;