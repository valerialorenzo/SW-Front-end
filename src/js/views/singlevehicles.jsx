import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlevehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [characters, setCharacters]=useState([])
	const [planet, setPlanet]=useState([])
	const [vehicle, setVehicle]=useState([])


	function obtenerInformationDeVehicle(){
		fetch("https://swapi.dev/api/vehicles/"+params.theid)
		.then(res => res.json())
		.then(data => setVehicle(data))
		.catch(err => console.error(err))
	}


	useEffect(()=>{
		obtenerInformationDeVehicle();
	},[])
	let id=params.theid;
	return (
		<>
		<div className="container">
		<div className="jumbotron w 75 mx-auto d-flex">
			<img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ (id) +".jpg"} className="mb-4" alt="Luke"style={{height:"300px", width:"300px"}}/>
			<div className="col mb-4">
			<h5 className="display-4 text-end me-5 ms-4 mt-3">{characters.name}</h5>
			<p className="text-center p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quisquam illo rerum ullam quos quo magnam, ut saepe sit sapiente totam consequuntur facilis inventore sequi dolorem laboriosam reprehenderit corporis voluptate.</p>
			</div>
			<hr className="my-4 bg-danger" style={{height:"2px"}} />
</div>


<hr className="my-4 text-danger text-center" style={{height: "5px"}}/>	
					<div className="row row-cols-6 text-danger text-center">
						<div className="col"><h5>Name</h5> <p className="fw-normal">{vehicle.name}</p></div>
						<div className="col"><h5>Capacity</h5> <p className="fw-normal">{vehicle.cargo_capacity}</p></div>
						<div className="col"><h5>Consumables</h5> <p className="fw-normal">{vehicle.consumables}</p></div>
                        <div className="col"><h5>Create</h5> <p className="fw-normal">{vehicle.created}</p></div>
					</div>


			</div>
		
</>
	);
    };

Singlevehicles.propTypes = {
	match: PropTypes.object
};
