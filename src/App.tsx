import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={(<Home/>)}/>
      </Routes>
    </Layout>
  );
}

export default App;
