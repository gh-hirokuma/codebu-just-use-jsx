import React from 'react';
import Layout from './components/Layout'
import './styles/generated.css';
import Card from './components/Card';

function App() {
  return (
    <Layout>
      <ul className="grid md:grid-cols-3 gap-4 my-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Layout>
  );
}

export default App;
