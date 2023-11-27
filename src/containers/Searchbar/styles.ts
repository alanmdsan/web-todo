import styled from 'styled-components'

export const ContainerHeader = styled.div`
  display: flex;
  height: 72px;
  padding: 8px 16px 16px;
  background-color: #f4d35e;

  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const imgIcon = styled.img`
  width: 55x;
  height: 55px;
`

export const titleBrand = styled.h1`
  font-size: 18px;
  font-weight: 500;
  margin: 16px;
`

export const inputSearch = styled.input`
  width: 350px;
  margin-top: 8px;
  margin-left: 16px;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 15px;
`
