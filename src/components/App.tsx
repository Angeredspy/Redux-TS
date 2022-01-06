import { Provider } from 'react-redux'; 
import { store } from '../state';
import RepositoriesList from './RepositoriesList'; 

const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h1>Search For a Package!</h1>
          <RepositoriesList />
        </div>
      </div>
    </Provider>
  );
}; 

export default App; 
