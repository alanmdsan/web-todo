import { Icon } from '@iconify/react'
import * as S from './styles'

const AddNote = () => {
  return (
    <>
      <div></div>
      <S.AddNoteContainer>
        <S.TitleArea>
          <h2 contentEditable>Título</h2>
          <Icon
            icon="material-symbols:star-outline"
            style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
            width="24"
            height="24"
            onClick={() => alert('favorite')}
          />
        </S.TitleArea>

        <S.MiddleArea>
          <S.Description placeholder="Criar nota..." />
        </S.MiddleArea>

        <S.BottomArea>
          <div></div>
          <div>
            <Icon
              icon="mingcute:add-fill"
              style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
              width="24"
              height="24"
              onClick={() => alert('add')}
            />
          </div>
        </S.BottomArea>
      </S.AddNoteContainer>
      <div></div>
    </>
  )
}

export default AddNote
