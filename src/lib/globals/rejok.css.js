//@flow
import { injectGlobal } from 'styled-components';


export const globalConfig = () => injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto');


 *,
 *::after,
 *::before {
   margin: 0;
   padding: 0;
   box-sizing: inherit; }

 html {
   font-size: 62.5%; }

 body {
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 400;
   box-sizing: border-box;
   line-height: 1.7;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);


  }

`
