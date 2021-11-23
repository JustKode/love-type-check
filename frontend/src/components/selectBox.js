import styled from "styled-components"
import { useState } from "react"

const MainContainer = styled.div`
  margin: 8px;
  text-align: center;
`

const QuestionContainer = styled.div`
  margin: 16px 0;
  font-weight: bold;
  font-size: 16px;
`

const InputContainer = styled.div`
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  vertical-align: middle;
`

const Input = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0 4px;

  &.zero {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid #bbbbbb !important;  
  }

  &.zero:hover, &.zero.selected {
    background-color: #bbbbbb !important;
  }

  &.one {
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }

  &.two {
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  &.green {
    border: 1px solid green;
  }

  &.green:hover, &.green.selected {
    background-color: green;
  }

  &.red {
    border: 1px solid red;
  }

  &.red:hover, &.red.selected {
    background-color: red;
  }
`
export default function SelectBox({id, question, setState}) {
  const [selected, setSelected] = useState(0)
  const number_to_string = (num) => {
    num = Math.abs(num - 3)
    if (num === 0)
      return 'zero'
    else if (num === 1)
      return 'one'
    else
      return 'two'
  }
  const inputs = [5, 4, 3, 2, 1].map(x => (
      <Input
        key={`${id}-${x}`}
        className={`${number_to_string(x)} ${x >= 3 ? 'green' : 'red'} ${selected === x && "selected"}`}
        onClick={e => {setState(id, x); setSelected(x)}}
      />
    )
  )

  return (
    <MainContainer>
      <QuestionContainer>
        {question}
      </QuestionContainer>
      <InputContainer>
        동의 {inputs} 비동의
      </InputContainer>
    </MainContainer>
  )
}