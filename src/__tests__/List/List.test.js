import React from 'react';
import List from '../../List/List';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';

import {defaultTheme} from '../../theme';
import { shallowWithTheme, mountWithTheme, renderWithTheme } from '../../helpers/withTheme';

import 'jest-enzyme';
import 'jest-styled-components';


// this's just snapshot test

describe('<List />', () => {
  it('basic render', () => {
    const tree = renderWithTheme(
      <List>
        <List.Item>Home</List.Item>
        <List.Item>Button</List.Item>
        <List.Item>Card</List.Item>
        <List.Item>Avatar</List.Item>
        <List.Item>Grid</List.Item>
        <List.Item>List</List.Item>
        <List.Item>Icon</List.Item>

      </List>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    const wrapper = shallowWithTheme(
      <List>
        <List.Item>Home</List.Item>
        <List.Item>Button</List.Item>
        <List.Item>Card</List.Item>
        <List.Item>Avatar</List.Item>
        <List.Item>Grid</List.Item>
        <List.Item>List</List.Item>
        <List.Item>Icon</List.Item>

      </List>
      , defaultTheme);


    expect(wrapper.find(List.Item)).toHaveLength(7)

  });

  it('should render with horizontal layout', () => {
    const tree = renderWithTheme(
      <List horizontal>
        <List.Item>Home</List.Item>
        <List.Item>Button</List.Item>
        <List.Item>Card</List.Item>
        <List.Item>Avatar</List.Item>
        <List.Item>Grid</List.Item>
        <List.Item>List</List.Item>
        <List.Item>Icon</List.Item>

      </List>


    ).toJSON();
    expect(tree).toMatchSnapshot();



  });

  it('should render full control list', () => {
    const tree = renderWithTheme(
      <List divided>
        <List.Item>
          <List.Content
            primaryHeader="Tung Tran Ba Thanh"
            description={
              <List>
                <List.Item>
                  <List.Content
                    primaryHeader="Tung Tran Ba Thanh"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                    secondaryHeader="Lorem Ipsum"
                    media={
                      <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                    }
                  />
                </List.Item>

                <List.Item>
                  <List.Content
                    primaryHeader="Tung Tran Ba Thanh"
                    description={
                      <List>
                        <List.Item>
                          <List.Content
                            primaryHeader="Tung Tran Ba Thanh"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                            secondaryHeader="Lorem Ipsum"
                            media={
                              <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                            }
                          />
                        </List.Item>

                        <List.Item>
                          <List.Content
                            primaryHeader="Tung Tran Ba Thanh"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                            secondaryHeader="Lorem Ipsum"
                            media={
                              <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                            }
                          />
                        </List.Item>

                        <List.Item>
                          <List.Content
                            primaryHeader="Tung Tran Ba Thanh"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                            secondaryHeader="Lorem Ipsum"
                            media={
                              <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                            }
                          />
                        </List.Item>
                      </List>
                    }

                    secondaryHeader="Lorem Ipsum"
                    media={
                      <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                    }
                  />
                </List.Item>

                <List.Item>
                  <List.Content
                    primaryHeader="Tung Tran Ba Thanh"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."

                    secondaryHeader="Lorem Ipsum"
                    media={
                      <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
                    }
                  />
                </List.Item>
              </List>
            }

            secondaryHeader="Lorem Ipsum"
            action={<Button hasBoxShadow variant="outline">Add</Button>}
            media={
              <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
            }
          />
        </List.Item>

        <List.Item>
          <List.Content
            primaryHeader="Tung Tran Ba Thanh"
            secondaryHeader="Lorem Ipsum"
            action={<Button hasBoxShadow variant="outline">Add</Button>}
            media={
              <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
            }
          ></List.Content>
        </List.Item>

        <List.Item>
          <List.Content
            primaryHeader="Tung Tran Ba Thanh"

            secondaryHeader="Lorem Ipsum"
            action={<Button hasBoxShadow variant="outline">Add</Button>}
            media={
              <Avatar imgSrc = "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/c8.0.160.160/p160x160/13256326_1693157114242503_1952158310037985017_n.jpg?_nc_cat=0&_nc_eui2=AeHxGBHGerdp_tpPrKAqCXG_dT5O7zEHBxGSVtiqVcY-NJyK4OXo7i_pH-6207vmY_0yJ4iocMGa3IgmYhgSfCYPuAPyLQQBTnP-vPg-U_wZtw&oh=a421582f63736bf60c96f745a7ef9aa2&oe=5B843852" />
            }
          />
        </List.Item>
      </List>


    ).toJSON();
    expect(tree).toMatchSnapshot();



  });

})
