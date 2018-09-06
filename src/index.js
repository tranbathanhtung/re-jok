import React from 'react';
import ReactDOM from 'react-dom';
import { globalConfig, JokTheme, Button, Modal, Sidebar, Notification, Avatar } from './lib';

globalConfig();


class App extends React.Component{
  state = {
    open: false
  }

  handleOpen = () => {
    Notification.open({
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", title: 'Notification Title',
      closable: true,
      media: <Avatar size="medium" shape="square" imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>,
      timeout: 'none',
      customClose: <Button onClick={() => Notification.close()} size="small" shape="rounded" primary="primary">Confirm</Button>,

    })

  }

  componentDidMount() {
    Notification.config({position: 'topRight', effect: 'default'})
  }
  // handleOpen = () => this.setState({ open: true})
  // handleClose = () => this.setState({ open: false})
  //
  // handleToggle = () => this.setState({ open: !this.state.open})
  render(){
    return (
      <React.Fragment>
        <Button onClick={this.handleOpen} primary>Hello World</Button>
        {/* <Modal slide="left" action={[
          <Button variant="outline" primary="primary">Cancel</Button>,
          <Button primary="primary">Oke</Button>
        ]} open={this.state.open} title="Welcome Basic Modal" onClose={this.handleClose}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

       </Modal> */}
       {/* <Sidebar
          opacity
          onRequestClose={this.handleClose}
          direction="left"
          open={this.state.open}>
      </Sidebar> */}
      <Notification/>

      </React.Fragment>
    )
  }
}

ReactDOM.render(
 <JokTheme>
      <App />
 </JokTheme>
, document.getElementById('root'));
