import styled from 'styled-components'

export const ExternalContainer = styled.div`
  //height: calc(100vh - 72px);
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1112px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 24px 0;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const DivTextType = styled.div`
  @media (max-width: 768px) {
    margin-top: 8px;
    margin-bottom: -32px;
    justify-self: center;
  }
`

export const TextType = styled.span`
  font-size: 14px;
  margin: 0 16px;
  color: #333;
`
