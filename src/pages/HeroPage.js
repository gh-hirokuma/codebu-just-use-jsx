import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import md5 from 'js-md5';
import Layout from '../components/Layout'
import HeroList from '../components/HeroList';
import HeroProfile from '../components/HeroProfile';

const HeroPage = () => {
  const [hero, setHero] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const main = async () => {
      try {
        const ts = Number(new Date())
        const hash = md5.create();
        hash.update(ts + process.env.REACT_APP_HERO_PRIVATE_KEY + process.env.REACT_APP_HERO_PUBLIC_KEY);

        const { data: { data: { results } } } = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, {
          params: {
            ts,
            apikey: process.env.REACT_APP_HERO_PUBLIC_KEY,
            hash: hash.hex(),
          }
        })

        console.log(results)

        setHero(results[0])
      } catch(e) {
        console.log(e)
      }
    }

    main()
  }, [])

  return (
    <>
      <Layout>
        <HeroProfile
          title={hero.name}
          description={hero.description}
          img={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
        />
      </Layout>
    </>
  )
}

export default HeroPage;
