import styled from 'styled-components'


// ================ Card =================
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  border: .1rem solid rgba(0,0,0,0.1);
  border-radius: .5rem;
  max-width: 100%;
  height: 100%;
  position: relative;
  font-size: 1.4rem;
  color: rgba(0,0,0,.65);
  margin: 0;
  padding: 0;
  background: #fff;
  transition: all .3s;
  box-sizing: border-box;
  list-style: none;
`


// ================= Card Header ==============
export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 1.4rem;

  @media (min-width: 70rem){
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`

export const StyledCardHeaderInfo = styled.div`
   display: flex;
   align-items: center;
   flex: 1 1 70%;

`
export const StyledCardHeaderAction = styled.div`
    flex: 0 0 30%;
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

   & > * {
     margin-right: .6rem;
   }

`

export const StyledCardHeaderText = styled.div`
  display: flex;
  flex-direction: column;


`

export const PrimaryText = styled.span`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
`

export const SecondaryText = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.5rem;

`

//=============== Card Media ===============
export const StyledCardMedia = styled.div`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 0;
  padding-top: 56%;
  background-image: ${props => props.src ? `url("${props.src}")` : ""};
`

//================ Card Content =============
export const StyledCardContent = styled.div`
   clear: both;
   color: rgba(0,0,0,.68);
   padding: 1.4rem;
   font-size: 1.4rem;
   line-height: 2rem;
   font-weight: 400;

   @media (min-width: 70rem){
     padding-left: 1.6rem;
     padding-right: 1.6rem;
   }
`

export const StyledCardContentTitle = styled.div`
   font-size: 1.6rem;
   color: rgba(0, 0, 0, 0.85);
   font-weight: 600;
   text-overflow: ellipsis;
   overflow: hidden;
   letter-spacing: -.029rem;
   margin-bottom: .5rem;
   white-space: nowrap;
`
