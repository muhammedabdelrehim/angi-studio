import React, { useState } from 'react'
import styled from 'styled-components'

import { theme } from '../../styles/ThemeProvider'

// Evergreen added for simple styling.
import { Icon, toaster, Tooltip } from 'evergreen-ui'
import { H2Header } from '../Header'

// This is a possible addition to the to-do list. This does not work, but for the sake of cool idea's, this is added...
import SpeechRecognition from 'react-speech-recognition'

const CheckIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`
const DeleteIcon = styled(Icon)`
  opacity: 0.75;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`

import {
  Section,
  Row,
  ToDoItemText,
  ButtonWrap,
  Button,
  TextInput,
  ToDoForm,
  CrossAndTextWrap
} from '../../styles/ToDo_styles'

// The To do items which are mapped, are added to a type, which are then introduced into type Props under the prop items? : ToDoItems[] to collect the props.
type ToDoItem = {
  text: string
  completed: boolean
}

// All Props.
type Props = {
  text?: string
  newValue?: string
  submitButton?: string
  deleteButton?: string
  items?: ToDoItem[] // the combined collection of ToDoItems.
  completed: boolean
  addTask?: string
  newTaskAdded?: string
  taskDeleted?: string
  tooltipDelete?: string
  titleNewTodo?: string
  currentToDos?: string
  browserSupportsSpeechRecognition?: boolean // SpeachRecognition prop
}

const ToDo = ({
  submitButton,
  deleteButton,
  newValue,
  addTask,
  newTaskAdded,
  taskDeleted,
  tooltipDelete,
  items,
  titleNewTodo,
  currentToDos,
  browserSupportsSpeechRecognition // for more documentation on how this works: https://www.npmjs.com/package/react-speech-recognition
}: Props) => {
  const [value, setValue] = useState(newValue)
  const [toDos, setToDos] = useState(items)

  const handleSubmit = e => {
    e.preventDefault()
    addToDo(value)
    setValue('')
  }

  const addToDo = (text: string) => {
    const newToDos: ToDoItem[] = [...toDos, { text, completed: false }]
    setToDos(newToDos)
    toaster.success(newTaskAdded, {
      duration: 2
    })
  }

  const completedToDo = (index: number) => {
    // This whole assignment was going pretty well... until I got to this part. I just have lost about 4 hours of my life at this little basic function. My code was as follow:
    // toDos[index].completed = !toDos[index].completed
    // setToDos(toDos)

    // What I had overlooked was the fact that toDos needed to be a copy of the version before, hence why I changed the above code to what you see now, which solved the problem like a charm.
    const newToDos = [...toDos]
    newToDos[index].completed = !newToDos[index].completed
    setToDos(newToDos)
  }

  const removeToDo = (index: number) => {
    const newToDos = [...toDos]
    newToDos.splice(index, 1)
    setToDos(newToDos)
    toaster.danger(taskDeleted, {
      duration: 2
    })
  }

  return (
    <>
      <H2Header>{titleNewTodo}</H2Header>
      <ToDoForm onSubmit={handleSubmit}>
        <TextInput
          placeholder={addTask}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <Button type="submit">{submitButton}</Button>
      </ToDoForm>

      <H2Header>{currentToDos}</H2Header>
      <Section>
        {toDos.map((toDo: Props, index: number) => (
          <Row key={index}>
            <CrossAndTextWrap>
              <Tooltip content={tooltipDelete}>
                <DeleteIcon
                  color={theme.identityColors.seven}
                  size={theme.iconSize}
                  marginRight={theme.gutters.small}
                  onClick={() => removeToDo(index)}
                  icon="cross"
                />
              </Tooltip>
              <ToDoItemText
                style={{ textDecoration: toDo.completed ? 'line-through' : '' }}
              >
                {toDo.text}
              </ToDoItemText>
            </CrossAndTextWrap>

            <ButtonWrap>
              <CheckIcon
                color={
                  toDo.completed
                    ? theme.identityColors.six
                    : theme.identityColors.four
                }
                size={theme.iconSize}
                onClick={() => completedToDo(index)}
                icon={toDo.completed ? 'tick-circle' : 'circle'}
              />
            </ButtonWrap>
          </Row>
        ))}
      </Section>
    </>
  )
}

// These are the default Props as a fallback if no props are added to the Story.
ToDo.defaultProps = {
  submitButton: 'Add to-do',
  addTask: 'Your task...',
  newTaskAdded: 'New task added!',
  taskDeleted: 'A task was deleted!',
  tooltipDelete: 'Careful now...',
  titleNewTodo: 'New to-do',
  currentToDos: "Current to-do's",
  completed: false
}

export { ToDo }
