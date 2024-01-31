import { styled, css } from "styled-components";
import { HeaderProps } from ".";

export const Wrapper = styled.div<HeaderProps>`
  ${({ theme, dark }) => css`
    color: ${dark ? theme.colors.dark.primary : theme.colors.normal.secondary};
  `}
`;
