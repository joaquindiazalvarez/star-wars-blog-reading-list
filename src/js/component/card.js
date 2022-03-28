import React, { useContext, useState } from "react"
import { Context } from "../store/appContext"
export function Card(props){
    const {store, actions} = useContext(Context);
    if(props.house==="g"){
        var house = store.gryffindor;
    }
    else if(props.house==="h"){
        var house = store.hufflepuff;
    }
    else if(props.house==="r"){
        var house = store.ravenclaw;
    }
    else if(props.house==="s"){
        var house = store.slythering;
    }
    if(props.position==="first"){
        var character = house[0];
    }
    else if(props.position==="second"){
        var character = house[1];
    }
    else if(props.position==="third"){
        var character = house[2];
    }
    else if(props.position==="fourth"){
        var character = house[3];
    }
    else if(props.position==="fifth"){
        var character = house[4];
    }
    else if(props.position==="sixth"){
        var character = house[5];
    }
    return( 
        <>
        <div className="col-2">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={character?.image} alt="Card image cap" height ="400" width="300"></img>
                <div className="card-body">
                    <h5 className="card-title">{character?.name}</h5>
                    <p className="card-text">Ancestry : {character?.ancestry}<br/>Patronus : {character?.patronus}<br/>Actor : {character?.actor}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
       </>
    )
}