// @flow
// export our theme to the provider
// This is globally available in styled-components when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styled-components';

export const theme = {
  size: {
    small: {
      fontSize: '1.2rem',
      padding: '0.5rem 0.9rem',
      "lineHeight": "1",
      "borderRadius": ".6rem",
      width: "2.4rem",
      height: "2.4rem"
    },
    default: {
      fontSize: '1.6rem',
      padding: '0.8rem 1.2rem',
      "lineHeight": "1.5",
      "borderRadius": "1rem",
      width: "3.2rem",
      height: "3.2rem"
    },
    medium: {
      fontSize: '2rem',
      padding: '1.2rem 1.6rem',
      "lineHeight": "1.5",
      "borderRadius": "1.4rem",
      width: "4rem",
      height: "4rem"

    },
    large: {
      fontSize: '2.4rem',
      padding: '1.4rem 1.8rem',
      "lineHeight": "2",
      "borderRadius": "1.8rem",
      width: "4.8rem",
      height: "4.8rem"
    }
  },
  primary: {
    color: "#1c8ffb",

  },
  secondary: {
    color: "#1b1c1d",

  }
};
