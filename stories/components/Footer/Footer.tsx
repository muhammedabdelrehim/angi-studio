import React from 'react'
import {
  StyledFooterList,
  StyledFooterListItem
} from '../../styles/Footer_styles'

type Props = {
  listItems: Item[]
}

type Item = {
  item: string
  subItem: string
}

const FooterLinks = ({ listItems }: Props) => {
  return (
    <StyledFooterList>
      {listItems.map((listItem: Item) => (
        <StyledFooterListItem>{listItem.item}</StyledFooterListItem>
      ))}
    </StyledFooterList>
  )
}

export { FooterLinks }
