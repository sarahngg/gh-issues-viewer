import React, {Component} from 'react';
import { connect } from 'react-redux';
import { nextPage, previousPage } from '../actions';

class Pagination extends Component {
  
  handleClick = (e) => {
    switch (e.target.getAttribute('id')) {
      case 'prev':
        this.props.previousPage();
        break;
      case 'next':
        this.props.nextPage();
        break;
      default:
        break;
    }
  }


  render() {
    return (
      <div className='pagination' onClick={this.handleClick}>
          <button id='prev'>&lt;</button>
          Page {this.props.page}
          <button id='next'>&gt;</button>
      </div>
      )
    }
}

const mapStateToProps = state => ({
  page: state.page,
});
export default connect(mapStateToProps, {nextPage, previousPage})(Pagination);

