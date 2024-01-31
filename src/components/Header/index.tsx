import { useState, SetStateAction, Dispatch } from "react";
import * as S from "./styles";

export type HeaderProps = {
  dark?: boolean;
};

const Header = () => {
  const [dark, setDark]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false);
  return (
    <S.Wrapper dark={dark}>
      <h1>HEADER</h1>
      <button onClick={() => setDark(!dark)}>mudar cor</button>
    </S.Wrapper>
  );
};

export default Header;
