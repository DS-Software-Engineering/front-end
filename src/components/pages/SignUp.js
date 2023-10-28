import styled from "styled-components";

function SignUp() {
  return (
    <Container>
      <TitleSpan>회원 가입</TitleSpan>
      <SubTitle>아이디*</SubTitle>
      <InputBox>
        <Input type="id" placeholder="아이디를 입력해주세요." />
        <CheckBtn>중복 확인</CheckBtn>
      </InputBox>
      <SubTitle>비밀번호*</SubTitle>
      <InputBox>
        <Input2
          type="password"
          placeholder="비밀번호를 입력해주세요. (8~15자,영 대/소문자, 숫자 조합)"
        />
      </InputBox>
      <SubTitle>비밀번호 재입력*</SubTitle>
      <InputBox>
        <Input2
          type="password"
          placeholder="비밀번호를 다시 한번 입력해주세요."
        />
      </InputBox>
      <SubTitle>닉네임*</SubTitle>
      <InputBox>
        <Input type="text" placeholder="닉네임을 입력해주세요. (5자 이하)" />
        <CheckBtn>중복 확인</CheckBtn>
      </InputBox>
      <SubTitle>휴대폰 번호*</SubTitle>
      <InputBox>
        <Input type="text" placeholder="휴대폰 번호를 입력해주세요." />
        <CheckBtn>인증 번호 발송</CheckBtn>
      </InputBox>
      <SubTitle>휴대폰 본인 인증*</SubTitle>
      <InputBox>
        <Input type="text" placeholder="인증번호 6자리를 입력해주세요." />
        <CheckBtn>확인</CheckBtn>
      </InputBox>
      <NextBtn>다음</NextBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding: 0 15px;
`;

const TitleSpan = styled.div`
  font-size: larger;
  font-weight: 600;
  margin: 30px 0px;
  height: 20px;
  display: flex;
  justify-content: center;
`;

const SubTitle = styled.span`
  font-size: medium;
  color: #626262;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 220px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: small;
  margin-bottom: 15px;
`;

const Input2 = styled.input`
  width: 358px;
  height: 30px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: small;
  margin-bottom: 15px;
`;

const CheckBtn = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #dceeff;
  color: #454545;
  font-weight: 700;
  font-size: medium;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextBtn = styled.button`
  width: 358px;
  height: 50px;
  border-radius: 10px;
  border: none;
  background-color: #dceeff;
  margin: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
`;

export default SignUp;
