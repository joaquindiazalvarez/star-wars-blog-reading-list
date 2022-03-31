import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { PageSelector } from "../component/page_selector";
import { Card } from "../component/card"
import { Context } from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context);
	const {houseArray} = store;
	const card = [0, 1, 2, 3, 4, 5]

	return(
		 <div>{houseArray.map((value, item)=>{
			 return(
				 <div key={item}className="container-fluid">
					 <h1>{value}</h1>
				 	<div className="text-center mt-5">
					 	<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
						 	{card.map((v, i)=>{return(
								 	<Card position={i} house={value} item={item} key={i}/>
							 )})}
					 	</div>
						<PageSelector house={value}/>
					</div>
				</div>
		 		)})}
			</div>
	)}
