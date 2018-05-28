import React from 'react'
import Avatar from '../../Avatar/Avatar'
import Button from '../../Button/Button'
import Icon from '../../Icon'
import Badge from '../index'

export const BadgeDemo = () => (<React.Fragment>
  <div style={{
      display: "flex",
      marginTop: 30
    }}>
    <Badge>
      <Avatar shape="square" style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf'
        }}>T</Avatar>
    </Badge>

    <Badge count={5}>
      <Avatar size="medium" shape="square" imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852"/>

    </Badge>

    <Badge count={99}>

      <Avatar imgSrc="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" size="medium"/>
    </Badge>
    <Badge count={1212} maxCount={999}>
      <Avatar style={{
          backgroundColor: '#87d068'
        }} icon="rocket" size="large"/>

    </Badge>

  </div>
  <div style={{
      display: "flex",
      marginTop: 30
    }}>
    <Badge count={120}>
      <Button primary="primary" shape="rounded">Button</Button>
    </Badge>
    <Badge count={12}>
      <Button secondary="secondary">Button</Button>

    </Badge>
    <Button>Button</Button>

  </div>

  <div style={{
      display: "flex",
      marginTop: 30
    }}>
    <Badge count={20}>
      <Icon name="bell" size="2x"/>
    </Badge>
  </div>

</React.Fragment>)
