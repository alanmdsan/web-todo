import { useState } from 'react'
import Searchbar from './containers/Searchbar'
import Notes from './containers/Notes'
import EstiloGlobal from './styles'

function App() {
  const [search, setSearch] = useState('')

  return (
    <>
      <EstiloGlobal />
      <Searchbar search={search} setSearch={setSearch} />
      <Notes search={search} />
    </>
  )
}

export default App
