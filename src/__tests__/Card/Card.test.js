import React from 'react';
import Card from '../../Card/Card';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import {defaultTheme} from '../../theme';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';

import 'jest-enzyme';
import 'jest-styled-components';

// This is just Snap shot test


describe('<Card />', () => {
  it('should render', () => {
    const tree = renderWithTheme(
      <Card>
        Card
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with Card Header', () => {
    const tree = renderWithTheme(
      <Card>
        <Card.Header avatar={<Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
  } title="Trần Bá Thanh Tùng" subheader="@tungtbt" action={<Button size = "small" > Follow</Button>
  }/>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with Card Media', () => {
    const tree = renderWithTheme(
      <Card>
          <Card.Media src="https://i.imgur.com/9u0Wngc.jpg"/>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with Card Content', () => {
    const tree = renderWithTheme(
      <Card>
        <Card.Content title="Awesome card" subtitle="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </Card.Content>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('should render with Card Action', () => {
    const tree = renderWithTheme(
      <Card>
        <Card.Action actionRight={[
            <Button variant="icon" icon="thumbs-up" size="medium"/>,
            <Button variant="icon" icon="comments" size="medium"/>
          ]} actionLeft={[<Button variant="icon" icon="bookmark" size="medium"/>]}/>
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('should render with Card Loading', () => {
    const tree = renderWithTheme(
      <Card loading>
      Card
      </Card>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });



    it('should render with full card option', () => {
      const tree = renderWithTheme(
        <Card hoverable="hoverable" loading>
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

        </Card>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });



});
