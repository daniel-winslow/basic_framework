import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LayoutShowcase from './pages/LayoutShowcase';
import ComponentsShowcase from './pages/ComponentsShowcase';

type Page = 'layouts' | 'components' | 'docs';

const App = () => {
  const params = useParams();
  const [ currentPage ] = useState<Page>(params[ '*' ] === 'components' ? 'components' : 'layouts');
  return (
    <>
      <div className="roboto-mono-regular">
        {/* Main Content */}
        {currentPage === 'layouts' ? (
          <LayoutShowcase />
        ) : (
          <div className="container my-xl">
            <h1 className="mb-lg">Components Showcase</h1>

            <ComponentsShowcase />

          </div>
        )}
      </div>
    </>
  );
}

export default App;