import React from 'react'
import { storiesOf } from '@storybook/react'

import { H1Header, H2Header, LogoHeader, Subheader } from '../Header'

const Story = () => {
  return (
    <>
      <LogoHeader>angi studio</LogoHeader>

      <H1Header>Job application</H1Header>
      <Subheader>
        This to-do list contains the tasks I need to <br />
        complete so I can apply to a job well prepared.
      </Subheader>

      <H2Header>Header Two</H2Header>
    </>
  )
}

storiesOf('Components', module).add('Header', () => <Story />)
