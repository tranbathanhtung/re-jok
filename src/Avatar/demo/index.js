// @flow

import * as React from 'react'
import Avatar from '../Avatar'


export const AvatarDemo = () => (<React.Fragment>
  <div style={{
      display: "flex"
    }}>

    <Avatar shape="square" style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}>T</Avatar>

    <Avatar size="medium" shape="square" imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>

    <Avatar shape="square" style={{
        backgroundColor: '#87d068'
      }} icon="rocket"/>

    <Avatar style={{
        color: '#f56a00',
        backgroundColor: '#fde3cf'
      }}>T</Avatar>

    <Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" size="medium"/>

    <Avatar style={{
        backgroundColor: '#87d068'
      }} icon="rocket" size="large"/>


        </div>
  <div style={{
      display: "flex"
    }}>
    <Avatar.Group size="small">
      <Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
      <Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
      <Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />

  </Avatar.Group>
  </div>
</React.Fragment>)
