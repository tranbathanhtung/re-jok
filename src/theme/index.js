// @flow
// export our theme to the provider
// This is globally available in styled-components when interpolating a function like so:
// ${(props) => props.theme}
// Or using import { withTheme } from 'styled-components';


export const defaultTheme = {
  size: {
    small: {
      fontSize: '1.2rem',
      padding: '0.5rem 0.9rem',
      "lineHeight": "1",
      "borderRadius": ".2rem",
      width: "2.4rem",
      height: "2.4rem"
    },
    default: {
      fontSize: '1.6rem',
      padding: '0.9rem 1.8rem',
      lineHeight: "1.5",
      borderRadius: ".4rem",
      width: "3.2rem",
      height: "3.2rem"
    },
    medium: {
      fontSize: '1.8rem',
      padding: '1.4rem 2.7rem',
      lineHeight: "1.5",
      borderRadius: ".6rem",
      width: "4rem",
      height: "4rem"

    },
    large: {
      fontSize: '2.4rem',
      padding: '1.8rem 3.6rem',
      lineHeight: "2",
      borderRadius: ".6rem",
      width: "4.8rem",
      height: "4.8rem"
    }
  },
  grid:{
    xs: 768,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1920
  },
  text: {
    primary: "rgba(0, 0, 0, 0.85)",
    secondary: "rgba(0, 0, 0, 0.48)",
    hint: "rgba(0, 0, 0, 0.38)"
  },
  background: {
    paper: "#fff",
    default: "#fafafa"
  },
  typography: {
    title: {
      fontSize: "2rem",
      fontWeight: "600",
      lineHeight: "2.8rem"

    },
    subtitle: {
      fontSize: "1.6rem",
      fontWeight: "400",
      lineHeight: "2.4rem"


    }
  },
  primary: {
    main: "#1c8ffb",

  },
  secondary: {
    main: "#1b1c1d",
  },
  info: {
    main: "#1890ff"
  },
  error: {
    main: "#f5222d"
  },
  success: {
    main: "#52c41a"
  },
  warning: {
    main: "#faad14"
  },
  zIndex: {
    base: 1,
    background: 0,
    hidden: -1,
    card: 2,
    loading: 3,
    avatar: 3,
    form: 3,
    search: 3,
    modal: 1500,
  }
};

const changeTheme = (defaultTheme, theme)=>{
  let cloneTheme = defaultTheme;


  Object.keys(theme).forEach(function (key) {
    if ( 'object' === typeof theme[key] && !Array.isArray(theme[key]) ) {
    	changeTheme(cloneTheme[key], theme[key])
    }
    else if ( 'string' === typeof theme[key] || 'number' === typeof theme[key] ) {
      cloneTheme[key] = theme[key]
    }
  })
  return cloneTheme;
}

export const setTheme = (theme: Object) => {

   const newTheme = changeTheme(defaultTheme, theme);
   return newTheme;

}
