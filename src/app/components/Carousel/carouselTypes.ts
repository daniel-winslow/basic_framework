import { ReactNode, CSSProperties } from 'react';

interface CarouselContextType {
    /** Current active slide index */
    currentIndex: number;
    /** Total number of slides in the carousel */
    totalSlides: number;
    /** Number of slides visible at once */
    slidesPerView: number;
    /** Gap between slides in pixels */
    gap: number;
    /** Function to scroll to the previous slide */
    scrollPrev: () => void;
    /** Function to scroll to the next slide */
    scrollNext: () => void;
    /** Whether scrolling to previous slide is possible */
    canScrollPrev: boolean;
    /** Whether scrolling to next slide is possible */
    canScrollNext: boolean;
    /** Function to go to a specific slide by index */
    goToSlide: (index: number) => void;
}

interface CarouselProps {
    /**
     * The content of the carousel, typically Carousel.Item components.
     */
    children: ReactNode;
    /**
     * Additional CSS classes to apply to the carousel container.
     */
    className?: string;
    /**
     * Inline styles to apply to the carousel container.
     */
    style?: CSSProperties;
    /**
     * Number of slides to show at once.
     */
    slidesPerView?: number;
    /**
     * Gap between slides in pixels.
     */
    gap?: number;
    /**
     * Whether to enable auto-play functionality.
     */
    autoPlay?: boolean;
    /**
     * Interval in milliseconds for auto-play.
     */
    autoPlayInterval?: number;
    /**
     * Whether to show navigation buttons.
     */
    showNavigation?: boolean;
}

interface CarouselItemProps {
    /** The content of the carousel item. */
    children: ReactNode;
    /** Additional CSS classes to apply to the carousel item. */
    className?: string;
}

export type { CarouselContextType, CarouselProps, CarouselItemProps };