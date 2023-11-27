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
`