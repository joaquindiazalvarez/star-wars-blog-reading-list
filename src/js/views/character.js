import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";

export const Character = props => {
	const { store, actions } = useContext(Context);
	const [entireFetch, setFetch] = useState([])
	const [charObject, setObject] = useState({})
	const params = useParams();
	function getCharacters(){
		fetch("https://hp-api.herokuapp.com/api/characters")
  		.then(response => response.json())
  		.then(result => {setFetch(result)
						console.log(result);})
  		.catch(error => console.log('error', error));
	}
	useEffect(()=>{
		getCharacters()
		
	},[])
	useEffect(()=>{
		console.log("este es mi fetch")
		console.log(entireFetch)
		var charParam = params.theid;
		charParam = charParam.split("_");
		charParam = charParam.join(" ");
		for(let i = 0; i < entireFetch.length; i++){
			if(entireFetch[i].name === charParam){
				setObject(entireFetch[i]);
				console.log(charObject) 
	 		}
		}
	},[entireFetch])
	console.log("este es mi objeto")
	console.log(charObject)
	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<img src={charObject.image} heigth="350" width="350"></img>
				</div>
				<div className="col-6">
					<h1 className="mb-3">{charObject.name}</h1>
					<p>Species : {charObject.species}</p>
					<p>Gender : {charObject.gender}</p>
					<p>House : {charObject.house}</p>
					<p>Date of birth : {charObject.dateOfBirth}</p>
					<p>Wizard : {charObject.wizard}</p>
					<p>Ancestry : {charObject.ancestry}</p>
					<p>Eye Colour : {charObject.eyeColour}</p>
					<p>Hair Colour : {charObject.hairColour}</p>
				</div>
				

				<Link to="/">
					<span className="btn btn-primary btn-lg mt-3" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
};

Character.propTypes = {
	match: PropTypes.object
};
