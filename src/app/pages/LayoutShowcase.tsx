
import Layout from '../layouts/Layout';
import { Navbar } from '@/app/components';

const LayoutShowcase = () => {
  return (
    <>
      <Navbar currentPage="layouts" borderBottom={true} />
      <div className="container mt-2xl">
        <h1>Layout</h1>

        {/* Responsive Breakpoints Reference */}
        <section className="mb-2xl">
          <h2>Responsive Breakpoints</h2>
          <p className="mb-lg">The framework uses mobile-first breakpoints:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md">
            <div className="card text-center">
              <h4 className="mb-xs">Base</h4>
              <p className="text-sm mb-0 text-secondary">&lt; 640px</p>
              <span className="badge badge-secondary mt-sm">Mobile</span>
            </div>
            <div className="card text-center">
              <h4 className="mb-xs">sm:</h4>
              <p className="text-sm mb-0 text-secondary">≥ 640px</p>
              <span className="badge badge-info mt-sm">Small</span>
            </div>
            <div className="card text-center">
              <h4 className="mb-xs">md:</h4>
              <p className="text-sm mb-0 text-secondary">≥ 768px</p>
              <span className="badge badge-primary mt-sm">Medium</span>
            </div>
            <div className="card text-center">
              <h4 className="mb-xs">lg:</h4>
              <p className="text-sm mb-0 text-secondary">≥ 1024px</p>
              <span className="badge badge-success mt-sm">Large</span>
            </div>
            <div className="card text-center">
              <h4 className="mb-xs">xl:</h4>
              <p className="text-sm mb-0 text-secondary">≥ 1280px</p>
              <span className="badge badge-warning mt-sm">XL</span>
            </div>
          </div>
        </section>

        {/* Current Breakpoint Indicator */}
        <section className="mb-2xl">
          <h2>Current Breakpoint</h2>
          <p className="mb-lg">Resize your browser to see the current active breakpoint:</p>
          <div className="card text-center p-xl">
            <div className="show-mobile-only">
              <span className="badge badge-danger text-lg p-md">📱 MOBILE (Base)</span>
              <p className="mt-md text-secondary">Screen width &lt; 640px</p>
            </div>
            <div className="hidden sm:block md:hidden">
              <span className="badge badge-info text-lg p-md">📱 SMALL (sm)</span>
              <p className="mt-md text-secondary">Screen width ≥ 640px</p>
            </div>
            <div className="hidden md:block lg:hidden">
              <span className="badge badge-primary text-lg p-md">💻 MEDIUM (md)</span>
              <p className="mt-md text-secondary">Screen width ≥ 768px</p>
            </div>
            <div className="hidden lg:block xl:hidden">
              <span className="badge badge-success text-lg p-md">🖥️ LARGE (lg)</span>
              <p className="mt-md text-secondary">Screen width ≥ 1024px</p>
            </div>
            <div className="hidden xl:block">
              <span className="badge badge-warning text-lg p-md">🖥️ EXTRA LARGE (xl)</span>
              <p className="mt-md text-secondary">Screen width ≥ 1280px</p>
            </div>
          </div>
        </section>

        {/* Responsive Grid Demo */}
        <section className="mb-2xl">
          <h2>Responsive Grid</h2>
          <p className="mb-lg">Grid that adapts from 1 → 2 → 3 → 4 columns based on screen size</p>
          <Layout style="responsive-grid">
            {[ 1, 2, 3, 4, 5, 6, 7, 8 ].map((num) => (
              <div key={num} className="card text-center">
                <h4 className="mb-0">Item {num}</h4>
              </div>
            ))}
          </Layout>
        </section>

        {/* Responsive Flex Direction */}
        <section className="mb-2xl">
          <h2>Responsive Flex Direction</h2>
          <p className="mb-lg">Stack vertically on mobile, horizontal on larger screens</p>
          <Layout style="responsive-flex">
            <div className="card md:flex-1">
              <h4>Column 1</h4>
              <p className="mb-0">Stacks vertically on mobile, side-by-side otherwise</p>
            </div>
            <div className="card md:flex-1">
              <h4>Column 2</h4>
              <p className="mb-0">Uses <code>flex-col md:flex-row</code></p>
            </div>
            <div className="card md:flex-1">
              <h4>Column 3</h4>
              <p className="mb-0">Each card uses <code>md:flex-1</code> for equal width</p>
            </div>
          </Layout>
        </section>

        {/* Responsive Visibility */}
        <section className="mb-2xl">
          <h2>Responsive Visibility</h2>
          <p className="mb-lg">Show/hide elements at different breakpoints</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="card">
              <h4>Visibility Classes</h4>
              <div className="flex flex-col gap-sm">
                <div className="show-mobile-only">
                  <span className="badge badge-danger">📱 Visible on Mobile Only</span>
                </div>
                <div className="show-tablet-only">
                  <span className="badge badge-info">💻 Visible on Tablet Only</span>
                </div>
                <div className="show-desktop-only">
                  <span className="badge badge-success">🖥️ Visible on Desktop Only</span>
                </div>
                <div className="hide-mobile">
                  <span className="badge badge-primary">Hidden on Mobile</span>
                </div>
              </div>
            </div>
            <div className="card">
              <h4>Breakpoint Classes</h4>
              <div className="flex flex-col gap-sm">
                <div className="hidden sm:block">
                  <span className="badge badge-secondary">sm:block - Hidden on base</span>
                </div>
                <div className="hidden md:block">
                  <span className="badge badge-secondary">md:block - Shows at 768px+</span>
                </div>
                <div className="hidden lg:block">
                  <span className="badge badge-secondary">lg:block - Shows at 1024px+</span>
                </div>
                <div className="block md:hidden">
                  <span className="badge badge-warning">md:hidden - Hides at 768px+</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="mb-2xl">
          <h2>Two Column Layout (50/50)</h2>
          <p className="mb-lg">Equal width columns - stacked on mobile, side by side otherwise</p>
          <Layout style="two-column">
            <div className="card">
              <h3>Left Column</h3>
              <p>This is the left column with equal width. Perfect for side-by-side content.</p>
              <button className="btn btn-primary">Action</button>
            </div>
            <div className="card">
              <h3>Right Column</h3>
              <p>This is the right column with equal width. Both columns have the same space.</p>
              <button className="btn btn-secondary">Action</button>
            </div>
          </Layout>
        </section>

        {/* Three Column Layout */}
        <section className="mb-2xl">
          <h2>Three Column Layout</h2>
          <p className="mb-lg">Responsive: 1 col → 2 col → 3 col</p>
          <Layout style="three-column">
            <div className="card">
              <h4>Column 1</h4>
              <p>First column of three equal width columns.</p>
              <span className="badge badge-primary">Featured</span>
            </div>
            <div className="card">
              <h4>Column 2</h4>
              <p>Second column of three equal width columns.</p>
              <span className="badge badge-success">Active</span>
            </div>
            <div className="card">
              <h4>Column 3</h4>
              <p>Third column of three equal width columns.</p>
              <span className="badge badge-info">New</span>
            </div>
          </Layout>
        </section>

        {/* Four Column Layout */}
        <section className="mb-2xl">
          <h2>Four Column Layout</h2>
          <p className="mb-lg">Responsive stats: 2 col mobile → 4 col desktop</p>
          <Layout style="four-column">
            <div className="card text-center">
              <h2 className="mb-sm">2.5K</h2>
              <p className="text-sm mb-0">Users</p>
            </div>
            <div className="card text-center">
              <h2 className="mb-sm">145</h2>
              <p className="text-sm mb-0">Projects</p>
            </div>
            <div className="card text-center">
              <h2 className="mb-sm">89%</h2>
              <p className="text-sm mb-0">Success</p>
            </div>
            <div className="card text-center">
              <h2 className="mb-sm">$45K</h2>
              <p className="text-sm mb-0">Revenue</p>
            </div>
          </Layout>
        </section>

        {/* Responsive Sidebar Layout */}
        <section className="mb-2xl">
          <h2>Responsive Sidebar Layout</h2>
          <p className="mb-lg">Sidebar stacks on mobile, appears alongside content on desktop</p>
          <Layout
            className="mb-2xl"
            style="sidebar-left"
            sidebar={
              <div className="card">
                <h3>Sidebar</h3>
                <ul className="nav-list flex-col items-start gap-sm">
                  <li className="nav-item active w-full">Dashboard</li>
                  <li className="nav-item w-full">Analytics</li>
                  <li className="nav-item w-full">Reports</li>
                  <li className="nav-item w-full">Settings</li>
                </ul>
                <hr className="divider" />
                <button className="btn btn-primary btn-block btn-sm">New Project</button>
              </div>
            }
            main={
              <div className="card">
                <h3>Main Content Area</h3>
                <p>This is the main content area that takes up the remaining space. The sidebar has a fixed width while this area is flexible.</p>
                <div className="alert alert-info">
                  <strong>Pro Tip:</strong> On mobile, sidebar stacks above content. On desktop, it's side by side.
                </div>
                <div className="flex flex-col sm:flex-row gap-sm mt-lg">
                  <button className="btn btn-primary">Primary Action</button>
                  <button className="btn btn-secondary">Secondary</button>
                </div>
              </div>
            }
          />
        </section>

        {/* Reversed Sidebar Layout */}
        <section className="mb-2xl">
          <h2>Reversed Sidebar Layout</h2>
          <p className="mb-lg">Sidebar stacks on mobile, appears alongside content on desktop</p>
          <Layout
            style="sidebar-right"
            sidebar={
              <div className="card">
                <h3>Sidebar</h3>
                <ul className="nav-list flex-col items-start gap-sm">
                  <li className="nav-item active w-full">Dashboard</li>
                  <li className="nav-item w-full">Analytics</li>
                  <li className="nav-item w-full">Reports</li>
                  <li className="nav-item w-full">Settings</li>
                </ul>
                <hr className="divider" />
                <button className="btn btn-primary btn-block btn-sm">New Project</button>
              </div>
            }
            main={
              <div className="card">
                <h3>Main Content Area</h3>
                <p>This is the main content area that takes up the remaining space. The sidebar has a fixed width while this area is flexible.</p>
                <div className="alert alert-info">
                  <strong>Pro Tip:</strong> On mobile, sidebar stacks above content. On desktop, it's side by side.
                </div>
                <div className="flex flex-col sm:flex-row gap-sm mt-lg">
                  <button className="btn btn-primary">Primary Action</button>
                  <button className="btn btn-secondary">Secondary</button>
                </div>
              </div>
            }
          />
        </section>

        {/* Responsive Order Demo */}
        <section className="mb-2xl">
          <h2>Responsive Order</h2>
          <p className="mb-lg">Change element order at different breakpoints</p>
          <div className="flex flex-col md:flex-row gap-md">
            <div className="card flex-1 order-last md:order-first">
              <h4>First on Desktop</h4>
              <p className="mb-0">Uses <code>order-last md:order-first</code></p>
              <span className="badge badge-primary">Appears last on mobile</span>
            </div>
            <div className="card flex-1">
              <h4>Always Middle</h4>
              <p className="mb-0">No order class - stays in DOM order</p>
              <span className="badge badge-secondary">Natural position</span>
            </div>
            <div className="card flex-1 order-first md:order-last">
              <h4>Last on Desktop</h4>
              <p className="mb-0">Uses <code>order-first md:order-last</code></p>
              <span className="badge badge-success">Appears first on mobile</span>
            </div>
          </div>
        </section>

        {/* Classic Layout */}
        <section className="mb-2xl">
          <h2>Classic Layout (Responsive)</h2>
          <p className="mb-lg">Classic layout that adapts - sidebars stack on mobile</p>
          <Layout
            style="classic"
            className="card p-0"
            header={<h3 className="mb-0">Header</h3>}
            leftSidebar={
              <>
                <h4>Left Sidebar</h4>
                <p className="text-sm mb-0">Navigation or filters</p>
              </>
            }
            main={
              <>
                <h3>Main Content</h3>
                <p>The central content area that contains the primary information. This area expands to fill available space.</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '70%' }}></div>
                </div>
              </>
            }
            rightSidebar={
              <>
                <h4>Right Sidebar</h4>
                <p className="text-sm mb-0">Additional info or widgets</p>
              </>
            }
            footer={<p className="text-sm text-secondary mb-0">Footer content goes here</p>}
          />
        </section>

        {/* Responsive Card Grid Layout */}
        <section className="mb-2xl">
          <h2>Responsive Card Grid</h2>
          <p className="mb-lg">Grid of cards: 1 → 2 → 3 → 4 columns</p>
          <Layout style="card-grid">
            {[ 1, 2, 3, 4, 5, 6, 7, 8 ].map((num) => (
              <div key={num} className="card text-center">
                <h4 className="mb-xs">Item {num}</h4>
                <p className="text-sm text-secondary mb-md">Card description</p>
                <button className="btn btn-sm btn-outline btn-block">Select</button>
              </div>
            ))}
          </Layout>
        </section>

        {/* Responsive Hero Layout */}
        <section className="mb-2xl">
          <h2>Responsive Hero Layout</h2>
          <p className="mb-lg">Full-width hero with responsive padding and button layout</p>
          <Layout
            style="hero"
            className="card"
            title="Welcome to Our Platform"
            subtitle="Build amazing things with our CSS framework."
            actions={
              <>
                <button className="btn btn-primary btn-lg">Get Started</button>
                <button className="btn btn-outline btn-lg">Learn More</button>
              </>
            }
          />
        </section>

        {/* Responsive Dashboard Layout */}
        <section className="mb-2xl">
          <h2>Responsive Dashboard Layout</h2>
          <p className="mb-lg">Dashboard with responsive metrics and content areas</p>
          <Layout
            style="dashboard"
            stats={
              <>
                <div className="card">
                  <p className="text-sm text-secondary mb-xs">Total Users</p>
                  <h2 className="mb-0">12,543</h2>
                </div>
                <div className="card">
                  <p className="text-sm text-secondary mb-xs">Revenue</p>
                  <h2 className="mb-0">$89.2K</h2>
                </div>
                <div className="card">
                  <p className="text-sm text-secondary mb-xs">Conversion</p>
                  <h2 className="mb-0">23.5%</h2>
                </div>
                <div className="card">
                  <p className="text-sm text-secondary mb-xs">Active Now</p>
                  <h2 className="mb-0">1,423</h2>
                </div>
              </>
            }
            mainContent={
              <div className="card">
                <h3 className="mb-md">Main Chart Area</h3>
                <div style={{ height: '200px', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="text-secondary">Chart visualization would go here</p>
                </div>
              </div>
            }
            sideContent={
              <div className="card">
                <h3 className="mb-md">Quick Stats</h3>
                <div className="flex flex-col gap-md">
                  <div>
                    <div className="flex justify-between mb-xs">
                      <span className="text-sm">Engagement</span>
                      <span className="text-sm font-semibold">78%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-xs">
                      <span className="text-sm">Completion</span>
                      <span className="text-sm font-semibold">92%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-xs">
                      <span className="text-sm">Satisfaction</span>
                      <span className="text-sm font-semibold">85%</span>
                    </div>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </section>

        {/* Responsive Masonry-style Layout */}
        <section className="mb-2xl">
          <h2>Responsive Masonry-Style Layout</h2>
          <p className="mb-lg">Variable height cards: 1 → 2 → 3 columns</p>
          <Layout style="masonry">
            <div className="flex flex-col gap-lg">
              <div className="card">
                <h4>Card 1</h4>
                <p>Short content card.</p>
              </div>
              <div className="card">
                <h4>Card 4</h4>
                <p>This card has more content to demonstrate the masonry-style layout with different heights.</p>
                <button className="btn btn-sm btn-primary">Action</button>
              </div>
            </div>
            <div className="flex flex-col gap-lg">
              <div className="card">
                <h4>Card 2</h4>
                <p>Medium length content card with some additional text to show variation in heights.</p>
              </div>
              <div className="card">
                <h4>Card 5</h4>
                <p>Another card with different content.</p>
              </div>
            </div>
            <div className="flex flex-col gap-lg sm:col-span-2 lg:col-span-1">
              <div className="card">
                <h4>Card 3</h4>
                <p>Different heights create visual interest.</p>
                <p>Multiple paragraphs can be added.</p>
              </div>
              <div className="card">
                <h4>Card 6</h4>
                <p>Final card in the masonry layout.</p>
              </div>
            </div>
          </Layout>
        </section>

        {/* Responsive Text Alignment */}
        <section className="mb-2xl">
          <h2>Responsive Text Alignment</h2>
          <p className="mb-lg">Text alignment that changes at breakpoints</p>
          <div className="card">
            <p className="text-center md:text-left lg:text-right mb-md">
              This text is <strong>centered on mobile</strong>, <strong>left-aligned on tablet</strong>, and <strong>right-aligned on desktop</strong>.
            </p>
            <p className="text-sm text-secondary mb-0">
            </p>
          </div>
        </section>

        {/* Responsive Gap Demo */}
        <section className="mb-2xl">
          <h2>Responsive Gap/Spacing</h2>
          <p className="mb-lg">Gap that increases with screen size</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-sm md:gap-md lg:gap-lg xl:gap-xl">
            <div className="card text-center p-md">
              <span className="text-2xl">1</span>
            </div>
            <div className="card text-center p-md">
              <span className="text-2xl">2</span>
            </div>
            <div className="card text-center p-md">
              <span className="text-2xl">3</span>
            </div>
            <div className="card text-center p-md">
              <span className="text-2xl">4</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center p-lg md:p-xl">
          <hr className="divider" />
          <p className="text-secondary">
            Check out this footer!
          </p>
        </div>
      </div>
    </>
  );
}

export default LayoutShowcase;