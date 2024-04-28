import { Provider } from 'react-redux';
import './App.css';
import PageHeader from './components/page-header';
import store from './common/store';
import ProductList  from './components/product-list';

function App() {
  return (
    <Provider store={store}>
      <div className="App h-screen bg-gray-100">
        <div className='flex flex-col'>
          <div>
            <PageHeader />
          </div>
          <div className='grow '>
            <div className='flex'>
              <ProductList></ProductList>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
