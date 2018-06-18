// @flow
import * as React from 'react';
import {
  StyledDropdownWrapper,
  StyledDropdown
} from './style';
import ReactDOM from 'react-dom'



type Props = {
  /** Override style of Dropdown**/
  style?: Object,
  /** Add more class to dropdown**/
  className?: string,
  /** Children of dropdown**/
  children: React$Element<any>,
  /** Dropdown content could be anything**/
  content?: any,
  /** Dropdown could be 6 position. Default value is bottom left**/
  position: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight',
  /** set trigger dropdown is hover or click**/
  trigger: 'hover' | 'click',
}

type State = {
  top: number,
  left: number,
  open: boolean
}


const defaultProps = {
  position: 'bottomLeft',
  trigger: 'hover',
}



class Dropdown extends React.Component<Props, State>{

  static defaultProps = defaultProps;

  state = {
    top: 0,
    left: 0,
    open: false
  }

  refParent: {
    current: null | React$ElementRef<any>
  } = React.createRef();


  refChildren: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  refDropdown: {
    current: null | React$ElementRef<any>
  } = React.createRef();

  timer: TimeoutID;



  componentDidMount(){
    const {trigger} = this.props;


    trigger === "click" && document.addEventListener('mousedown', this.handleEvent);

  }

  componentWillUnmount(){

    const {trigger} = this.props;

    trigger === "click" && document.removeEventListener('mousedown', this.handleEvent);


  }

  resetDropdown = ()=> {

    this.setState({
      top: 0,
      left: 0,
      open: false
    })
  }

  handleEvent = (e: Event)=> {

    const {trigger} = this.props;


    const wrapper = ReactDOM.findDOMNode(this.refParent.current);
    const node = ReactDOM.findDOMNode(this.refChildren.current);
    const dropdown = ReactDOM.findDOMNode(this.refDropdown.current);
    const {open} = this.state;


    if (node && node instanceof HTMLElement && dropdown && dropdown instanceof HTMLElement && wrapper && wrapper instanceof HTMLElement) {
      if (node.contains((e.target: any)) || dropdown.contains((e.target: any)) || wrapper.contains((e.target: any))) {
        const rectChild = this.getPositionElement(node);
        const rectParent = this.getPositionElement(wrapper);
        const { width, height } = this.realElement(dropdown);

        const {top, left } = this.getRealPosition(rectChild, rectParent, width, height);

        if(open) {
          if(trigger === 'hover') return;
          setTimeout(()=>{
            this.resetDropdown()
          }, 150)
        }
        else {
          this.setState({
            top,
            left,
            // width,
            // height,
            open: true
          })
        }
      } else {
        if(trigger === 'hover') return;
        this.resetDropdown();
      }


    }
  }

   realElement = (el: HTMLElement) => {
    const clone = el.cloneNode(true);

    clone.style.display = "block";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    if (!document.body) throw new Error("Unexpectedly missing <body>.");
    const body: HTMLElement = document.body;
    body.appendChild(clone);
    const height = clone.offsetHeight;
    const width = clone.offsetWidth;

    clone.remove();
    return {
      width,
      height
    };
  }

  getPositionElement = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();

    const height = el.offsetHeight || el.clientHeight;
    const width = el.offsetWidth || el.clientWidth;

    return {
      top: rect.top,
      left: rect.left,
      height,
      width
    }
  }

  getRealPosition = (rectChild: Object, rectParent: Object, width: number, height: number) => {

    const {position} = this.props;


    let top = 0;
    let left = 0;
    switch (position) {
      case 'bottomLeft':
        top = rectChild.top - rectParent.top + rectChild.height + 10;
        left = rectChild.left - rectParent.left;
        break;
      case 'topLeft':
        top = rectChild.top - height -rectParent.top - 10;
        left = rectChild.left - rectParent.left;
        break;
      case 'bottomRight':
        top = rectChild.top - rectParent.top + rectChild.height + 10;
        left = rectChild.left - rectParent.left - width + rectChild.width;
        break;
      case 'topRight':
        top = rectChild.top - height -rectParent.top - 10;
        left = rectChild.left - rectParent.left - width + rectChild.width;
        break;
      case 'bottomCenter':
        top = rectChild.top - rectParent.top + rectChild.height + 10;
        left = rectChild.left - rectParent.left - width/2 + rectChild.width/2;
        break;
      case 'topCenter':
        top = rectChild.top - height -rectParent.top - 10;
        left = rectChild.left - rectParent.left - width/2 + rectChild.width/2;
        break;
      default:
        return {
          top,
          left
        }

    }

    return {
      top,
      left
    }
  }

  onMouseEnter = (e: Event) => {

    const wrapper = ReactDOM.findDOMNode(this.refParent.current);
    if (wrapper && wrapper instanceof HTMLElement)
    wrapper.contains((e.target: any)) && this.timer && clearTimeout(this.timer);

    this.handleEvent(e);
  }

  onMouseLeave = () => {

    this.timer = setTimeout(()=>{

        this.resetDropdown()

    }, 300)
  }




  render(){
    const {
      children,
      content,
      trigger,
      ...rest
    } = this.props;

    const mouseEvent = {
      onMouseLeave: trigger === 'click' ? null : this.onMouseLeave,
      onMouseEnter: trigger === 'click' ? null : this.onMouseEnter,
    }

    return (
      <StyledDropdownWrapper
        {...mouseEvent}
        ref={this.refParent}>

          {
            React.Children.count(children) === 1
              ? <children.type

                {...children.props}
                ref={this.refChildren}/>
              : null
          }

       <StyledDropdown {...rest} ref={this.refDropdown} {...this.state}>
         {content}
       </StyledDropdown>
     </StyledDropdownWrapper>
    )
  }
}

export default Dropdown
