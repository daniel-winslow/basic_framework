import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '../components/Tabs';
import CarouselShowcase from '../components/CarouselShowcase';
import { Accordion, Alert, AlertList, Drawer, Dropdown, Modal, Navbar } from '../components';

// Sample data for table
const sampleTableData = [
    { id: 1, name: 'Project Alpha', status: 'Active', progress: 70 },
    { id: 2, name: 'Project Beta', status: 'Completed', progress: 100 },
    { id: 3, name: 'Project Gamma', status: 'Pending', progress: 40 },
];

// Tabs data
const tabs = [
    { id: 'tab-1', label: 'Tab One', content: <p>Content for Tab One.</p> },
    { id: 'tab-2', label: 'Tab Two', content: <p>Content for Tab Two.</p> },
    { id: 'tab-3', label: 'Tab Three', content: <p>Content for Tab Three.</p> },
];

// Accordion items
const accordionItems = [
    { id: 'faq-1', title: 'What is this framework?', content: <p>This is a UI component framework.</p> },
    { id: 'faq-2', title: 'How to use the components?', content: <p>You can import and use them in your React projects.</p> },
    { id: 'faq-3', title: 'Is it customizable?', content: <p>Yes, all components are highly customizable.</p> },
];

const sampleDrawerBody = (drawerPosition: 'left' | 'right' | 'top' | 'bottom') => (
    <div className="flex flex-col">
        <p className="mb-md">This drawer slides in from the {drawerPosition} side of the screen.</p>
        <p className="mb-md">You can use it for navigation menus, settings panels, filters, or any side content.</p>
        <Alert type="info" message="Press ESC or click the overlay to close." />
        <div className="mt-lg">
            <h4 className="mb-sm">Sample Navigation</h4>
            <ul style={{ paddingLeft: 'var(--spacing-lg)' }}>
                <li className="mb-xs"><a href="#">Dashboard</a></li>
                <li className="mb-xs"><a href="#">Settings</a></li>
                <li className="mb-xs"><a href="#">Profile</a></li>
                <li className="mb-xs"><a href="#">Help</a></li>
            </ul>
        </div>
    </div>
);

