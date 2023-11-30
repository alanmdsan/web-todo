import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import axios from 'axios'
import * as S from './styles'
import AddNote from '../../components/AddNote'
import Note from '../../components/Note'
import NoteModel from '../../models/Note'

type Props = {
  search: string
}

const Notes = ({ search }: Props) => {
  const myNotesInitialState: NoteModel[] = []
  const [myNotes, setMyNotes] = useState(myNotesInitialState)

  useEffect(() => {
    getAllNotes()
  }, [])

  async function getAllNotes() {
    try {
      const res = await axios.get('http://localhost:3333/notes')
      setMyNotes(res['data'])
    } catch (error) {
      console.log(error)
    }
  }

  function numberOfFavorites() {
    return myNotes
      .filter((item) => item.favorite)
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .length
  }

  function numberOfNotFavorites() {
    return myNotes
      .filter((item) => !item.favorite)
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .length
  }

  return (
    <S.ExternalContainer>
      <S.Container>
        <AddNote getAllNotes={getAllNotes} />
        {numberOfFavorites() > 0
          ? [
              <div key={nanoid()}>
                <S.TextType>Favoritas</S.TextType>
              </div>,
              <div key={nanoid()}></div>,
              <div key={nanoid()}></div>,
              myNotes
                .filter((item) => item.favorite)
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((n) => (
                  <Note
                    getAllNotes={getAllNotes}
                    key={nanoid()}
                    _id={n._id}
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
              myNotes
                .filter((item) => !item.favorite)
                .filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((n) => (
                  <Note
                    getAllNotes={getAllNotes}
                    key={nanoid()}
                    _id={n._id}
                    title={n.title}
                    description={n.description}
                    favorite={n.favorite}
                    color={n.color}
                  />
                ))
            ]
          : myNotes
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((n) => (
                <Note
                  getAllNotes={getAllNotes}
                  key={nanoid()}
                  _id={n._id}
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
