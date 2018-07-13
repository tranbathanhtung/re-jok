//@flow
import * as React from 'react'
import Spinner from '../index';


class SpinnerDemo extends React.Component<{}> {
  render(){
    return(
      <React.Fragment>
        <Spinner size="small"/>
        <Spinner size="default"/>
        <Spinner size="medium"/>
        <Spinner size="large"/>

        <Spinner color="#9c27b0" size="default"/>
        <Spinner color="#FF7E67" size="medium"/>
        <Spinner color="#1c8ffb" size="large"/>




        <Spinner type="bounce" size="small"/>
        <Spinner type="bounce" size="default"/>
        <Spinner type="bounce" size="medium"/>
        <Spinner type="bounce" size="large"/>

        <Spinner color="#1c8ffb" type="bounce" size="small"/>
        <Spinner color="#9c27b0" type="bounce" size="default"/>
        <Spinner color="#FF7E67" type="bounce" size="medium"/>

      </React.Fragment>

    )
  }
}

export default SpinnerDemo
