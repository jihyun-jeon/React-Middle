// [P1]npm i styled-components  <-터미널에 styled-component를 설치해줌
import React, { useState } from "react";
import styled from "styled-components";
import Circle from "./3.Circle";

function AniApp() {
  // [p1] - state는 string타입 이여야 함을 지정함
  const [Ivalue, setValue] = useState("");
  // [p2] - 이벤트가 어떤 요소에서 발생하는지 타입을 지정함.
  //event기 무슨 타입인지 설명해야함. 따라서 밑에 HTMLInputElement를 씀으로써
  // 어떤 html요소에서 이 이벤트를 발생시킬지 특정지을 수 있음. (input요소 에서만 이 이벤트가 발생될 것임을 지정해줌.)
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // 타입스크립트에서는 e.target이 아니라 currentTarget!
    // const value = e.currentTarget.value; 질문1) 이거랑 같은거임!!
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //form에서 이벤트 발생했을시 이 함수가 실행됨
    e.preventDefault();
    console.log("hello", Ivalue);
  };

  const DivEl = styled.div`
    border: 1px solid violet;
    background-color: ${(prop) =>
      prop.theme.bgColor}; //lightTheme 객체에 있는 bgColor를 프롭으로 받음
  `;

  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <DivEl>
      {/* [p1]컴포넌트를 실행하면서 props를 보냄 */}
      {/* <Circle bgColor="teal" borderColor="yellow" txt="wow" />
      <Circle bgColor="tomato" /> */}
      <form onSubmit={onSubmit}>
        <input
          value={Ivalue}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
        {/* 질문2)onSubmit은 폼에 걸어줬는데 버튼을 누르면 서브밋 이벤트 발생되는 이유? */}
      </form>
      <Title>Title</Title>
    </DivEl>
  );
}

export default AniApp;
