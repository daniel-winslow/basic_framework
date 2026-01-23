import { useState } from 'react';
import Carousel from './Carousel';
import Card from './Card';

const demoSlides = [
    {
        id: 1,
        title: 'Slide 1',
        description: 'First Slide',
    },
    {
        id: 2,
        title: 'Slide 2',
        description: 'Second Slide',
    },
    {
        id: 3,
        title: 'Slide 3',
        description: 'Third Slide',
    },
    {
        id: 4,
        title: 'Slide 4',
        description: 'Fourth Slide',
    },
    {
        id: 5,
        title: 'Slide 5',
        description: 'Fifth Slide',
    },
    {
        id: 6,
        title: 'Slide 6',
        description: 'Sixth Slide',
    },
    {
        id: 7,
        title: 'Slide 7',
        description: 'Seventh Slide',
    },
    {
        id: 8,
        title: 'Slide 8',
        description: 'Eighth Slide',
    },
];

const CarouselShowcase = () => {
    const [ carouselType, setCarouselType ] = useState<'basic' | 'multiple'>('basic');
    const [ buttonStyle, setButtonStyle ] = useState<'outside' | 'overlay' | 'bottom'>('outside');

    return (
        <div>
            {/* Carousel Type Selector */}
            <div className="flex flex-wrap gap-sm mb-lg">
                <button
                    className={`btn btn-sm ${carouselType === 'basic' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setCarouselType('basic')}
                >
                    Basic Carousel
                </button>
                <button
                    className={`btn btn-sm ${carouselType === 'multiple' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setCarouselType('multiple')}
                >
                    Multiple Items
                </button>
            </div>

            {/* Button Style Selector */}
            <div className="flex flex-wrap gap-sm mb-lg">
                <span className="text-sm text-secondary flex items-center mr-sm">Button Style:</span>
                <button
                    className={`btn btn-sm ${buttonStyle === 'outside' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setButtonStyle('outside')}
                >
                    Outside
                </button>
                <button
                    className={`btn btn-sm ${buttonStyle === 'overlay' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setButtonStyle('overlay')}
                >
                    Overlay
                </button>
                <button
                    className={`btn btn-sm ${buttonStyle === 'bottom' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setButtonStyle('bottom')}
                >
                    Bottom Center
                </button>
            </div>

            <div className="p-lg flex justify-center w-full">
                {carouselType === 'basic' ? (
                    <Carousel
                        className={`carousel-showcase carousel-buttons-${buttonStyle}`}
                    >
                        {demoSlides.map((slide) => (
                            <Card key={slide.id} cardTitle={slide.title} cardDescription={slide.description} className="carousel-slide-card" />
                        ))}
                    </Carousel>
                ) : (
                    <Carousel
                        slidesPerView={3}
                        gap={16}
                        className={`carousel-multiple carousel-buttons-${buttonStyle}`}
                    >
                        {demoSlides.map((slide) => (
                            <Card key={slide.id} cardTitle={slide.title} cardDescription={slide.description} className="carousel-slide-card-sm" />
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    );
}

export default CarouselShowcase;