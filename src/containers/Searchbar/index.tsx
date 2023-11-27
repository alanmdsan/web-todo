import { Icon } from '@iconify/react'

import * as S from './styles'

import imgIcon from '../../assets/icons8-notas-100.png'

const Searchbar = () => (
  <S.ContainerHeader>
    <S.imgIcon src={imgIcon} alt="" />
    <S.titleBrand>MinhasNotas</S.titleBrand>
    <S.inputSearch type="text" placeholder="Buscar nota" />
    <Icon
      icon="ic:baseline-search"
      style={{ color: '#999', margin: '16px 0px 0px -32px', cursor: 'pointer' }}
      width="24"
      height="24"
    />
  </S.ContainerHeader>
)

export default Searchbar
