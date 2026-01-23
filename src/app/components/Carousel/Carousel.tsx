import { useState, useRef, useEffect, CSSProperties, Children, ReactNode } from 'react';
import { CarouselProps } from './carouselTypes';
import CarouselContext from './CarouselContext';
import CarouselContent from './CarouselContent';
import CarouselItem from './CarouselItem';
import CarouselPrevious from './CarouselPrevious';
import CarouselNext from './CarouselNext';

/** A Carousel component that displays a series of items with navigation controls. */
const Carousel = ({
    children,
    className = '',
    style,
    slidesPerView = 1,
    gap = 16,
    autoPlay = false,
    autoPlayInterval = 5000,
    showNavigation = true,
}: CarouselProps) => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ totalSlides, setTotalSlides ] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const maxIndex = Math.max(0, totalSlides - slidesPerView);
    const canScrollPrev = currentIndex > 0;
    const canScrollNext = currentIndex < maxIndex;

    const scrollPrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const scrollNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.max(0, Math.min(maxIndex, index)));
    };

    useEffect(() => {
        if (containerRef.current) {
            const slides = containerRef.current.querySelectorAll('[data-carousel-item]');
            setTotalSlides(slides.length);
        }
    });

    useEffect(() => {
        if (autoPlay && totalSlides > slidesPerView) {
            autoPlayRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
            }, autoPlayInterval);

            return () => {
                if (autoPlayRef.current) {
                    clearInterval(autoPlayRef.current);
                }
            };
        }
    }, [ autoPlay, autoPlayInterval, maxIndex, totalSlides, slidesPerView ]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            scrollPrev();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            scrollNext();
        }
    };

    const slides = Children.map(children, (child: ReactNode) => (
        <CarouselItem>{child}</CarouselItem>
    ));

    return (
        <CarouselContext.Provider
            value={{
                currentIndex,
                totalSlides,
                slidesPerView,
                gap,
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
                goToSlide,
            }}
        >
            <div
                ref={containerRef}
                className={`carousel ${className}`}
                style={{ '--carousel-gap': `${gap}px`, ...style } as CSSProperties}
                role="region"
                aria-roledescription="carousel"
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <CarouselContent>{slides}</CarouselContent>
                {showNavigation && (
                    <>
                        <CarouselPrevious />
                        <CarouselNext />
                    </>
                )}
            </div>
        </CarouselContext.Provider>
    );
}

export default Carousel;