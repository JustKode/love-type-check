import { useState } from 'react'
import styled from 'styled-components'
import SelectBox from './components/selectBox'
import question_data from './data/question_data.json'


const MainContainer = styled.div`
  padding: 10px 20px;
  background-color: mintcream;
  min-height: 100vh;
`

const SubContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  background-color: white;
  border: 1px solid #cccccc;
`

const TitleContainer = styled.div`
  margin: 16px 8px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`

const DescriptionContainer = styled.div`
  margin: 8px;
`

const SelectBoxContainer = styled.div`

`

const StatusBarContainer = styled.div`
  position: fixed;
  bottom: 0;
`

const ButtonContainer = styled.div`
  text-align: center;
  margin: 16px 0;
`

const SubmitButton = styled.button`
  padding: 4px 8px;
  border: none;
  color: white;
  background-color: black;
`

function App() {
  const [selects, setSelects] = useState(Array(question_data.length))
  const setSelect = (index, value) => {
    let new_selects = [...selects]
    new_selects[index] = value
    setSelects(new_selects)
  }

  const questions = question_data.map(x => <SelectBox key={x.id} {...x} setState={setSelect}/>)
  let selected_num = 0.0
  for (let i = 0; i < question_data.length; i++) {
    if (selects[i] !== undefined) {
      selected_num += 1.0
    }
  }
  const percent = Math.floor(100 * selected_num / question_data.length)

  return (
    <MainContainer>
      <SubContainer>
        <TitleContainer>타이틀</TitleContainer>
        <DescriptionContainer>
          설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명 설명
        </DescriptionContainer>
        <SelectBoxContainer>
          {questions}
        </SelectBoxContainer>
        <ButtonContainer>
          <SubmitButton>테스트 결과 확인하기</SubmitButton>
        </ButtonContainer>
      </SubContainer>
      <StatusBarContainer>
        <div>
          {percent} %
        </div>
      </StatusBarContainer>
    </MainContainer>
  );
}

export default App;
