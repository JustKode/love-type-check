import { useState } from 'react'
import styled from 'styled-components'
import SelectBox from './components/selectBox'
import ResultBox from './components/resultBox'
import question_data from './data/question_data.json'
import result_data from './data/result_data.json'
import type_check from './util/type_check'


const MainContainer = styled.div`
  padding: 20px;
  background-color: mintcream;
  min-height: 100vh;
`

const SubContainer = styled.div`
  max-width: 720px;
  margin: auto;
  background-color: white;
  border: 1px solid #cccccc;
`

const TitleContainer = styled.div`
  margin: 16px 8px;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
`

const DescriptionContainer = styled.div`
  margin: 8px;
  font-size: 16px;
  padding: 20px;
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
  margin-top: 20px;
  padding: 6px 12px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: black;
`

function App() {
  const [selects, setSelects] = useState(Array(question_data.length))
  const [result, setResult] = useState(<></>)
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

  const viewResult = () => {
    if (percent !== 100) {
      alert("모든 문항을 선택 해 주세요")
      return
    }

    const result = type_check(selects)
    const type = result[0][1] + "-" + result[1][1]

    console.log(result)

    let contents

    for (let i = 0; i < result_data.length; i++) {
      if (result_data[i].type === type) {
        contents = result_data[i].contents
        break
      }
    }

    setResult(<ResultBox type={type} contents={contents} result={result}/>)
  }

  return (
    <MainContainer>
      <SubContainer>
        <TitleContainer>AI로 보는 사랑의 유형 테스트</TitleContainer>
        <DescriptionContainer>
          AI로 보는 사랑의 유형 테스트
        </DescriptionContainer>
        <SelectBoxContainer>
          {questions}
        </SelectBoxContainer>
        <ButtonContainer>
          <SubmitButton onClick={e => {viewResult()}}>테스트 결과 확인하기</SubmitButton>
        </ButtonContainer>
        {result}
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
