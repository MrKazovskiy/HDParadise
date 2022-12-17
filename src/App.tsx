import React from 'react';
import Layout from './layouts/Layout';
import { Services } from './services/services';
import './styles/_main.scss';

function App() {  
    return <>
      <Layout children={<Services />} />
    </>
}

export default App;
