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
    // console.log("this.props", this.props)
    // console.log(`searching for ${this.props.match.params.breweryId}`);
    // console.log(`this.state`, this.state)
    let path = this.props.match.path
    console.log("path", path)
    const id = path.replace(/\D/g,'');
    console.log("id", id)
    this.loadBrewery(id);
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


  formatPhoneNumber = phoneNumber => {
    let cleaned = ('' + phoneNumber).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
  }





  render() {
    const { brewery } = this.state;
    console.log("this.state", this.state)
    return (
      <div>
        <div className="single-brewery">
          <div>
            <p>Phone: {this.formatPhoneNumber(brewery.phone)}</p>
            <p>Address: {brewery.street}</p>
      </div>
          </div>
        </div>
    );
  }
}

export default Single;
