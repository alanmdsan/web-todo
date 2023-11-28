import { nanoid } from 'nanoid'
import * as S from './styles'
import AddNote from '../../components/AddNote'
import Note from '../../components/Note'
import NoteModel from '../../models/Note'

type Props = {
  search: string
}

const Notes = ({ search }: Props) => {
  type NotesState = {
    itens: NoteModel[]
  }

  const initialState: NotesState = {
    itens: [
      {
        id: nanoid(),
        title: 'estudar JS',
        description:
          'estudar próximos capítulos de js Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        favorite: true,
        color: '#ffffff'
      },
      {
        id: nanoid(),
        title: 'estudar TS',
        description: 'estudar próximos capítulos de ts',
        favorite: false,
        color: '#bae2ff'
      },
      {
        id: nanoid(),
        title: 'estudar React pt1',
        description: 'estudar próximos capítulos de react 1',
        favorite: true,
        color: '#daff8b'
      },
      {
        id: nanoid(),
        title: 'estudar React pt2',
        description: 'estudar próximos capítulos de react 2',
        favorite: true,
        color: '#f99494'
      },
      {
        id: nanoid(),
        title: 'estudar React pt3',
        description: 'estudar próximos capítulos de react 3',
        favorite: true,
        color: '#ffe8ac'
      }
    ]
  }

  function numberOfFavorites() {
    return initialState.itens
      .filter((item) => item.favorite)
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .length
  }

  function numberOfNotFavorites() {
    return initialState.itens
      .filter((item) => !item.favorite)
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .length
  }

  return (
    <S.ExternalContainer>
      <S.Container>
        <AddNote />
        {numberOfFavorites() > 0
          ? [
              <div key={nanoid()}>
                <S.TextType>Favoritas</S.TextType>
              </div>,
              <div key={nanoid()}></div>,
              <div key={nanoid()}></div>,
              initialState.itens
                .filter((item) => item.favorite)
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((n) => (
                  <Note
                    key={n.id}
                    id={n.id}
                    title={n.title}
                    description={n.description}
                    favorite={n.favorite}
                    color={n.color}
                  />
                )),
              numberOfFavorites() % 3 == 1 ? (
                <>
                  <div key={nanoid()}></div>
                  <div key={nanoid()}></div>
                </>
              ) : (
                ''
              ),
              numberOfFavorites() % 3 == 2 ? <div key={nanoid()}></div> : '',
              numberOfNotFavorites() > 0 ? (
                <div key={nanoid()}>
                  <S.TextType>Outras</S.TextType>
                </div>
              ) : (
                ''
              ),
              <div key={nanoid()}></div>,
              <div key={nanoid()}></div>,
              initialState.itens
                .filter((item) => !item.favorite)
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((n) => (
                  <Note
                    key={n.id}
                    id={n.id}
                    title={n.title}
                    description={n.description}
                    favorite={n.favorite}
                    color={n.color}
                  />
                ))
            ]
          : initialState.itens
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((n) => (
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
