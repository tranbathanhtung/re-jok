// @flow
import * as React from 'react';
import {
  StyledDropdownWrapper,
  StyledDropdown
} from './style';
import ReactDOM from 'react-dom'



type Props = {
  style?: Object,
  className?: string,
  children?: any,
  content?: any,
  position: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight'
}


const defaultProps = {
  position: 'bottomLeft'
}

class Dropdown extends React.Component<Props>{

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



  componentDidMount(){
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick);

  }

  resetDropdown = ()=> {

    this.setState({
      top: 0,
      left: 0,

      open: false
    })
  }

  handleClick = (e)=> {

    const wrapper = ReactDOM.findDOMNode(this.refParent.current)
    const node = ReactDOM.findDOMNode(this.refChildren.current);
    const dropdown = ReactDOM.findDOMNode(this.refDropdown.current);
    const {open} = this.state;
    const {position} = this.props;

    if (node && node instanceof HTMLElement) {
      if (node.contains(e.target) || dropdown.contains(e.target)) {
        const rectChild = this.getPositionElement(node);
        const rectParent = this.getPositionElement(wrapper);
        const { width, height } = this.realElement(dropdown);

        console.log(rectChild);
        console.log(rectParent);
        let top = 0;
        let left = 0;
        switch (position) {
          case 'bottomLeft':
            top = rectChild.top - rectParent.top + rectChild.height + 10;
            left = rectChild.left - rectParent.left;
            break;
          case 'topLeft':
            top = rectChild.top - height -rectParent.top -10;
            left = rectChild.left - rectParent.left;
            break;
          case 'bottomRight':
            top = rectChild.top - rectParent.top + rectChild.height + 10;
            left = rectChild.left - rectParent.left - width + rectChild.width;
            break;
          case 'topRight':
            top = rectChild.top - height -rectParent.top -10;
            left = rectChild.left - rectParent.left - width + rectChild.width;
            break;
          default:

        }

        if(open) {
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
        this.resetDropdown();
      }


    }
  }

   realElement(el){
    const clone = el.cloneNode(true);

    clone.style.display = "block";
    clone.style.top = "-9999px";
    clone.style.left = "-9999px";
    document.body.appendChild(clone);
    const height = clone.offsetHeight;
    const width = clone.offsetWidth;

    clone.remove();
    return {
      width,
      height
    };
}

  getPositionElement = (el) => {
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





  render(){
    const {
      children,
      content,
      ...rest
    } = this.props;
    return (
      <StyledDropdownWrapper ref={this.refParent} style={{display: "flex", justifyContent: "center"}}>
        {
          React.Children.count(children) === 1
            ? <children.type {...children.props} ref={this.refChildren}/>
            : null
        }
       <StyledDropdown ref={this.refDropdown} {...this.state}>
         {content}
       </StyledDropdown>
     </StyledDropdownWrapper>
    )
  }
}

export default Dropdown
