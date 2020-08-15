import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom'

const ListItem = tw.li`flex flex-col justify-center items-center bg-indigo-900 h-64 relative`

const CardItem = styled(ListItem)(({ color, hasError }) => [
  color === 'yellow' && tw`bg-yellow-900`,
  hasError ? tw`bg-pink-900` : ``
])

const HeroTitle = tw.h2`text-white uppercase text-xl`
const HeroDescription = tw.h2`py-4 text-white text-sm`
const HeroContents = tw.div`absolute bg-gray-900 h-64 w-full bg-opacity-75 p-4`
const HeroThumbnail = tw.img`h-64 object-cover w-full`

const Hero = ({ id, title, description, img }) => (
  <CardItem>
    <HeroContents>
      <HeroTitle>
        <Link to={`/heroes/${id}`}>{ title }</Link>
      </HeroTitle>
      <HeroDescription>{ description }</HeroDescription>
    </HeroContents>
    <HeroThumbnail src={img} />
  </CardItem>
)

export default Hero
