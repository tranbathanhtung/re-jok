// @flow
import * as React from 'react'
import ReactDOM from 'react-dom'
import {
  StyledBadge,
  StyledSup
} from './style'



type Props = {
  /** number will display in badge**/
  count: number,
  /** children should be html element and just one child**/
  children: React$Element<any>,
  /** Max number to show**/
  maxCount: number,
}

type State = {
  /** Width of children element**/
  widthChildren: number
}

const defaultProps = {
  count: 0,
  maxCount: 99,
}

class Badge extends React.Component<Props, State> {
  static defaultProps = defaultProps;

  constructor(props: Props){
    super(props);
    this.state = {
      widthChildren: 0,
    }

  }

  refChildren: {current: null | React$ElementRef<any>} = React.createRef();

  componentDidMount(){
    const node = ReactDOM.findDOMNode(this.refChildren.current);


    if(node && node instanceof HTMLElement){
      this.setState({
        widthChildren: node.offsetWidth
      })
    }



  }

  render(){
    const {
      count,
      children,
      maxCount
    } = this.props;

    const { widthChildren } = this.state;

    const label = count > maxCount ? `${maxCount}+` : count;



    return (
      <StyledBadge>
      {  React.Children.count(children) === 1
        ? <children.type {...children.props} ref={this.refChildren} />
        : console.log("failed")}
        <StyledSup widthChildren={widthChildren} {...this.props}>{label}</StyledSup>
      </StyledBadge>
    )
  }
}

export default Badge
