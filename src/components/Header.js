import React from 'react'
import { jsx } from '@emotion/core'
import tw from 'twin.macro';

const HeaderLayout = tw.header`bg-gray-900`
const HeaderContainer = tw.div`container mx-auto py-4 px-4 md:px-0`
const HeaderTitle = tw.h2`text-lg text-white uppercase`

const Header = () => (
  <HeaderLayout>
    <HeaderContainer>
      <HeaderTitle>header</HeaderTitle>
    </HeaderContainer>
  </HeaderLayout>
)

export default Header
