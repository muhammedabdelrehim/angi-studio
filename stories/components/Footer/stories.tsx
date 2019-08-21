import React from 'react'
import { storiesOf } from '@storybook/react'

import { FooterLinks } from '../Footer'
import { Footer, Block } from '../../styles/Footer_styles'
import { H2Header } from '../Header'

const ListOne = [
  {
    item: 'something'
  },
  {
    item: 'something'
  },
  {
    item: 'something'
  },
  {
    item: 'something'
  }
]

const Story = () => {
  return (
    <>
      <H2Header>Useful Links</H2Header>
      <Footer>
        <Block>
          <img src="" alt="" />
          <H2Header>ReactJS Development</H2Header>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application and React will
            efficiently...
          </p>
        </Block>
        <FooterLinks listItems={ListOne} />
        <FooterLinks listItems={ListOne} />
      </Footer>
    </>
  )
}

storiesOf('Components', module).add('Footer', () => <Story />)
