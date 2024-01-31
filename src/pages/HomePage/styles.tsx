import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.normal.gray};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;
