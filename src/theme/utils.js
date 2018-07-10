import {
  cloneTheme
} from './index';
//
// const changeTheme = (jokTheme, theme)=>{
//
//
//
//   Object.keys(theme).forEach(function (key) {
//     if ( 'object' === typeof theme[key] && !Array.isArray(theme[key]) ) {
//
//     	changeTheme(jokTheme[key], theme[key])
//     }
//     else if ( 'string' === typeof theme[key] || 'number' === typeof theme[key] ) {
//
//       jokTheme[key] = theme[key]
//     }
//   })
//
//
//   return jokTheme;
// }
//
// export const setTheme = (theme: Object) => {
//   let jokTheme = {...cloneTheme};
//
//   console.log(cloneTheme)
//
//    // console.log(cloneTheme);
//    const newTheme = changeTheme(jokTheme, theme);
//
//   // console.log(cloneTheme)
//
//
//    return jokTheme;
//
// }


export const setTheme = (theme: Object) => {
  let jokTheme = {...cloneTheme, ...theme};

  return jokTheme;
}
