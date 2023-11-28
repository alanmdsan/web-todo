import styled from 'styled-components'
import { TextareaAutosize } from '@mui/base/TextareaAutosize'

export const AddNoteContainer = styled.div`
  width: 360px;
  height: auto;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 16px 0;
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
`

export const Description = styled(TextareaAutosize)`
  font-size: 14px;
  line-height: 24px;
  display: block;
  width: 100%;
  height: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BottomArea = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
`
