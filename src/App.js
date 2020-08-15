import React from 'react';
import Layout from './components/Layout'
import './styles/generated.css';
import Card, { YellowCard, AlertableCard } from './components/Card';
import CardList from './components/CardList';

function App() {
  return (
    <Layout>
      <CardList>
        <Card />
        <Card />
        <YellowCard />
        <Card />
        <AlertableCard />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardList>
    </Layout>
  );
}

export default App;
