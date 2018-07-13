//@flow
import styled, {css} from 'styled-components';

const baseTypography = css`
  color: ${({ theme }) => theme.text.primary};
  margin: 0 0 1rem 0;
  padding: 0;


`

export const H1 = styled.h1`

  ${baseTypography};
  font-weight: 500;
  font-size: 3.8rem;
  line-height: 1.2;

`;

export const H2 = styled.h2`
  ${baseTypography};
  font-weight: 500;
  font-size: 3rem;
  line-height: 1.3;

`;

export const H3 = styled.h3`
  ${baseTypography};
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 1.4;

`;

export const H4 = styled.h4`
  ${baseTypography};
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.4;

`;

export const H5 = styled.h5`
  ${baseTypography};
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.4;

`;

export const H6 = styled.h6`
  ${baseTypography};
  font-weight: 500;

  font-size: 1.4rem;
  line-height: 1.4;
`;

export const P = styled.p`
  ${baseTypography};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.4;

`;

export const Span = styled.span`
  ${baseTypography};

  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4;

`;
