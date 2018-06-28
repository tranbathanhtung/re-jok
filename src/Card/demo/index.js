// @flow
import * as React from 'react'
import Card from '../Card'


import Avatar from '../../Avatar/Avatar'
import Button from '../../Button/Button'


class LoadingCard extends React.Component<{}, {loading: boolean}> {
  state = {
    loading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 2000)
  }
  toggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  render() {

    return (<Card hoverable loading={this.state.loading} {...this.props}>
      <Card.Media src="https://i.imgur.com/9u0Wngc.jpg"/>
      <Card.Header avatar={<Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
} title="Trần Bá Thanh Tùng" subheader="@tungtbt" action={<Button size = "small" > Follow</Button>
}/>

      <Card.Content title="Awesome card" subtitle="subtitle">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </Card.Content>

      <Card.Action actionRight={[
          <Button variant="icon" icon="thumbs-up" size="medium"/>,
          <Button variant="icon" icon="comments" size="medium"/>
        ]} actionLeft={[<Button variant="icon" icon="bookmark" size="medium"/>]}/>

    </Card>)
  }
}

class CardDemo extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <Card.Group center numberCard={{xs: 1, sm: 2, md: 3, lg: 4}}>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>



        </Card.Group>
        <Card.Group   numberCard={{xs: 1, sm: 1, md: 2, lg: 2}}>
        <Card hoverable style={{
        flexDirection: "row"
        }}>
        <Card.Media style={{
          flex: "0 0 45%"
        }} src="https://i.imgur.com/9u0Wngc.jpg"/>

        <div>
        <Card.Header avatar={<Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
        } title="Trần Bá Thanh Tùng" subheader="@tungtbt" action={<Button size = "small" > Follow</Button>
        }/>
        <Card.Content title={<a href = "www.google.com" > Awesome card</a>}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </Card.Content>

        <Card.Action actionRight={[
            <Button variant="icon" icon="thumbs-up" size="medium"/>,
            <Button variant="icon" icon="comments" size="medium"/>
          ]} actionLeft={[<Button variant="icon" icon="bookmark" size="medium"/>]}/>
        </div>

        </Card>
        <Card hoverable style={{
        flexDirection: "row"
        }}

        >
        <Card.Media style={{
          flex: "0 0 45%"
        }} src="https://i.imgur.com/9u0Wngc.jpg"/>

        <div>
        <Card.Header avatar={<Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
        } title="Trần Bá Thanh Tùng" subheader="@tungtbt" action={<Button size = "small" > Follow</Button>
        }/>
        <Card.Content title={<a href = "www.google.com" > Awesome card</a>}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </Card.Content>

        <Card.Action actionRight={[
            <Button variant="icon" icon="thumbs-up" size="medium"/>,
            <Button variant="icon" icon="comments" size="medium"/>
          ]} actionLeft={[<Button variant="icon" icon="bookmark" size="medium"/>]}/>
        </div>

        </Card>
        </Card.Group>
      </React.Fragment>

  )
  }
}

export default CardDemo
