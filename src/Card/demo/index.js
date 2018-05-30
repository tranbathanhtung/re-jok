import React from 'react'
import Card from '../Card'
import Icon from '../../Icon'

import Avatar from '../../Avatar/Avatar'
import Button from '../../Button/Button'


class CardDemo extends React.Component{
  render(){
    return (
      <Card>
        <Card.Header
        avatar={
          <Avatar style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf'
            }}>T</Avatar>
        }
        title="Trần Bá Thanh Tùng"
        subheader="@tungtbt"
        action={
          <Button size="small">Follow</Button>
        }
        />
        <Card.Media
          src="https://i.imgur.com/9u0Wngc.jpg"
        />

      <Card.Content title="Awesome Card">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Card.Content>


      </Card>


    )
  }
}

export default CardDemo
