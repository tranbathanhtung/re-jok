import React from 'react';
import ReactDOM from 'react-dom';
import { globalConfig, JokTheme, Button, Modal } from './lib';

globalConfig();


class App extends React.Component{
  state = {
    open: false
  }
  handleOpen = () => this.setState({ open: true})
  handleClose = () => this.setState({ open: false})
  render(){
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen} primary>Hello World</Button>
        <Modal slide="left" action={[
          <Button variant="outline" primary="primary">Cancel</Button>,
          <Button primary="primary">Oke</Button>
        ]} open={this.state.open} title="Welcome Basic Modal" onClose={this.handleClose}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

       </Modal>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
 <JokTheme>
      <App />
 </JokTheme>
, document.getElementById('root'));
