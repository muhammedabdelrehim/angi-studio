import React from 'react'
import {
  Logo,
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  MainSubheader
} from '../../styles/Header_styles'

type Props = {
  children: React.ReactNode
}

const H1Header = ({ children }: Props) => {
  return <HeaderOne>{children}</HeaderOne>
}

const H2Header = ({ children }: Props) => {
  return <HeaderTwo>{children}</HeaderTwo>
}

const H3Header = ({ children }: Props) => {
  return <HeaderThree>{children}</HeaderThree>
}
const H4Header = ({ children }: Props) => {
  return <HeaderFour>{children}</HeaderFour>
}

const LogoHeader = ({ children }: Props) => {
  return <Logo>{children}</Logo>
}

const Subheader = ({ children }: Props) => {
  return <MainSubheader>{children}</MainSubheader>
}

export { H1Header, H2Header, H3Header, H4Header, LogoHeader, Subheader }
