import { useState } from 'react'
import { Icon } from '@iconify/react'
import axios from 'axios'
import * as S from './styles'

type Props = {
  getAllNotes: () => void
}

const AddNote = ({ getAllNotes }: Props) => {
  const [newTitle, setNewTitle] = useState('Título')
  const [newDescription, setNewDescription] = useState('')
  const [newFavorite, setNewFavorite] = useState(false)

  async function addNote(
    title: string,
    description: string,
    favorite: boolean
  ) {
    const data = {
      title,
      description,
      favorite,
      color: '#ffffff'
    }
    try {
      await axios.post('http://localhost:3333/notes/', data)
      getAllNotes()
    } catch (error) {
      console.log(error)
    }
  }

  function addNewNote() {
    if (newTitle == '' || newDescription == '') {
      alert('Preencha a nota antes de adicionar')
    } else {
      addNote(newTitle, newDescription, newFavorite)
      alert('Nova nota adicionada!')

      // renew states
      setNewTitle('Título')
      setNewDescription('')
      setNewFavorite(false)
    }
  }

  return (
    <>
      <div></div>
      <S.AddNoteContainer>
        <S.TitleArea>
          <h2
            contentEditable
            suppressContentEditableWarning={true}
            onBlur={(e) =>
              setNewTitle(
                e.currentTarget.innerText !== null
                  ? e.currentTarget.innerText
                  : ''
              )
            }
          >
            {newTitle}
          </h2>
          <Icon
            icon={
              newFavorite
                ? 'material-symbols:star'
                : 'material-symbols:star-outline'
            }
            style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
            width="24"
            height="24"
            onClick={() => setNewFavorite(!newFavorite)}
          />
        </S.TitleArea>

        <S.MiddleArea>
          <S.Description
            placeholder="Criar nota..."
            onChange={(e) =>
              setNewDescription(e.target.value !== null ? e.target.value : '')
            }
            value={newDescription}
          />
        </S.MiddleArea>

        <S.BottomArea>
          <div></div>
          <div>
            <Icon
              icon="mingcute:add-fill"
              style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
              width="24"
              height="24"
              onClick={() => addNewNote()}
            />
          </div>
        </S.BottomArea>
      </S.AddNoteContainer>
      <div></div>
    </>
  )
}

export default AddNote
