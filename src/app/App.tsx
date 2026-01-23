import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LayoutShowcase from './pages/LayoutShowcase';
import ComponentsShowcase from './pages/ComponentsShowcase';

type Page = 'layouts' | 'components' | 'docs';

const App = () => {
  const params = useParams();
  const [ currentPage ] = useState<Page>(params[ '*' ] === 'components' ? 'components' : 'layouts');
  return (
    <>
      <div className="roboto-mono-regular">
        <Navbar currentPage={currentPage as 'layouts' | 'components'} />
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