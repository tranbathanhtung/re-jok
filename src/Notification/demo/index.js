// @flow
import * as React from 'react';
import Notification from '../Notification';
import Button from '../../Button/Button';
import Select from '../../Select/Select';
import Avatar from '../../Avatar/Avatar';

const { Option } = Select;

const options = ['topRight' , 'topLeft' , 'topCenter' , 'bottomRight' , 'bottomLeft' , 'bottomCenter']



class NotificationDemo extends React.Component<{}>{

  handleOpen = () => {
    const key = `open${Date.now()}`;


    Notification.open({
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

      title: 'Notification Title',
      key,
      closable: true,
      media: <Avatar size="medium" shape="square" imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>,
      timeout: 'none',
      customClose: <Button onClick={() => Notification.close(key)} size="small" shape="rounded" primary>Confirm</Button>,
      // onClose: ()=> alert("Closed"),
      // onShow: () => alert("Showed")

    })

  }

  handleOpenAnother = () => {
    const key = `open${Date.now()}`;


    Notification.open({
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: 'Another Notification',
      key,
      color: "#9c27b0",
      timeout: 'none',
      customClose: <Button onClick={() => Notification.close(key)} size="small" primary>Confirm</Button>,
      // onClose: ()=> alert("Closed"),
      // onShow: () => alert("Showed")

    })
  }
  componentDidMount() {
    Notification.config({
      position: 'topRight',
      effect: 'default',
    })
  }



  render(){


    return (
    <div style={{
        minHeight: "200vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
      <Button onClick={this.handleOpen}>Button</Button>
      <Button onClick={this.handleOpenAnother}>Button</Button>



    <Select
      placeholder="Choose option"
      onChange={(e) => {
        const value = e.target.value;
        Notification.config({
          position: value,
          effect: 'scale',

        })
      }}
       >
        {
          options.map((val, i) => (
            <Option key={i} value={val}>{val}</Option>
          ))
        }


      </Select>
      <Notification />

  </div>
    )
  }
}

export default NotificationDemo
