import styled from 'styled-components'
import { theme } from './ThemeProvider'

export const Section = styled.div`
  margin: ${theme.gutters.large} 0;
  margin-bottom: 80px;
`

export const Row = styled.div`
  font-family: ${theme.fontFamily};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.gutters.small};
  border: 1px solid ${theme.identityColors.four};
  border-bottom: none;

  &:first-child {
    border-top-left-radius: ${theme.borderRadius};
    border-top-right-radius: ${theme.borderRadius};
  }

  &:last-child {
    border-bottom-left-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
    border-bottom: 1px solid ${theme.identityColors.four};
  }
`

export const CrossAndTextWrap = styled.div`
  display: flex;
  align-items: center;
`

export const ToDoItemText = styled.p``

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const ToDoForm = styled.form`
  display: flex;
  margin-bottom: 50px;
`

export const Button = styled.button`
  border: none;
  font-family: ${theme.fontFamily};
  background: ${theme.identityColors.one};
  border-radius: ${theme.borderRadius};
  padding: ${theme.gutters.medium} ${theme.gutters.extraLarge};
  color: ${theme.fontColor.two};
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
  opacity: 0.75;
  min-width: 150px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

export const TextInput = styled.input`
  border: none;
  border: 1px solid ${theme.identityColors.four};
  width: 100%;
  margin-right: ${theme.gutters.medium};
  border-radius: ${theme.borderRadius};
  padding: 0 ${theme.gutters.medium};
  height: 46px;
  line-height: 20px;
`
