// @flow
import * as React from 'react';
import ReactDOM from 'react-dom'

import {
  StyledSubMenuWrapper,
  StyledSubMenuTitle,
  StyledSubMenu
} from './style';

import {connectMenu} from './MenuContext';

type Props = {
  children?: any,
  title?: string | React.Node,
  openKey?: string,
  level?: number
}

const defaultProps = {
  level: 1
}


class SubMenu extends React.Component<Props>{

  static defaultProps = defaultProps;

  state = { childHeight: 0 };

  componentDidMount(){


    const node = ReactDOM.findDOMNode(this.refSubMenu.current);

    if (node && node instanceof HTMLElement) {
      const childHeightRaw = node.clientHeight;

      const childHeight = `${childHeightRaw / 10}rem`;
      this.setState({childHeight})
    }


  }

  refSubMenu: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  handleClick = (open) => {

    const {openKey, ...rest} = this.props;
    const {onOpenChange} = rest.context;


    const openChange = () => {
      onOpenChange({
        key: openKey,
        item: this,
        open,
      });
    };

    openChange();



  }
  render(){
    const {
      children,
      title,
      openKey,
      level,
      ...rest
    } = this.props;

    console.log(level)

    let style = {};

    style.paddingLeft = level * 24;
    const {openKeys} = rest.context;

    let isOpen = !openKeys.includes(this.props.openKey);

    return (
      <StyledSubMenuWrapper>
        {
          title
          ? (
            <StyledSubMenuTitle style={style} onClick={()=> this.handleClick(isOpen)}>
               {title}
            </StyledSubMenuTitle>
          ): null
        }

        <StyledSubMenu style={{
            maxHeight: !isOpen ? this.state.childHeight : 0,

          }} open={isOpen}>
          <div ref={this.refSubMenu}>
            {
              React.Children.map(children, (ch, i)=>(
                React.cloneElement(ch, {
                  key: i,
                  level: level+1,
                })
              ))
            }

          </div>

        </StyledSubMenu>

      </StyledSubMenuWrapper>
    )
  }
}

export default connectMenu(SubMenu);
