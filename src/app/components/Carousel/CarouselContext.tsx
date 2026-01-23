import { createContext } from 'react';
import { CarouselContextType } from './carouselTypes';

/** CarouselContext provides the current state and actions for the Carousel component */
const CarouselContext = createContext<CarouselContextType | null>(null);

export default CarouselContext;