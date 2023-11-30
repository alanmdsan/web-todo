class Note {
  _id: string
  title: string
  description: string
  favorite: boolean
  color: string

  constructor(
    _id: string,
    title: string,
    description: string,
    favorite: boolean,
    color: string
  ) {
    this._id = _id
    this.title = title
    this.description = description
    this.favorite = favorite
    this.color = color
  }
}

export default Note
