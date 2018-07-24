import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '..\\actions\\index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return(
        <li className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) { //glue between react and redux

  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  //When selectBook is called, passes to all reducers.
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from component to container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList) //final step to connect
