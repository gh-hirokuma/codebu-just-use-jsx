import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';

const ListItem = tw.li`flex flex-col justify-center items-center bg-indigo-900 h-64`

const ColorableAlertableItem = styled(ListItem)(({ color, hasError }) => [
  color === 'yellow' && tw`bg-yellow-900`,
  hasError ? tw`bg-pink-900` : ``
])

const CardTitle = tw.h2`text-white uppercase text-xl`
const CardDescription = tw.h2`py-4 text-white text-sm`

const Card = ({ title, description, color, hasError }) => (
  <ColorableAlertableItem color={color} hasError={hasError}>
    <CardTitle>{ title }</CardTitle>
    <CardDescription>{ description }</CardDescription>
  </ColorableAlertableItem>
)

export default Card
