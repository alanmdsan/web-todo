import { Icon } from '@iconify/react'
import * as S from './styles'
import NoteModel from '../../models/Note'

type Props = NoteModel

const Note = ({ id, title, description, favorite, color }: Props) => {
  return (
    <S.NoteContainer noteColor={color} noteFavorite={favorite}>
      <S.TitleArea>
        <h2>{title}</h2>
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
            icon="ic:outline-edit"
            style={{ color: '#666', cursor: 'pointer', margin: '2px' }}
            width="24"
            height="24"
            onClick={() => alert('edit')}
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
            onClick={() => alert('delete')}
          />
        </div>
      </S.BottomArea>
    </S.NoteContainer>
  )
}

export default Note
