import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import slug from 'slugify';
import PropTypes from 'prop-types';
import './results.css';
import Single from './single';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class ResultCard extends Component {
  static propTypes = {
    result: PropTypes.object.isRequired
  }
  render() {
    // console.log("this.props", this.props)
    console.log("this.props.result.id", this.props.result.id)
    const { id, name } = this.props.result


    let webUrl = `${this.props.result.website_url}`;

    return (
      <Router>
        <Card style={{ width: '18rem', height: "15rem", textAlign: 'left' }} className="result-card">
        <Card.Header className="results-card-header">{this.props.result.name}</Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted results-city-header">{this.props.result.city}</Card.Subtitle>
          <Card.Text className='results-brewery-type'>
            Brewery Type: {this.props.result.brewery_type}
          </Card.Text>
          <Card.Link className='results-url' href={webUrl} target="_blank">Website</Card.Link>
        </Card.Body>
        <Link className='results-url' to={`/brewery/${id}/${slug(name)}`}>
          <h5 className='results-url'>More info {name}</h5>
        </Link>
        <Switch>
          <Route path="/brewery/:breweryId:/:brewerySlug" component={Single} />
        </Switch>
      </Card>
      </Router>
      
    );
  }
}