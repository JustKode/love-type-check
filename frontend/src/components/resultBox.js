import styled from "styled-components";


const MainContainer = styled.div`
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

`

const ContentTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin: 16px 0;
`

const ContentComments = styled.div`
  font-size: 16px;
`

export default function ResultBox({type, contents}) {
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
      <ContentContainer>
        {contents_components}
      </ContentContainer>
    </MainContainer>
  )
}