import React from 'react';
import { jsx } from '@emotion/core'
import tw from 'twin.macro';

const FooterLayout = tw.footer`bg-gray-900 w-full py-4 px-8 h-64`
const FooterTitle = tw.h2`text-white uppercase text-lg`

const Footer = () => (
  <FooterLayout>
    <FooterTitle>Footer</FooterTitle>
  </FooterLayout>
)

export default Footer
