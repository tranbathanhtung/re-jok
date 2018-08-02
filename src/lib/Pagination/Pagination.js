// @flow
import * as React from 'react';
import Page from './Page';

import {
  StyledPagination,
} from './style';

import Icon from '../Icon';

import { noop } from '../helpers';
import { isFunction } from '../helpers/typeUtils';


type Props = {
  /** Style of Pagination Component**/
  style?: Object,
  /** Class of Pagination Component**/
  className?: string,
  /** Set style of Page**/
  stylePage?: Object,
  /** Set Class of Page**/
  classNamePage?: string,
  /** Set current page**/
  currentPage?: number,
  /** Set total page**/
  pages: number,
  /** Callback function when page change**/
  onPageChange: Function,
  /** Type of Pagination**/
  type: 'default' | 'hasBackground',
  /** Set color when active pagination**/
  color?: string,
}

type State = {
  currentPage: number
}

const defaultProps = {
  type: 'default',
  onPageChange: noop
}


class Pagination extends React.Component<Props, State> {

  static defaultProps = defaultProps;

  constructor(props: Props){
    super(props);

    this.state = {
      currentPage: props.currentPage || 0,
    }
  }

  componentDidUpdate(prevProps: Props){
    if(prevProps.currentPage !== this.props.currentPage){
      const { currentPage } = this.props;
      this.setState({ currentPage });
    }
  }

  handleClick = (page: number) => {

    const { onPageChange } = this.props;
    const { currentPage } = this.state;
    if(currentPage === page) return;


    this.setState({
      currentPage: page
     });

    isFunction(onPageChange) && onPageChange(page, {...this.props});
  }

  handleNextPage = () => {
     let { currentPage } = this.state;
     const { pages, onPageChange } = this.props;
     if(currentPage + 1 > pages - 1) return;


     this.setState({
       currentPage: currentPage + 1
     }, ()=>{
        isFunction(onPageChange) && onPageChange(this.state.currentPage, {...this.props});
     })




  }

  handlePrevPage = () => {
    let { currentPage } = this.state;
    const { onPageChange } = this.props;


    if(currentPage - 1 < 0) return;


    this.setState({
      currentPage:currentPage - 1
    }, ()=>{
      isFunction(onPageChange) && onPageChange(this.state.currentPage, {...this.props});
    })

  }

  handleFirstPage = () => {
    const { onPageChange } = this.props;

    this.setState({
      currentPage: 0
    }, ()=>{
      isFunction(onPageChange) && onPageChange(this.state.currentPage, {...this.props});
    })
  }

  handleLastPage = () => {
    const { pages, onPageChange } = this.props;


    this.setState({
      currentPage: pages -1
    }, ()=>{
      isFunction(onPageChange) && onPageChange(this.state.currentPage, {...this.props});
    })
  }

  renderPage = () => {

    const { pages, type, color, stylePage, classNamePage } = this.props;
    const { currentPage } = this.state;


    let listPage = [];

    if(pages > 0 ){
      let i = 0;
      let endPage;
      if(pages <=9){
        i = 0;
        endPage= pages;
      }
      else{
        if (currentPage <= 4) {
                i = 0;
                endPage = 9;
            } else if (currentPage + 4 >= pages) {

                i = pages - 9;
                endPage = pages;

            } else {
                i =currentPage - 4;
                endPage = currentPage + 5;
            }
      }


    for(i; i < endPage; i++) {

        const isActive = i === currentPage;

        listPage.push(
          <Page
            type={type}
            color={color}
            style={stylePage}
            className={classNamePage}
            key={i}
            page={i}
            handleClick={this.handleClick}
            active={isActive} >
            {i+1}
          </Page>
        )

      }

    }
    return listPage
  }

  render(){
    const {
      currentPage,

    } = this.state;
    const {
      stylePage,
      classNamePage,
      ...rest
    } = this.props;

    return (
      <StyledPagination {...rest}>

        <Page
          style={stylePage}
          className={classNamePage}
          page={currentPage}
          handleClick={this.handleFirstPage}
          >&laquo;</Page>

          <Page
            style={stylePage}
            className={classNamePage}
            page={currentPage}
            handleClick={this.handlePrevPage}
            ><Icon name="angle-left"/></Page>


        {this.renderPage()}

        <Page
          style={stylePage}
          className={classNamePage}
          page={currentPage}
          handleClick={this.handleNextPage}
          ><Icon name="angle-right"/></Page>

        <Page
          style={stylePage}
          className={classNamePage}
          page={currentPage}
          handleClick={this.handleLastPage}
          >&raquo;</Page>

      </StyledPagination>
    )
  }
}

export default Pagination;
