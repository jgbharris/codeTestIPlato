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
    // // console.log("this.props.result", this.props.result)
    // console.log("this.props.result.name", this.props.result.name)
    console.log("this.props.result.id", this.props.result.id)
    // const { id, name } = this.props.result


    let webUrl = this.props.result.website_url
    let id = this.props.result.id   
    let name = this.props.result.name

    return (
      <Router>
        <Card style={{ width: '18rem', height: "20rem", textAlign: 'left' }} className="result-card">
        <Card.Header className="results-card-header">{this.props.result.name}</Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted results-city-header">{this.props.result.city}</Card.Subtitle>
          <Card.Text className='results-brewery-type'>
            Brewery Type: {this.props.result.brewery_type}
          </Card.Text>
          <Card.Link className='results-url' href={webUrl} target="_blank">Website</Card.Link>
          <Link className='results-url' to={`/brewery/${id}/${slug(name)}`}>
          <p className='results-url'>More info</p>
          </Link>
        <Switch>
          <Route path={`/brewery/${id}/${slug(name)}`} component={Single} />
          {/* <Route path="/brewery:Id" component={Single} /> */}
        </Switch>
        </Card.Body>
      </Card>
      </Router>
      
    );
  }
}