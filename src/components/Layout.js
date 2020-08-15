import React from 'react'
import { jsx } from '@emotion/core'
import tw from 'twin.macro';
import Header from './Header'
import Footer from './Footer'

const MainLayout = tw.section`h-screen`
const Main = tw.main`container mx-auto`

const Layout = ({ children }) => (
  <MainLayout>
    <Header />
    <Main>
      { children }
    </Main>
    <Footer />
  </MainLayout>
)

export default Layout
