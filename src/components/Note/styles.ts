import styled from 'styled-components'

type StyleProps = {
  noteColor: string
  noteFavorite: boolean
}

export const NoteContainer = styled.div<StyleProps>`
  width: 360px;
  height: 400px;
  background-color: ${(props) => props.noteColor};
  border-radius: 16px;
  box-shadow: ${(props) =>
    props.noteFavorite ? '2px 2px 4px rgba(0, 0, 0, 0.2)' : '0px'};
`

export const TitleArea = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 14px;
    font-weight: 600;
    padding: 8px;
  }
`

export const MiddleArea = styled.div`
  padding: 8px 16px;
  height: 75%;
`

export const Description = styled.textarea`
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  height: 95%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
  overflow: hidden;
`

export const BottomArea = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`

//#bae2ff
//#b9ffdd
//#ffe8ac
//#ffcab9
//#f99494
//#9dd6ff
//#eca2ff
//#daff8b
//#ffa285
//#ffffff
