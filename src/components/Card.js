import React from 'react';
import { jsx } from '@emotion/core'
import tw, { styled } from 'twin.macro';

const ListItem = tw.li`flex justify-center items-center bg-indigo-900 h-64`
const YellowListItem = tw(ListItem)`bg-yellow-900`
const AlertableListItem = styled(ListItem)(({ hasError }) => [
  hasError ? tw`bg-pink-900` : ``
])
const CardTitle = tw.h2`text-white uppercase text-xl`

const Card = () => (
  <ListItem>
    <CardTitle>card</CardTitle>
  </ListItem>
)

export const YellowCard = () => (
  <YellowListItem>
    <CardTitle>card</CardTitle>
  </YellowListItem>
)

export const AlertableCard = () => (
  <AlertableListItem hasError>
    <CardTitle>card</CardTitle>
  </AlertableListItem>
)

export default Card
