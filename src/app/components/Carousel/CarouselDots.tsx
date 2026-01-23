import { useCarousel } from '@/app/hooks';

/** CarouselDots Component - renders navigation dots for the carousel */
const CarouselDots = ({ className = '' }: { className?: string }) => {
    const { currentIndex, totalSlides, slidesPerView, goToSlide } = useCarousel();
    const dotsCount = Math.max(0, totalSlides - slidesPerView + 1);

    if (dotsCount <= 1) return null;

    return (
        <div className={`carousel-dots ${className}`}>
            {Array.from({ length: dotsCount }).map((_, index) => (
                <button
                    key={index}
                    className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}

export default CarouselDots;