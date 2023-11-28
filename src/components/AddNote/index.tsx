import { useState } from 'react'
import { Icon } from '@iconify/react'
import { nanoid } from 'nanoid'
import * as S from './styles'
import NoteModel from '../../models/Note'

type Props = {
  myNotes: NoteModel[]
  setMyNotes: (arr: NoteModel[]) => void
}

const AddNote = ({ myNotes, setMyNotes }: Props) => {
  const [newTitle, setNewTitle] = useState('Título')
  const [newDescription, setNewDescription] = useState('')
  const [newFavorite, setNewFavorite] = useState(false)

  function addNewNote() {
    if (newTitle == '' || newDescription == '') {
      alert('Preencha a nota antes de adicionar')
    } else {
      const updateNotes = [
        ...myNotes,
        {
          id: nanoid(),
          title: newTitle,
          description: newDescription,
          favorite: newFavorite,
          color: '#ffffff'
        }
      ]
      setMyNotes(updateNotes)
      alert('Nova nota adicionada!')
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
