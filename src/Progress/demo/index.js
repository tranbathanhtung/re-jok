//@flow
import * as React from 'react';
import Progress from '../Progress';



class ProgressDemo extends React.Component<{}>{
  render(){
    return (
      <React.Fragment>
        <Progress />
        <Progress indeterminate={false} />

      </React.Fragment>
    )
  }
}

export default ProgressDemo
