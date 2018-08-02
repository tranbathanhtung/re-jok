import React from 'react';
import ReactDOM from 'react-dom';

import Modal from './lib/Modal';
import {Button} from './lib/Button';
import JokTheme from './lib/theme/JokTheme';
import JokBody from './lib/globals/JokBody';
import Sidebar from './lib/Sidebar';
import Avatar from './lib/Avatar';
import Alert from './lib/Alert';
import Notification from './lib/Notification';
import Image from './lib/Image';
import {globalConfig} from './lib/globals/rejok.css.js';


import registerServiceWorker from './registerServiceWorker';

globalConfig();

class App extends React.Component {
  state = {
    open: false
  }
  // handleOpen = () => this.setState({open: true})
  handleClose = () => this.setState({open: false})
  handleOpen = () => {
    const key = `open${Date.now()}`;

    Notification.open({
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      title: 'Notification Title',
      key,
      closable: true,
      media: <Avatar size="medium" shape="square" imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>,
      timeout: 'none',
      customClose: <Button onClick={() => Notification.close(key)} size="small" shape="rounded" primary="primary">Confirm</Button>,
      // onClose: ()=> alert("Closed"),
      // onShow: () => alert("Showed")

    })

  }
  componentDidMount() {
    Notification.config({position: 'topRight', effect: 'scale'})
  }

  render(){
    return (
        <JokTheme>
          <React.Fragment>

          <Button onClick={this.handleOpen}>Button</Button>
           <Notification/>
           <Alert icon="rocket" closable title="Oops">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Alert>

           <Image width={160} height={160} thumbnail shape="rounded" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>
           <Button shape="circle" icon="rocket"/>
           <Button shape="circle" primary icon="rocket"/>
          {/* <Modal closable scrollable action={[
            <Button variant="outline" primary="primary">Cancel</Button>,
            <Button primary="primary">Oke</Button>
           ]} open={this.state.open} title="Welcome Basic Modal" onClose={this.handleClose}>
            <p>Hehee</p>



          </Modal> */}
          {/* <Sidebar opacity onToggle={this.handleClose} open={this.state.open}/> */}
      </React.Fragment>

        </JokTheme>


    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
