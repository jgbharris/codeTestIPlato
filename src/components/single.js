import React from "react";
import PropTypes from "prop-types";

class Single extends React.Component {
  constructor() {
    super();
    this.state = { brewery: {}, loading: true };
  }

  static propTypes = {
    params: PropTypes.object
  };

  componentDidMount() {
    console.log("this.props", this.props)
    console.log(`searching for ${this.props.match.params.breweryId}`);
    console.log(`this.state`, this.state)
    this.loadBrewery(this.props.match.params.breweryId);
  }

  loadBrewery = breweryId => {
    console.log(`Loading brewery ${breweryId}`);
    this.setState({ loading: true });
    fetch(`https://api.openbrewerydb.org/breweries/${breweryId}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ brewery: res, loading: false });
        console.log("res", res)
        // console.log("data", data)
      });
  };

  render() {

    const { brewery } = this.state;
    // console.log("this.state", this.state)

    return (
      <div>
        <div className="single-brewery">
          <div className="desc">
            <h2>{brewery.name}</h2>
            <p>{brewery.brewery_type}</p>
          </div>

          <div className="style">
            <h3>More Info on {brewery.website_url}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;
