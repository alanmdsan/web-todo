import styled from 'styled-components'

type StyleProps = {
  $noteColor: string
  $noteFavorite: boolean
}

type ColorButtonProps = {
  roundedColorButtonBgColor: string
}

export const NoteContainer = styled.div<StyleProps>`
  width: 360px;
  height: 400px;
  background-color: ${({ $noteColor }) => $noteColor};
  border-radius: 16px;
  box-shadow: ${({ $noteFavorite }) =>
    $noteFavorite ? '2px 2px 4px rgb(0 0 0 / 0.2)' : '0px'};

  @media (max-width: 768px) {
    justify-self: center;
  }
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

export const EditColorButton = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`

export const StyledPopperDiv = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: '0px 4px 8px rgb(0 0 0 / 0.1)';
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 1;
  margin: 0.25rem 0;
`

export const RoundedColorButton = styled.button<ColorButtonProps>`
  background-color: ${(props) => props.roundedColorButtonBgColor};
  border: none;
  color: #ffffff;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 50%;
`
// possible note's colors
//#bae2ff
//#b9ffdd
//#ffe8ac
//#ffcab9
//#f99494
//#9dd6ff
//#eca2ff
//#daff8b
//#ffa285
//#ededed
//#ffffff
