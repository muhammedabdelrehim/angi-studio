import styled from 'styled-components'
import { theme } from './ThemeProvider'
import { mobileUp } from './Breakpoints'

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledFooterList = styled.ul`
  color: ${theme.identityColors.one};
  list-style: none;
  padding: 0;
  font-family: ${theme.fontFamily};
  margin-bottom: ${theme.gutters.extraLarge};
`

export const StyledFooterListItem = styled.li`
  padding: ${theme.gutters.medium}  0;
  border-bottom: 1px solid ${theme.identityColors.five};
  font-size: ${theme.fontSizes.paragraph}

  &:last-child {
    border: none;
  }
`

export const Block = styled.div`
  width: calc(100% / 3);

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: 30px;
  }
`

export const ImageBlockWrapper = styled.div`
  width: calc(100% / 3);
  margin-right: 30px;
  border: 1px solid ${theme.identityColors.five};
  border-radius: ${theme.borderRadius};
  display: none;

  ${mobileUp} {
    display: block;
  }
`

export const ImageFooter = styled.img`
  width: 100%;
  vertical-align: middle;
  border-top-left-radius: ${theme.borderRadius};
  border-top-right-radius: ${theme.borderRadius};
`

export const ImageBlock = styled.div`
  height: 300px;
  overflow: hidden;
`

export const ContentFooter = styled.p`
  padding: ${theme.gutters.medium};
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.paragraph};
`

export const Link = styled.a`
  color: ${theme.identityColors.one};
  text-decoration: none;
`
