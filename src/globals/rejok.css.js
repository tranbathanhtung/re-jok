//@flow
import { injectGlobal } from 'styled-components';


injectGlobal`
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
   box-sizing: border-box; }

 body {
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 400;
   padding: 3rem;
   line-height: 1.7;
   color: #777;
    }


    .col-demo {

      background: #00a0e9;

    }

    .col {
      text-align: center;
      border-radius: 0;
      min-height: 30px;
      margin-top: 8px;
      margin-bottom: 8px;
      color: #fff;
      padding: 16px 0;
    }

    .gutter{
      background: #00a0e9;
      padding: 1rem 0;
    }

    .col-demo:nth-child(odd){
          background: rgba(0,160,233,.7);
    }




`
