import React from 'react'
import { storiesOf } from '@storybook/react'
import { Icon } from 'evergreen-ui'

import Image from '../../assets/images/image.png'

import { FooterLinks } from '../Footer'

import { Agencies, Development, Conferenties } from '../../data/footer'

import {
  Footer,
  Block,
  ImageBlockWrapper,
  ImageFooter,
  ImageBlock,
  ContentFooter,
  Link
} from '../../styles/Footer_styles'
import { H2Header, H3Header, H4Header } from '../Header'
import { theme } from '../../styles/ThemeProvider'

const Story = () => {
  return (
    <>
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

storiesOf('Components', module).add('Footer', () => <Story />)
