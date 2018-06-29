// @flow
import * as React from 'react';

import ReactDOM from 'react-dom';


import {
  StyledCollapseItem,
  StyledCollapseItemTitle,
  StyledCollapseItemContent,
} from './style';

type Props = {
  children?: any,
  label?: string | React.Node,
  collKey: string,
  activeKeys?: Array<string>,
  onOpenChange?: Function
}

const WAITING = 'WAITING';
const RESIZING = 'RESIZING';
const DONE = 'DONE';
const IDLING = 'IDLING';

type State = {
  childHeight: number | string | null
}

class CollapseItem extends React.Component<Props> {

  state = { childHeight: 0, isTransitionEnd: IDLING }; //max-height: 0

  componentDidMount(){
      this.setHeightRaw();
      this.setState({

        isTransitionEnd: RESIZING,  //display: none
      })
  }

  componentDidUpdate(prevProps, prevState) {
    // if(prevState.isTransitionEnd !== this.state.isTransitionEnd){
    //   // console.log(this.state.isTransitionEnd)
    //   this.setState({
    //     isTransitionEnd: false
    //   })
    //
    // }
  }

  refContent: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  setHeightRaw = () => {
    const node = ReactDOM.findDOMNode(this.refContent.current);

    if (node && node instanceof HTMLElement) {
      const childHeightRaw = node.clientHeight;


      const childHeight = `${childHeightRaw / 10}rem`;
      this.setState({
        childHeight,

      })

    }
  }

  handleClick = (open) => {

    const {activeKeys, onOpenChange, collKey, ...rest} = this.props;


      // this.setHeightRaw();

        this.setState({

          isTransitionEnd: WAITING, //max-height = xxxrem
        })





    onOpenChange && onOpenChange({
      key: collKey,
      item: this,
      open,
    });




  }

  onTransitionEnd = (e, isOpen)=> {
    console.log(isOpen)
    if(isOpen){
      this.setState({
        // childHeight: "",
        isTransitionEnd: DONE // display: block, removoe maxHeigh
      })
    } else {
      this.setState({
        // childHeight: "",
        isTransitionEnd: IDLING // display: none
      })
    }

  }
  render(){
    const {
      children,
      label,
      activeKeys,
      collKey,
      ...rest
    } = this.props;


    let isOpen = activeKeys.includes(collKey);



    return (
      <StyledCollapseItem {...rest}>
        <StyledCollapseItemTitle onClick={()=> this.handleClick(isOpen)}>
          {label}
        </StyledCollapseItemTitle>
        <StyledCollapseItemContent
          open={isOpen}
          onTransitionEnd={(e) =>this.onTransitionEnd(e, isOpen)}
          childHeight={this.state.childHeight}
          isTransitionEnd={this.state.isTransitionEnd}

          >
            <div ref={this.refContent}>
              {children}
            </div>

        </StyledCollapseItemContent>
      </StyledCollapseItem>
    )
  }
}

export default CollapseItem
