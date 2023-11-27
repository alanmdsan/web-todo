import * as S from './styles'
import Note from '../../components/Note'
import NoteModel from '../../models/Note'

const Notes = () => {
  type NotesState = {
    itens: NoteModel[]
  }

  const initialState: NotesState = {
    itens: [
      {
        id: 'hash1',
        title: 'estudar JS',
        description:
          'estudar próximos capítulos de js Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        favorite: false,
        color: '#fff'
      },
      {
        id: 'hash2',
        title: 'estudar TS',
        description: 'estudar próximos capítulos de ts',
        favorite: true,
        color: '#bae2ff'
      },
      {
        id: 'hash3',
        title: 'estudar React pt1',
        description: 'estudar próximos capítulos de react 1',
        favorite: false,
        color: '#daff8b'
      },
      {
        id: 'hash4',
        title: 'estudar React pt2',
        description: 'estudar próximos capítulos de react 2',
        favorite: true,
        color: '#cdcdcd'
      }
    ]
  }

  return (
    <S.ExternalContainer>
      <S.Container>
        {initialState.itens.map((n) => (
          <Note
            key={n.id}
            id={n.id}
            title={n.title}
            description={n.description}
            favorite={n.favorite}
            color={n.color}
          />
        ))}
      </S.Container>
    </S.ExternalContainer>
  )
}

export default Notes
