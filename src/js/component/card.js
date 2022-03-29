import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
export function Card(props){
    const {store, actions} = useContext(Context);
    for(let i = 0; i < 4; i++){
        if(props.house === store.houseArray[i]){
            var houseObtained = store.houseArray[i];
        }
    }
    for(let j = 0; j < 6; j++){
        if(j === Number(props.position)){
            var character = store[houseObtained][j]
        }
    }
    var charSelected = character?.name;
    var aux = charSelected.split(" ");
    charSelected = "/character/" + aux.join("_")
    return( 
        <>
        <div className="col-2">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={character?.image} alt="Card image cap" height ="400" width="300"></img>
                <div className="card-body">
                    <h5 className="card-title">{character?.name}</h5>
                    <p className="card-text">Ancestry : {character?.ancestry}<br/>Patronus : {character?.patronus}<br/>Actor : {character?.actor}</p>
                    <Link to={charSelected}><button type="button" className="btn btn-secondary">View</button></Link>
                </div>
            </div>
        </div>
       </>
    )
}