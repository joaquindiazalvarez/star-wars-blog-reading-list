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
		var charParam = params.theid;
		charParam = charParam.split("_");
		charParam = charParam.join(" ");
		for(let i = 0; i < entireFetch.length; i++){
			if(entireFetch[i].name === charParam){
				setObject(entireFetch[i]);
	 		}
		}
	},[entireFetch])
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
					<p>Ancestry : {charObject.ancestry}</p>
					<p>Eye Colour : {charObject.eyeColour}</p>
					<p>Hair Colour : {charObject.hairColour}</p>
					<p>Actor : {charObject.actor}</p>
					<button type="button" className="btn btn-warning" onClick={()=>{actions.addToFavorites(charObject.name)}}>Add to Favorites&nbsp;
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
					</button>
				</div>
				

				<Link to="/">
					<span className="btn btn-secondary btn-lg mt-3" href="#" role="button">
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
