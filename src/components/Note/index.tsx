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
  const [newTitle, setNewTitle] = useState(title)

  async function deleteNote(_id: string) {
    try {
      await axios.delete(`http://localhost:3333/notes/${_id}`)
      getAllNotes()
    } catch (error) {
      console.log(error)
    }
  }

  const updateState = () => {
    // const newState = myNotes.map((obj) => {
    //   if (obj.id === id) {
    //     return { ...obj, title: newTitle }
    //   }
    //   return obj
    // })
    // setMyNotes(newState)
  }

  const editingTitle = (text: string) => {
    setNewTitle(text)
    updateState()
  }

  return (
    <S.NoteContainer noteColor={color} noteFavorite={favorite}>
      <S.TitleArea>
        <h2
          contentEditable={isEditing}
          onBlur={(e) =>
            e.currentTarget.innerText !== null
              ? editingTitle(e.currentTarget.innerText)
              : ''
          }
        >
          {newTitle}
        </h2>
        <Icon
          icon={
            favorite ? 'material-symbols:star' : 'material-symbols:star-outline'
          }
          style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
          width="24"
          height="24"
          onClick={() => alert('favorite')}
        />
      </S.TitleArea>

      <S.MiddleArea>
        <S.Description
          disabled={true}
          value={description}
          title={description}
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
            onClick={() => deleteNote(_id)}
          />
        </div>
      </S.BottomArea>
    </S.NoteContainer>
  )
}

export default Note
