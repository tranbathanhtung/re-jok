// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';

import Icon from '../Icon';
import {
  StyledSubMenuWrapper,
  StyledSubMenuTitle,
  StyledSubMenu,
  StyledSubMenuArrow
} from './style';

import {connectMenu} from './MenuContext';

type Props = {
  /** Children of SubMenu could be anything but it should be MenuList or MenuItem**/
  children?: any,
  /** title of SubMenu**/
  title?: string | React.Node,
  /** openKey must required **/
  openKey?: string,
  /** level of SubMenu ... default level 1**/
  level: number,
  /** data from menu parent**/
  context: Object,
}

const defaultProps = {
  level: 1
}

type State = {
  childHeight: number | string | null
}


class SubMenu extends React.Component<Props, State>{

  static defaultProps = defaultProps;

  state = { childHeight: 0 };

  componentDidMount(){
      this.setHeightRaw();
  }

  refSubMenu: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  setHeightRaw = () => {
    const node = ReactDOM.findDOMNode(this.refSubMenu.current);

    if (node && node instanceof HTMLElement) {
      const childHeightRaw = node.clientHeight;

      const childHeight = `${childHeightRaw / 10}rem`;
      this.setState({childHeight})
    }
  }

  handleClick = (open) => {

    const {openKey, ...rest} = this.props;
    const {onOpenChange} = rest.context;

    // console.log(this.state.childHeight)
    // if(this.state.childHeight === null && open){
    //   this.setState({
    //     childHeight: 0,
    //   })
    // }

    this.setHeightRaw();

    const openChange = () => {
      onOpenChange({
        key: openKey,
        item: this,
        open,
      });
    };





    openChange();



  }

  onTransitionEnd = (e)=> {
    this.setState({
      childHeight: null
    })
  }
  render(){
    const {
      children,
      title,
      openKey,
      level,
      ...rest
    } = this.props;

    let style = {};

    style.paddingLeft = level * 24;
    const {openKeys} = rest.context;

    let isOpen = !openKeys.includes(this.props.openKey);

    return (
      <StyledSubMenuWrapper>

            <StyledSubMenuTitle style={style} onClick={()=> this.handleClick(isOpen)}>
               {title}
               <StyledSubMenuArrow open={isOpen}>
                 <Icon name="angle-down"/>
               </StyledSubMenuArrow>
            </StyledSubMenuTitle>


        <StyledSubMenu open={isOpen}
          childHeight={this.state.childHeight}
          onTransitionEnd={this.onTransitionEnd}
          >
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
