import React, { Component } from 'react';
import './App.css';


import SearchSection from './components/searchsection';
import Results from './components/results';
import HeaderBar from './components/headerbar'

import regions from './regions';

import {API_BASE_URL} from './config'



export default class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			results: [],
			typesDisplayed: {
				micro: true,
				regional: true,
				brewpub: true,
				large: true,
				planning: true,
				bar: true,
				contract: true,
				proprietor: true

			},
			searchTerm: "",
			searchRegion: "",
			loading: false,
			resultCount: 100,
			regions: regions
		}
	}


	 //fetch API to get call state brewery API
	fetchStateResults(region){
    let url = `${API_BASE_URL}?by_state=${this.state.searchRegion}&per_page=${this.state.resultCount}`;
		return fetch(url)
        .then(res => res.json())
        .then(body => {
            console.log(body)
            this.updateResults(body);
            this.setState({loading: false})
            })
        .catch(err => {
            console.log(err);
        });
	}

	//loads api fetch results into state
	updateResults(results){
		this.setState({
			results
		})
	}

	//filters to only include specific brewery type
	handleFilterChange(filterTarget){
		let filterObj = {
			[filterTarget]: !this.state.typesDisplayed[filterTarget]
		}

		this.setState({
			...this.state, 
			typesDisplayed: {...this.state.typesDisplayed, ...filterObj}
		})
	}

	//sets searchTerm controlled variable
	setSearchTerm(searchTerm){
	  	this.setState(
	  		{searchTerm})
	}

    //this function uses a setState callback to fetch more results
    showMoreResults(){
        let resultCount = this.state.resultCount + 10;
        this.setState({
          resultCount: resultCount,
          loading: true
        }, () => this.fetchStateResults(this.state.searchRegion))
    }

    //this function uses a setState callback to fetch results
	handleSubmit(region){
		console.log(region)
      this.setState({
        searchRegion: region.region,
        loading: true
      }, () => this.fetchStateResults(this.state.searchRegion))

	}


	render() {


		// filter results based on typesDisplayed
		let filteredResults = this.state.results.filter((result, index) => {
			return (
				// Object.keys(this.state.typesDisplayed).includes(result.brewery_type)
				this.state.typesDisplayed[result.brewery_type]
				)
		})

		

		console.log("filteredResults", filteredResults)
		console.log("this.state.typesDisplayed", this.state.typesDisplayed)

		return (
			<div className="App">
			<HeaderBar />
			<SearchSection
				regions={this.state.regions}
				searchTerm={this.state.searchTerm}
				results={this.state.results} 
				updateResults={(results)=>this.updateResults(results)}
				fetchStateResults={(region)=>this.fetchStateResults(region)}
				setSearchTerm={(searchTerm)=>this.setSearchTerm(searchTerm)}
				handleSubmit={(region)=>this.handleSubmit(region)}
				/>
			<Results 
				results={filteredResults}
				typesDisplayed={this.state.typesDisplayed}
				handleFilterChange={filterTarget => this.handleFilterChange(filterTarget)}
				showMoreResults={()=>this.showMoreResults()}
				loading={this.state.loading}
			/>
			</div>
			);
	}
}

