import React from 'react';
import Avatar from '../../Avatar/Avatar'
import AvatarGroup from '../../Avatar/AvatarGroup'
import {shallowWithTheme, mountWithTheme, renderWithTheme} from '../../helpers/withTheme';
import {defaultTheme} from '../../theme'
import 'jest-enzyme'
import 'jest-styled-components'

describe('<AvatarGroup />', () => {
  it('should render AvatarGroup', () => {
    const tree = renderWithTheme(<AvatarGroup>
      <Avatar>T</Avatar>
    </AvatarGroup>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render AvatarGroup correctly with list Avatar', () => {
    const wrapper = shallowWithTheme(<AvatarGroup>
      <Avatar>T</Avatar>
      <Avatar>U</Avatar>
      <Avatar>N</Avatar>
      <Avatar>G</Avatar>
    </AvatarGroup>, defaultTheme);
    expect(wrapper.find(Avatar)).toHaveLength(4)
  });

})
