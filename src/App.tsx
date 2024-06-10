import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './Main';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded p-6">
        <Main />
      </div>
    </div>
  </Provider>
  );
};

export default App;
