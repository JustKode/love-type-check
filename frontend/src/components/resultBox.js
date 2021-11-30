import styled from "styled-components";


const MainContainer = styled.div`
  margin: 40px 0;
  padding: 20px;
`

const TitleContainer = styled.div`
  font-size: 18px;
  text-align: center;
`

const TitleWrapper = styled.span`
  color: orange;
  font-size: 32px;
  font-weight: bold;
`

const ContentContainer = styled.div`

`

const Content = styled.div`
  margin: 20px 0;
`

const ContentTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin: 16px 0;
`

const ContentComments = styled.div`
  font-size: 16px;
`

const GaugeTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: 8px 0;
`

const GaugeBox = styled.div`
  height: 20px;
  max-width: 400px;
  margin: auto;
  border: 1px solid #eeeeee;
  border-radius: 8px;
`

const GaugeBar = styled.div`
  height: 20px;
  background-color: ${props => props.color};
  width: ${props => props.width}%;
  border-radius: 8px;
`

function Gauge({info}) {
  const color_dict = {
    "공생": "#8fb9aa",
    "쾌락": "#ed8975",
    "생산": "#f2d096",
    "소유": "#304d63"
  }
  return <>
    <GaugeTitle>
      {info[1]} : {Math.floor(1000 * info[0]) / 10}%</GaugeTitle>
    <GaugeBox>
      <GaugeBar color={color_dict[info[1]]} width={Math.floor(1000 * info[0]) / 10}/>
    </GaugeBox>
  </>
}


export default function ResultBox({type, contents, result}) {
  const results_components = result.map(x => (<Gauge info={x}/>))
  const contents_components = contents.map(x => (
    <Content>
      <ContentTitle>{x.title}</ContentTitle>
      <ContentComments>{x.content}</ContentComments>
    </Content>
  ))

  return (
    <MainContainer>
      <TitleContainer>
        당신의 타입은...<br/>
        <TitleWrapper>{type}</TitleWrapper> 입니다.
      </TitleContainer>
      {results_components}
      <ContentContainer>
        {contents_components}
      </ContentContainer>
    </MainContainer>
  )
}