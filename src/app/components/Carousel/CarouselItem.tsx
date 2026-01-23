import { useCarousel } from "@/app/hooks";
import { CarouselItemProps } from "./carouselTypes";

/** CarouselItem Component - represents a single item within the carousel */
const CarouselItem = ({ children, className = '' }: CarouselItemProps) => {
    const { slidesPerView, gap } = useCarousel();

    return (
        <div
            data-carousel-item
            className={`carousel-item ${className}`}
            role="group"
            aria-roledescription="slide"
            style={{
                flex: `0 0 calc((100% - ${gap * (slidesPerView - 1)}px) / ${slidesPerView})`,
            }}
        >
            {children}
        </div>
    );
}

export default CarouselItem;