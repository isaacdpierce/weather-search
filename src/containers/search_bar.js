import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

// The search bar will be a controlled field - see NOTES.MD
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Go fetch weather data
    this.props.fetchWeather(this.state.term);
    // clear search input
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// Hook up actionCreator fetchWeather to searchBar container
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch); // now we have access to the method this.props.fetchWeather to be used onFormSubmit above
}

export default connect(null, mapDispatchToProps)(SearchBar);
// null is the 1st arg because mapDispatchToProps is always the second argument to connect - first arg is usually state -> null says this container does not care about state.


