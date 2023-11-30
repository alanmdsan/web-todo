import * as React from 'react'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { nanoid } from 'nanoid'
import { Popper } from '@mui/base/Popper'
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isPopperOpen = Boolean(anchorEl)
  const popperId = isPopperOpen ? 'simple-popper' : undefined

  const handleEditColorClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    if (event.currentTarget.hasAttribute('roundedColorButtonBgColor')) {
      const newColor =
        event.currentTarget.getAttribute('roundedColorButtonBgColor') ||
        '#ffffff'
      updateNoteColor(newColor)
    }
  }

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
    <S.NoteContainer $noteColor={color} $noteFavorite={favorite}>
      <S.TitleArea>
        <h2
          contentEditable={isEditing}
          suppressContentEditableWarning={true}
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
          id={nanoid()}
          name={nanoid()}
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
          <S.EditColorButton
            aria-describedby={popperId}
            type="button"
            onClick={handleEditColorClick}
          >
            <Icon
              icon="bxs:color-fill"
              style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
              width="24"
              height="24"
            />
          </S.EditColorButton>
          <Popper
            id={popperId}
            open={isPopperOpen}
            anchorEl={anchorEl}
            placement="bottom-start"
          >
            <S.StyledPopperDiv>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#bae2ff'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#b9ffdd'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#ffe8ac'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#ffcab9'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#f99494'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#9dd6ff'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#eca2ff'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#daff8b'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#ffa285'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
              <S.RoundedColorButton
                roundedColorButtonBgColor={'#ededed'}
                onClick={handleEditColorClick}
              ></S.RoundedColorButton>
            </S.StyledPopperDiv>
          </Popper>
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
