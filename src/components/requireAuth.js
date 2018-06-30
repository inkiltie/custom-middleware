import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Component just received new set of props
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return(
        // Take all props from HOC to CommentBox
        <ChildComponent {...this.props} />
      );
    };
  };

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
