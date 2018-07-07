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


        <Spinner type="bounce" size="small"/>
        <Spinner type="bounce" size="default"/>
        <Spinner type="bounce" size="medium"/>
        <Spinner type="bounce" size="large"/>
      </React.Fragment>

    )
  }
}

export default SpinnerDemo
