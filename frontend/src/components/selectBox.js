import styled from "styled-components"
import { useState } from "react"

const MainContainer = styled.div`
  margin: 40px 8px;
  text-align: center;
`

const QuestionContainer = styled.div`
  margin: 16px 0;
  font-weight: bold;
  font-size: 20px;
`

const InputContainer = styled.div`
  font-size: 12px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
`

const MiddleWrapper = styled.span`
  vertical-align: top;
`

const Input = styled.div`
  display: inline-block;
  box-sizing: border-box;
  margin: 0 8px;
  transition: 0.3s;

  &.zero {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 2px solid #bbbbbb !important;  
  }

  &.zero:hover, &.zero.selected {
    background-color: #bbbbbb !important;
  }

  &.one {
    width: 36px;
    height: 36px;
    border-radius: 18px;
  }

  &.two {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  &.green {
    border: 2px solid green;
  }

  &.green:hover, &.green.selected {
    background-color: green;
  }

  &.red {
    border: 2px solid red;
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
        <MiddleWrapper>동의</MiddleWrapper> {inputs} <MiddleWrapper>비동의</MiddleWrapper>
      </InputContainer>
    </MainContainer>
  )
}