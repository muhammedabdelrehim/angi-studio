import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from 'evergreen-ui'
import { theme } from '../../styles/ThemeProvider'
import Image from '../../assets/images/image.png'

import { Agencies, Development, Conferenties } from '../../data/footer'

import {
  H1Header,
  H2Header,
  H3Header,
  H4Header,
  LogoHeader,
  Subheader
} from '../Header'
import {
  Footer,
  Block,
  ImageBlockWrapper,
  ImageFooter,
  ImageBlock,
  ContentFooter,
  Link
} from '../../styles/Footer_styles'

import { ToDo } from '../ToDo'
import { FooterLinks } from '../Footer'

const toDoItems = require('../../data/toDoItems.json')

const Story = () => {
  return (
    <>
      <LogoHeader>angi studio</LogoHeader>

      <H1Header>Job application</H1Header>
      <Subheader>
        This to-do list contains the tasks I need to <br />
        complete so I can apply to a job well prepared.
      </Subheader>

      <H2Header>New to-do</H2Header>
      <ToDo items={toDoItems.data} />

      <H2Header>Useful Links</H2Header>
      <Footer>
        <ImageBlockWrapper>
          <ImageBlock>
            <ImageFooter src={Image} alt="Footer Image" />
          </ImageBlock>
          <ContentFooter>
            <H3Header>ReactJS Development</H3Header>
            <p>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application and React will
              efficiently...
            </p>

            <Link href="#">
              Read more{' '}
              <Icon icon="arrow-right" color={theme.identityColors.three} />
            </Link>
          </ContentFooter>
        </ImageBlockWrapper>
        <Block>
          <H4Header>Agencies</H4Header>
          <FooterLinks listItems={Agencies} />

          <H4Header>Development</H4Header>
          <FooterLinks listItems={Development} />
        </Block>
        <Block>
          <H4Header>Conferenties</H4Header>
          <FooterLinks listItems={Conferenties} />
        </Block>
      </Footer>
    </>
  )
}

storiesOf('ANGI STUDIO', module).add('angi studio', () => <Story />)
