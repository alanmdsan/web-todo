import { useState } from 'react'
import { Icon } from '@iconify/react'
import axios from 'axios'
import * as S from './styles'

type Props = {
  getAllNotes: () => void
  _id: string
  title: string
  description: string
  favorite: boolean
  color: string
}

const Note = ({
  getAllNotes,
  _id,
  title,
  description,
  favorite,
  color
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  function updateNoteTitle(newTitle: string) {
    return updateNote(newTitle, description, favorite, color)
  }

  function updateNoteDescription(newDescription: string) {
    return updateNote(title, newDescription, favorite, color)
  }

  function updateNoteFavorite(newFavorite: boolean) {
    return updateNote(title, description, newFavorite, color)
  }

  function updateNoteColor(newColor: string) {
    return updateNote(title, description, favorite, newColor)
  }

  async function updateNote(
    title: string,
    description: string,
    favorite: boolean,
    color: string
  ) {
    const data = {
      title,
      description,
      favorite,
      color
    }
    try {
      await axios.put(`http://localhost:3333/notes/${_id}`, data)
      getAllNotes()
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteNote() {
    try {
      await axios.delete(`http://localhost:3333/notes/${_id}`)
      getAllNotes()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.NoteContainer noteColor={color} noteFavorite={favorite}>
      <S.TitleArea>
        <h2
          contentEditable={isEditing}
          onBlur={(e) =>
            e.currentTarget.innerText !== null
              ? updateNoteTitle(e.currentTarget.innerText)
              : ''
          }
        >
          {title}
        </h2>
        <Icon
          icon={
            favorite ? 'material-symbols:star' : 'material-symbols:star-outline'
          }
          style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
          width="24"
          height="24"
          onClick={() => updateNoteFavorite(!favorite)}
        />
      </S.TitleArea>

      <S.MiddleArea>
        <S.Description
          disabled={!isEditing}
          defaultValue={description}
          title={description}
          onBlur={(e) =>
            updateNoteDescription(e.target.value !== null ? e.target.value : '')
          }
        />
      </S.MiddleArea>

      <S.BottomArea>
        <div>
          <Icon
            icon={isEditing ? 'ic:edit' : 'ic:outline-edit'}
            style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
            width="24"
            height="24"
            onClick={() => setIsEditing(!isEditing)}
          />
          <Icon
            icon="bxs:color-fill"
            style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
            width="24"
            height="24"
            onClick={() => alert('color edit')}
          />
        </div>
        <div>
          <Icon
            icon="mingcute:close-fill"
            style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
            width="24"
            height="24"
            onClick={() => deleteNote()}
          />
        </div>
      </S.BottomArea>
    </S.NoteContainer>
  )
}

export default Note
