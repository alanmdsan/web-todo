import { Icon } from '@iconify/react'

import * as S from './styles'

import imgIcon from '../../assets/icons8-notas-100.png'

type Props = {
  search: string
  setSearch: (s: string) => void
}

const Searchbar = ({ search, setSearch }: Props) => (
  <S.ContainerHeader>
    <S.imgIcon src={imgIcon} alt="" />
    <S.titleBrand>MinhasNotas</S.titleBrand>
    <S.inputSearch
      type="text"
      placeholder="Buscar nota"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <Icon
      icon="ic:baseline-search"
      style={{ color: '#999', margin: '16px 0px 0px -32px' }}
      width="24"
      height="24"
    />
  </S.ContainerHeader>
)

export default Searchbar
