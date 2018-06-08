// @flow
import * as React from 'react'
import Button from '../Button';
import TextButton from '../TextButton';


type State = {
  loading: boolean
}

class MyButton extends React.Component<{}, State> {
  state = {
    loading: false
  }
  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  render(){
    return (
      <Button
       rule="submit"
       onClick={this.toggleLoading}
       loading={this.state.loading}
       // shape="circle"
       // disabled={false}
       size="large"
       icon="rocket"
       iconPosition="right"
       secondary
       >Button</Button>
    )
  }
}

class MyTextButton extends React.Component<{}, State>{
  state = {
    loading: false
  }
  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  render(){
    return (
      <TextButton
       rule="submit"
       onClick={this.toggleLoading}
       loading={this.state.loading}
       colorWhenHover="#03a87c"
       // shape="circle"
       // disabled={false}
       size="large"
       icon="rocket"

       primary
       >Button</TextButton>
    )
  }
}


export const ButtonDemo = ()=>(
  <div>


<div style={{display: "flex"}}>
  <Button
    rule="submit"
    className="mg-right"
    // onClick={()=> console.log("clicked")}
    loading={true}
    // shape="circle"
    // disabled={false}
    size="small"
    >Button</Button>

    <Button
     // rule="submit"
     // onClick={()=> console.log("clicked")}
     // loading={true}
     // shape="circle"
     // disabled={false}

     icon="rocket"
     primary
     animated="classic"
     // hrefString="https://www.google.com/"
     >Home</Button>




   <label htmlFor="fileUpload" style={{display: "flex"}}>


  <Button
   rule="submit"
   icon="rocket"
   // onClick={()=> console.log("clicked")}
   // loading={true}
   // shape="circle"
   // disabled={false}
   hasBoxShadow
   tag="span"
   backgroundColor="#f44336"
   size="medium"
   >Upload</Button>


  </label>
   <input type="file" id="fileUpload" style={{display: "none"}}/>





<MyButton/>





</div>
  <div style={{display: "flex"}}>

 <Button
   rule="submit"
   // onClick={()=> console.log("clicked")}
   // loading={true}
   shape="circle"
   icon="rocket"
   // disabled={false}
        size="small"
   />

   <Button
    rule="submit"
    // onClick={()=> console.log("clicked")}
    // loading={true}
    secondary
    hasBoxShadow
    icon="rocket"
    shape="circle"
    // disabled={false}

  />

<Button
rule="submit"
// onClick={()=> console.log("clicked")}
loading={true}
shape="circle"
icon="rocket"
primary
// disabled={false}
size="medium"
/>







<Button
rule="submit"
// onClick={()=> console.log("clicked")}
// loading={true}
shape="circle"
icon="rocket"

// disabled={false}
size="large"
>Button</Button>
</div>
<div style={{display: "flex"}}>
<Button
  rule="submit"
  // onClick={()=> console.log("clicked")}
  // loading={true}
shape="rounded"
  // disabled={false}
       size="small"
  >Button</Button>

  <Button
   rule="submit"
   // onClick={()=> console.log("clicked")}
   // loading={true}
shape="rounded"
hasBoxShadow
   // disabled={false}

   >Button</Button>

<Button
rule="submit"
// onClick={()=> console.log("clicked")}
// loading={true}
shape="rounded"
secondary
icon="rocket"
// disabled={false}
size="medium"
>Button</Button>







<Button
rule="submit"
// onClick={()=> console.log("clicked")}
// loading={true}
shape="rounded"
// disabled={false}
hasBoxShadow
icon="rocket"
size="large"
primary
>Button</Button>
</div>

<div style={{display: "flex"}}>
  <TextButton size="small">Button</TextButton>
<TextButton color="#f44336" colorWhenHover="#03a87c" loading>Button</TextButton>
  <TextButton size="medium">Button</TextButton>
<MyTextButton/>
</div>

<div style={{display: "flex"}}>
  <Button

   variant="inverted"
   icon="rocket"
   primary
   >Home</Button>
   <Button

    variant="outline"
    icon="rocket"
    iconPosition="right"

    >Home</Button>

    <Button

     shape="circle"
     variant="outline"
     icon="rocket"
     iconPosition="right"



     hrefString="https://www.google.com/"
     >Home</Button>
     <Button

      shape="rounded"

      variant="inverted"
      backgroundColor="#f44336"

      iconPosition="right"

      >Home</Button>
</div>
<div style={{display: "flex"}}>

    <Button

     variant="icon"
     icon="rocket"
     size="small"
     ></Button>


   <Button

    primary
    variant="icon"
    icon="rocket"
    ></Button>


    <Button
     size="medium"
     secondary
     variant="icon"
     icon="rocket"
     ></Button>

     <Button
       backgroundColor="#f44336"
      size="large"
      variant="icon"
      icon="rocket"
      ></Button>


</div>



</div>
)
