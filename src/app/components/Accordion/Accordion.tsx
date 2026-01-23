import { useState, ReactNode } from 'react';
import { Icon } from '@/app/components';

interface AccordionItemData {
    /** Unique identifier for the accordion item */
    id: string;
    /** Title displayed on the accordion trigger */
    title: string;
    /** Content displayed when the accordion item is expanded */
    content: ReactNode;
}

interface AccordionProps {
    /** List of accordion items to display */
    items: AccordionItemData[];
    /** Whether to allow multiple items to be open simultaneously */
    allowMultiple?: boolean;
    /** List of item IDs that should be open by default */
    defaultOpen?: string[];
}

/**
 * Collapsible Accordion Component. Can be retstricted to single open item or allow multiple.
 */
const Accordion = ({ items, allowMultiple = false, defaultOpen = [] }: AccordionProps) => {
    const [ openItems, setOpenItems ] = useState<string[]>(defaultOpen);

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenItems((prev) =>
                prev.includes(id) ? prev.filter((item) => item !== id) : [ ...prev, id ]
            );
        } else {
            setOpenItems((prev) => (prev.includes(id) ? [] : [ id ]));
        }
    };

    const isOpen = (id: string) => openItems.includes(id);

    return (
        <div className="accordion">
            {items.map((item) => (
                <div key={item.id} className={`accordion-item ${isOpen(item.id) ? 'open' : ''}`}>
                    <button
                        className="accordion-trigger"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen(item.id)}
                    >
                        <span className="accordion-title">{item.title}</span>
                        <span className="accordion-icon"><Icon name={isOpen(item.id) ? 'minus' : 'add'} /></span>
                    </button>
                    <div className={`accordion-content ${isOpen(item.id) ? 'open' : ''}`}>
                        <div className="accordion-body">{item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;