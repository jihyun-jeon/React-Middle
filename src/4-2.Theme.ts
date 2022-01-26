//앞에서 정의한 interface의 실제 테마를 구현하는 곳이다.
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  //lightTheme의 타입은 DefaultTheme라고 지정해줌
  bgColor: "tomato",
  textColor: "green",
};

export const darkTheme: DefaultTheme = {
  bgColor: "green",
  textColor: "tomato",
};
