import React from "react";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLocation: "",
    };
  }
  searchHandler = (e) => {
    e.preventDefault();
    this.props.searchHandler(this.state.cityLocation);
    e.target.reset();
  };
  changeHandler = (e) => {
    const cityLocation = e.target.value;
    this.setState({ cityLocation });
  };
  render() {
    return (
      <form onSubmit={this.searchHandler} className="form-inline my-2 my-lg-0">
        <input
          onChange={this.changeHandler}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search location, zip..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
