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
  margin-bottom: 25px;
`

export const StyledFooterListItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #eeeeee;
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
  border: 1px solid #eeeeee;
  border-radius: 6px;
  display: none;

  ${mobileUp} {
    display: block;
  }
`

export const ImageFooter = styled.img`
  width: 100%;
  vertical-align: middle;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`

export const ImageBlock = styled.div`
  height: 300px;
  overflow: hidden;
`

export const ContentFooter = styled.p`
  padding: 15px;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSizes.paragraph};
`

export const Link = styled.a`
  color: ${theme.identityColors.one};
  text-decoration: none;
`
