import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <Layout className="Content">
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
