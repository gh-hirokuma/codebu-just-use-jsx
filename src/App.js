import React, { useState, useEffect } from 'react';
import Layout from './components/Layout'
import './styles/generated.css';
import Card from './components/Card';
import CardList from './components/CardList';
import AddCard from './components/AddCard';

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    setCards([
        { title: "カード1", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード2", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード3", description: "Lorem ipsum dolor sit amet. ", color: "yellow", hasError: false },
        { title: "カード4", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード5", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: true },
        { title: "カード6", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード7", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード8", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード9", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード10", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード11", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false },
        { title: "カード12", description: "Lorem ipsum dolor sit amet. ", color: "", hasError: false }
    ])
  }, [])

  const addCard = () => {
    const newCards = cards.concat([{
      title: "NEW CARD",
      description: "Lorem ipsum dolor sit amet. ",
      color: "yellow",
      hasError: false
    }])
    setCards(newCards)
  }

  return (
    <Layout>
      <CardList>
        {cards.map(card => (
          <Card
            title={card.title}
            description={card.description}
            color={card.color}
            hasError={card.hasError}
          />
        ))}
      </CardList>
      <AddCard addCard={addCard} />
    </Layout>
  );
}

export default App;
