import styled from 'styled-components'
import { theme } from './ThemeProvider'
import { tabletUp } from './Breakpoints'

export const Logo = styled.div`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.logoHeader};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.fontColor.three};
  margin-bottom: 50px;
  ${tabletUp} {
    font-size: ${theme.fontSizes.logoHeader};
  }
`

export const HeaderOne = styled.div`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.headerOne};
  font-weight: ${theme.fontWeights.bold};
  line-height: 76px;
  color: ${theme.fontColor.one};
  ${tabletUp} {
    font-size: ${theme.fontSizes.headerOne};
  }
`

export const MainSubheader = styled.p`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.subHeader};
  color: ${theme.fontColor.one};
  ${tabletUp} {
    font-size: ${theme.fontSizes.subHeader};
  }
`

export const HeaderTwo = styled.h2`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.headerMobile.headerTwo};
  color: ${theme.fontColor.one};
  margin-left: ${theme.gutters.medium};
  ${tabletUp} {
    font-size: ${theme.fontSizes.headerTwo};
  }
`
