import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Loading from '../layout/Loading';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Loading /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
