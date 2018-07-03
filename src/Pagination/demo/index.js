// @flow
import * as React from 'react';

import Pagination from '../Pagination';

type State = {
  currentPage: number
}

class PaginationDemo extends React.Component<{}, State> {
  state = {
    currentPage: 1,
  }
  handlePageChange = (currentPage: number) => {
    console.log(currentPage)
    // this.setState({currentPage})
  }

  render(){
    return (
      <React.Fragment>
        <Pagination
          pages={18}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange} />

          <Pagination
            pages={18}
            type="effect"
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange} />
          {/* With color */}
            <Pagination
              color="#9c27b0"
              pages={18}
              currentPage={this.state.currentPage}
              onPageChange={this.handlePageChange} />

              <Pagination
                color="#9c27b0"
                pages={18}
                type="effect"
                currentPage={this.state.currentPage}
                onPageChange={this.handlePageChange} />


                <Pagination
                  color="#e91e63"
                  pages={18}
                  currentPage={this.state.currentPage}
                  onPageChange={this.handlePageChange} />

                  <Pagination
                    color="#e91e63"
                    pages={18}
                    type="effect"
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange} />


      </React.Fragment>

    )
  }
}

export default PaginationDemo;
