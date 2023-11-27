class Note {
  id: string
  title: string
  description: string
  favorite: boolean
  color: string

  constructor(
    id: string,
    title: string,
    description: string,
    favorite: boolean,
    color: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.favorite = favorite
    this.color = color
  }
}

export default Note