const SampleDrawerFooter = ({ setIsDrawerOpen }: { setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
    <>
        <button className="btn btn-secondary" onClick={() => setIsDrawerOpen(false)}>
            Close
        </button>
        <button className="btn btn-primary">
            Save Changes
        </button>
    </>
)

const sampleTopDropdownItems = [
    { label: 'Edit', onClick: () => alert('Edit clicked') },
    { label: 'Duplicate', onClick: () => alert('Duplicate clicked') }
];

const sampleBottomDropdownItems = [
    { label: 'Archive', onClick: () => alert('Archive clicked') },
    { label: 'Delete', onClick: () => alert('Delete clicked') }
];

const ComponentsShowcase = () => {
    const [ progress, setProgress ] = useState(50);
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ isDrawerOpen, setIsDrawerOpen ] = useState(false);
    const [ drawerPosition, setDrawerPosition ] = useState<'left' | 'right' | 'top' | 'bottom'>('left');
    const [ badgeShape, setBadgeShape ] = useState<'square' | 'pill'>('square');
    const [ spinnerShape, setSpinnerShape ] = useState<'square' | 'round'>('square');

    return (
        <>
            <Navbar currentPage="components" borderBottom />
            <div className="container pt-4 mt-xl md:mt-2xl">

                {/* Hero Section */}
                <div className="mb-xl md:mb-2xl">
                    <p className="text-lg md:text-xl">
                        Hate Tailwind like Jim? Try this out.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-md mt-lg">
                        <Link to="/docs" className="btn btn-outline">Documentation</Link>
                    </div>
                </div>

                <div className='divider'></div>

                {/* Alerts */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Alerts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                        <Alert dismissible type="success" message="Success! Your changes have been saved successfully." />
                        <Alert dismissible type="warning" message="Warning! You look too good today." />
                        <Alert dismissible type="danger" message="Error! Number Nine. Number Nine. Number Nine." />
                        <Alert dismissible type="info" message="Info: He's very clean, isn't he?" />
                    </div>
                </div>
                <div className='divider'></div>
                {/* Alert List */}
                <div className="mb-xl md:mb-2xl">
                    <AlertList dismissible={true} alerts={[
                        { type: "success", message: "Success! Your changes have been saved successfully.", dismissible: true },
                        { type: "warning", message: "Warning! You look too good today.", dismissible: true },
                        { type: "danger", message: "Error! Number Nine. Number Nine. Number Nine.", dismissible: true },
                        { type: "info", message: "Info: He's very clean, isn't he?", dismissible: true },
                    ]} />
                </div>
                <div className='divider'></div>
                {/* Cards Grid */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Cards</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
                        <div className="card ">
                            <div className="card-header">
                                <h3 className="card-title">Feature Card</h3>
                            </div>
                            <div className="card-body">
                                <p>This is a card component with header, body, and footer sections.</p>
                                <div className="flex gap-sm">
                                    <span className="badge badge-primary">Primary</span>
                                    <span className="badge badge-success">Success</span>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-sm btn-primary">Action</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Progress Tracker</h3>
                            </div>
                            <div className="card-body">
                                <p className="mb-sm">Project completion: {progress}%</p>
                                <div className="progress mb-md">
                                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                                </div>
                                <div className="flex gap-sm">
                                    <button
                                        className="btn btn-sm btn-outline"
                                        onClick={() => setProgress(Math.max(0, progress - 10))}
                                    >
                                        -10%
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline"
                                        onClick={() => setProgress(Math.min(100, progress + 10))}
                                    >
                                        +10%
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Actions</h3>
                            </div>
                            <div className="card-body">
                                <p>Dropdown menu component example:</p>
                                <Dropdown useHamburger={false} trigger={<button className="btn btn-primary btn-outline btn-block">Open Menu</button>} topItems={sampleTopDropdownItems} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
                {/* Dropdown */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Dropdown Component</h2>
                    <Dropdown useHamburger trigger={<button className="btn btn-secondary">Open Menu</button>} topItems={sampleTopDropdownItems} bottomItems={sampleBottomDropdownItems} />
                </div>
                <div className='divider'></div>
                {/* Tabs */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Tabs Component</h2>
                    <Tabs tabs={tabs} />
                </div>
                <div className='divider'></div>
                {/* Accordion */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Accordion Component</h2>
                    <p className="mb-lg">Expandable content sections for FAQs, settings, and more.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
                        <div>
                            <h4 className="mb-md">Single Select (Default)</h4>
                            <Accordion items={accordionItems} defaultOpen={[ 'faq-1' ]} />
                        </div>
                        <div>
                            <h4 className="mb-md">Multi Select</h4>
                            <Accordion items={accordionItems} allowMultiple defaultOpen={[ 'faq-1', 'faq-2' ]} />
                        </div>
                    </div>
                </div>
                <div className='divider'></div>

                {/* Carousel */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Carousel Component</h2>
                    <CarouselShowcase />
                </div>
                <div className='divider'></div>
                {/* Drawer */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Drawer Component</h2>
                    <p className="mb-lg">A sliding panel that can appear from any edge of the screen.</p>
                    <div className="flex flex-col gap-md">
                        <div className="flex gap-sm flex-wrap">
                            <button
                                className={`btn ${drawerPosition === 'left' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setDrawerPosition('left')}
                            >
                                Left
                            </button>
                            <button
                                className={`btn ${drawerPosition === 'right' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setDrawerPosition('right')}
                            >
                                Right
                            </button>
                            <button
                                className={`btn ${drawerPosition === 'top' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setDrawerPosition('top')}
                            >
                                Top
                            </button>
                            <button
                                className={`btn ${drawerPosition === 'bottom' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setDrawerPosition('bottom')}
                            >
                                Bottom
                            </button>
                        </div>
                        <button className="btn btn-outline" onClick={() => setIsDrawerOpen(true)}>
                            Open Drawer ({drawerPosition})
                        </button>
                    </div>
                </div>
                <div className='divider'></div>
                {/* Modal */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Modal Component</h2>
                    <button className="btn btn-outline" onClick={() => setIsModalOpen(true)}>
                        Open Modal
                    </button>
                </div>
                <div className='divider'></div>
                {/* Form Example */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Form Elements</h2>
                    <div className="max-w-2xl">
                        <form className="border p-md" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="label">Full Name</label>
                                <input type="text" className="input" placeholder="Enter your name" />
                                <span className="helper-text">This is a helper text for the input field.</span>
                            </div>

                            <div className="form-group">
                                <label className="label">Email Address</label>
                                <input type="email" className="input" placeholder="your.email@example.com" />
                            </div>

                            <div className="form-group">
                                <label className="label">Select Option</label>
                                <select className="select">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="label">Message</label>
                                <textarea className="textarea" placeholder="Enter your message"></textarea>
                            </div>

                            <div className="form-group">
                                <label className="checkbox-wrapper">
                                    <input type="checkbox" className="checkbox" />
                                    <span>I agree to the terms and conditions</span>
                                </label>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-md">
                                <button type="submit" className="btn btn-primary">Submit Form</button>
                                <button type="button" className="btn btn-secondary">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='divider'></div>
                {/* Table */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Data Table</h2>
                    <p className="mb-md text-secondary">Responsive table that transforms to cards on mobile.</p>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Project Name</th>
                                    <th>Status</th>
                                    <th>Progress</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sampleTableData.map((row) => (
                                    <tr key={row.id}>
                                        <td data-label="ID">{row.id}</td>
                                        <td data-label="Project">{row.name}</td>
                                        <td data-label="Status">
                                            <span
                                                className={`badge ${row.status === 'Active'
                                                    ? 'badge-success'
                                                    : row.status === 'Completed'
                                                        ? 'badge-info'
                                                        : 'badge-warning'
                                                    }`}
                                            >
                                                {row.status}
                                            </span>
                                        </td>
                                        <td data-label="Progress">
                                            <div className="progress" style={{ minWidth: '100px' }}>
                                                <div className="progress-bar" style={{ width: `${row.progress}%` }}></div>
                                            </div>
                                        </td>
                                        <td data-label="Actions">
                                            <div className="flex gap-sm">
                                                <button className="btn btn-sm btn-secondary">Edit</button>
                                                <button className="btn btn-sm btn-outline">View</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='divider'></div>
                {/* Button Variants */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Button Variants</h2>
                    <div className="flex gap-sm md:gap-md flex-wrap mb-lg">
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                        <button className="btn btn-outline">Outline</button>
                        <button className="btn btn-success">Success</button>
                        <button className="btn btn-danger">Danger</button>
                        <button className="btn btn-primary" disabled>
                            Disabled
                        </button>
                    </div>
                    <div className="flex gap-sm md:gap-md flex-wrap mb-lg">
                        <button className="btn btn-primary btn-sm">Small</button>
                        <button className="btn btn-primary">Regular</button>
                        <button className="btn btn-primary btn-lg">Large</button>
                    </div>
                    <div className="flex gap-sm md:gap-md flex-wrap mb-lg">
                        <button className="btn btn-lg btn-secondary btn-sm btn-sharp">
                            Sharp
                        </button>
                        <button className="btn btn-lg btn-secondary btn-sm rounded">
                            Rounded
                        </button>
                    </div>
                    <button className="btn btn-primary btn-block">Full Width Button</button>
                </div>
                <div className='divider'></div>
                {/* Badges */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Badges</h2>
                    <div className="flex gap-md mb-md">
                        <button
                            className={`btn btn-sm ${badgeShape === 'square' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setBadgeShape('square')}
                        >
                            Square
                        </button>
                        <button
                            className={`btn btn-sm ${badgeShape === 'pill' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setBadgeShape('pill')}
                        >
                            Pill
                        </button>
                    </div>
                    <div className="flex flex-col gap-md">
                        <div className="flex gap-sm flex-wrap">
                            <span className={`badge badge-primary ${badgeShape === 'pill' ? 'badge-pill' : ''}`}>Primary</span>
                            <span className={`badge badge-secondary ${badgeShape === 'pill' ? 'badge-pill' : ''}`}>Secondary</span>
                            <span className={`badge badge-success ${badgeShape === 'pill' ? 'badge-pill' : ''}`}>Success</span>
                            <span className={`badge badge-warning ${badgeShape === 'pill' ? 'badge-pill' : ''}`}>Warning</span>
                            <span className={`badge badge-danger ${badgeShape === 'pill' ? 'badge-pill' : ''}`}>Danger</span>
                            <span className={`badge badge-info ${badgeShape === 'pill' ? 'badge-pill' : ''}`}>Info</span>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
                {/* Spinner */}
                <div className="mb-xl md:mb-2xl">
                    <h2>Loading Spinners</h2>
                    <div className="flex gap-md mb-md">
                        <button
                            className={`btn btn-sm ${spinnerShape === 'square' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setSpinnerShape('square')}
                        >
                            Square
                        </button>
                        <button
                            className={`btn btn-sm ${spinnerShape === 'round' ? 'btn-primary' : 'btn-secondary'}`}
                            onClick={() => setSpinnerShape('round')}
                        >
                            Round
                        </button>
                    </div>
                    <div className="flex items-center gap-lg md:gap-xl">
                        <div className={`spinner spinner-sm ${spinnerShape === 'round' ? 'spinner-round' : ''}`}></div>
                        <div className={`spinner ${spinnerShape === 'round' ? 'spinner-round' : ''}`}></div>
                        <div className={`spinner spinner-lg ${spinnerShape === 'round' ? 'spinner-round' : ''}`}></div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center p-lg md:p-xl">
                    <p className="text-secondary text-sm md:text-base">
                    </p>
                </div>

                {/* Modal */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Example Modal"
                    footer={
                        <>
                            <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>
                                Confirm
                            </button>
                        </>
                    }
                >
                    <p>This is a modal component.</p>
                    <div className="mt-md">
                        <Alert type="info" message="Press the X or click outside the modal to close." />
                    </div>
                </Modal>

                {/* Drawer */}
                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    position={drawerPosition}
                    header={`${drawerPosition.charAt(0).toUpperCase() + drawerPosition.slice(1)} Drawer`}
                    footer={<SampleDrawerFooter setIsDrawerOpen={setIsDrawerOpen} />}

                >
                    {sampleDrawerBody(drawerPosition)}
                </Drawer>
            </div>
        </>
    );
};
export default ComponentsShowcase;