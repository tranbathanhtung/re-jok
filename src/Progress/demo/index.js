//@flow
import * as React from 'react';
import Progress from '../Progress';
import Tooltip from '../../Tooltip/Tooltip';

type State = {
  completed: number
}



class ProgressDemo extends React.Component<{}, State>{
  timer: IntervalID;

  state = {
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      this.setState({ completed: 0 });
    } else {
      const diff = Math.random() * 10;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render(){
    return (
      <React.Fragment>
        <div style={{marginBottom: 20}}>
        <Progress />
    </div>
    <div style={{marginBottom: 20}}>
      <Tooltip label={`${Math.floor(this.state.completed)}%`}>
        <Progress percent={this.state.completed} indeterminate={false} color="#9c27b0"/>

      </Tooltip>

    </div>
    <div style={{marginBottom: 20}}>

        <Progress size="default" percent={this.state.completed} indeterminate={false} color="#ffd04b" />
    </div>
    <div style={{marginBottom: 20}}>

        <Progress size="medium" percent={this.state.completed} indeterminate={false} color="#e91e63"/>
    </div>

    <div style={{marginBottom: 20}}>

        <Progress size="large" percent={this.state.completed} indeterminate={false} />
    </div>

    <div style={{marginBottom: 20}}>

        <Progress fixed percent={this.state.completed} indeterminate={false} />
    </div>

      </React.Fragment>
    )
  }
}

export default ProgressDemo
