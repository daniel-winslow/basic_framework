import React from 'react';

export type LayoutStyle =
    | 'responsive-grid'
    | 'responsive-flex'
    | 'two-column'
    | 'three-column'
    | 'four-column'
    | 'sidebar-left'
    | 'sidebar-right'
    | 'hero'
    | 'dashboard'
    | 'classic'
    | 'card-grid'
    | 'masonry';

interface LayoutProps {
    style: LayoutStyle;
    children?: React.ReactNode;
    className?: string;
}

// Slot components for complex layouts
interface SidebarLayoutProps {
    sidebar?: React.ReactNode;
    main?: React.ReactNode;
    children?: React.ReactNode;
}

interface ClassicLayoutProps {
    header?: React.ReactNode;
    leftSidebar?: React.ReactNode;
    main?: React.ReactNode;
    rightSidebar?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

interface DashboardLayoutProps {
    stats?: React.ReactNode;
    mainContent?: React.ReactNode;
    sideContent?: React.ReactNode;
    children?: React.ReactNode;
}

interface HeroLayoutProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}

// Extended props type to handle all layout variants
type ExtendedLayoutProps = LayoutProps &
    Partial<SidebarLayoutProps> &
    Partial<ClassicLayoutProps> &
    Partial<DashboardLayoutProps> &
    Partial<HeroLayoutProps>;

const Layout: React.FC<ExtendedLayoutProps> = ({
    style,
    children,
    className = '',
    // Sidebar layout props
    sidebar,
    main,
    // Classic layout props
    header,
    leftSidebar,
    rightSidebar,
    footer,
    // Dashboard layout props
    stats,
    mainContent,
    sideContent,
    // Hero layout props
    title,
    subtitle,
    actions,
}) => {
    const baseClass = className ? ` ${className}` : '';

    switch (style) {
        case 'responsive-grid':
            return (
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-md${baseClass}`}>
                    {children}
                </div>
            );

        case 'responsive-flex':
            return (
                <div className={`flex flex-col md:flex-row gap-md${baseClass}`}>
                    {children}
                </div>
            );

        case 'two-column':
            return (
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-lg${baseClass}`}>
                    {children}
                </div>
            );

        case 'three-column':
            return (
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg${baseClass}`}>
                    {children}
                </div>
            );

        case 'four-column':
            return (
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-md${baseClass}`}>
                    {children}
                </div>
            );

        case 'sidebar-left':
            return (
                <div className={`flex flex-col lg:flex-row gap-lg${baseClass}`}>
                    {sidebar && (
                        <aside className="w-full lg:w-auto lg:flex-none" style={{ flexBasis: '280px' }}>
                            {sidebar}
                        </aside>
                    )}
                    <main className="flex-1">
                        {main || children}
                    </main>
                </div>
            );

        case 'sidebar-right':
            return (
                <div className={`flex flex-col lg:flex-row gap-lg${baseClass}`}>
                    <main className="flex-1">
                        {main || children}
                    </main>
                    {sidebar && (
                        <aside className="w-full lg:w-auto lg:flex-none" style={{ flexBasis: '280px' }}>
                            {sidebar}
                        </aside>
                    )}
                </div>
            );

        case 'hero':
            return (
                <div className={`text-center p-lg md:p-xl lg:p-2xl${baseClass}`}>
                    {title && <h1 className="mb-md">{title}</h1>}
                    {subtitle && (
                        <p className="text-lg md:text-xl mb-xl max-w-2xl" style={{ margin: '0 auto var(--spacing-xl)' }}>
                            {subtitle}
                        </p>
                    )}
                    {actions && (
                        <div className="flex flex-col sm:flex-row gap-md justify-center">
                            {actions}
                        </div>
                    )}
                    {children}
                </div>
            );

        case 'dashboard':
            return (
                <div className={`flex flex-col gap-lg${baseClass}`}>
                    {stats && (
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-md">
                            {stats}
                        </div>
                    )}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
                        {mainContent && (
                            <div className="lg:col-span-2">
                                {mainContent}
                            </div>
                        )}
                        {sideContent && (
                            <div>
                                {sideContent}
                            </div>
                        )}
                    </div>
                    {children}
                </div>
            );

        case 'classic':
            return (
                <div className={`flex flex-col${baseClass}`}>
                    {header && (
                        <header className="p-lg" style={{ borderBottom: '1px solid var(--border-color)' }}>
                            {header}
                        </header>
                    )}
                    <div className="flex flex-col lg:flex-row" style={{ minHeight: '300px' }}>
                        {leftSidebar && (
                            <aside className="p-lg lg:order-first order-last" style={{ flex: '0 0 auto', borderBottom: '1px solid var(--border-color)' }}>
                                {leftSidebar}
                            </aside>
                        )}
                        <main className="p-lg flex-1">
                            {main || children}
                        </main>
                        {rightSidebar && (
                            <aside className="p-lg" style={{ flex: '0 0 auto', borderTop: '1px solid var(--border-color)' }}>
                                {rightSidebar}
                            </aside>
                        )}
                    </div>
                    {footer && (
                        <footer className="p-lg" style={{ borderTop: '1px solid var(--border-color)' }}>
                            {footer}
                        </footer>
                    )}
                </div>
            );

        case 'card-grid':
            return (
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-md${baseClass}`}>
                    {children}
                </div>
            );

        case 'masonry':
            return (
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg${baseClass}`}>
                    {children}
                </div>
            );

        default:
            return <div className={className}>{children}</div>;
    }
};

export default Layout;
