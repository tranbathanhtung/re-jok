import * as React from 'react';

import { StyledSidebarContent } from './style';

import { isChild } from '../helpers/typeUtils';

var SidebarContent = function SidebarContent(props) {

  var hasChild = !isChild(props.children);

  return React.createElement(
    StyledSidebarContent,
    props,
    hasChild && props.children
  );
};

SidebarContent.defaultProps = {
  direction: 'left',
  width: 256,
  height: 60
};

export default SidebarContent;