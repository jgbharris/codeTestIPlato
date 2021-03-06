import React from 'react';
import './typesfilter.css'
import Switch from "react-switch";

export default function TypesFilter(props){

	return(

		<div>
			<form className="types-filter-form">
				<label className="toggle-label">
					<span className="switch-label">Micro</span>
					<Switch 
						className="react-switch" 
						value="micro" 
						onChange={() => props.handleFilterChange("micro")} 
						checked={props.typesDisplayed.micro}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>
				<label className="toggle-label">
					<span className="switch-label">Brewpub</span>
					<Switch 
						className="react-switch" 
						value="brewpub" 
						onChange={() => props.handleFilterChange("brewpub")} 
						checked={props.typesDisplayed.brewpub}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>
				<label className="toggle-label">
					<span className="switch-label">Regional</span>
					<Switch 
						className="react-switch" 
						value="regional" 
						onChange={() => props.handleFilterChange("regional")} 
						checked={props.typesDisplayed.regional}
						onColor="#FDBB30"
						offColor="#041E42" />
						
				</label>

				<label className="toggle-label">
					<span className="switch-label">Large</span>
					<Switch 
						className="react-switch" 
						value="micro" 
						onChange={() => props.handleFilterChange("large")} 
						checked={props.typesDisplayed.large}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>
				<label className="toggle-label">
					<span className="switch-label">Planning</span>
					<Switch 
						className="react-switch" 
						value="brewpub" 
						onChange={() => props.handleFilterChange("planning")} 
						checked={props.typesDisplayed.planning}
						onColor="#FDBB30"
						offColor="#041E42" />
				</label>
				<label className="toggle-label">
					<span className="switch-label">Bar</span>
					<Switch 
						className="react-switch" 
						value="regional" 
						onChange={() => props.handleFilterChange("bar")} 
						checked={props.typesDisplayed.bar}
						onColor="#FDBB30"
						offColor="#041E42" />
						
				</label>
				<label className="toggle-label">
					<span className="switch-label">Contract</span>
					<Switch 
						className="react-switch" 
						value="regional" 
						onChange={() => props.handleFilterChange("contract")} 
						checked={props.typesDisplayed.contract}
						onColor="#FDBB30"
						offColor="#041E42" />
						
				</label>
				<label className="toggle-label">
					<span className="switch-label">Proprietor</span>
					<Switch 
						className="react-switch" 
						value="regional" 
						onChange={() => props.handleFilterChange("proprietor")} 
						checked={props.typesDisplayed.proprietor}
						onColor="#FDBB30"
						offColor="#041E42" />
						
				</label>

			</form>
		</div>

	)
}
