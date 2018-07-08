import styled from 'styled-components';

export const StyledNotificationWrapper = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  color: ${ ({theme}) => theme.text.regular};
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: fixed;
  z-index: 1010;
  width: 384px;
  max-width: calc(100vw - 32px);
  margin-right: 24px;
  right: 0px;
  top: 24px;
  bottom: auto;
`

export const StyledNotification = styled.div`
   padding: 50px;
   background: #fff;
   box-shadow: 0 4px 12px rgba(0,0,0,.15);
   border-radius: .4rem;
   margin-bottom: 1.6rem;
   font-size: 1.4rem;
   line-height 200ms, padding 200ms, right 350ms 200ms, opacity 350ms 200ms;
`
