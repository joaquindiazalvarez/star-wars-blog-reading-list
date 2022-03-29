import React, { useContext } from "react";
import "../../styles/home.css";
import { PageSelector } from "../component/page_selector";
import { Card } from "../component/card"
import { Context } from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context);
	const {houseArray} = store;
	const card = [0, 1, 2, 3, 4, 5]
	console.log(houseArray);
	return(
		 <div>{houseArray.map((value, item)=>{
			 return(
				 <div>
				 	<div className="text-center mt-5">
					 	<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
						 	{card.map((v, i)=>{return(
								 <Card position={i} house={value} item={item}/>
							 )})}
							{/* 							 
						 	<Card position="1" house={value} item={item}/>
						 	<Card position="2" house={value} item={item}/>
						 	<Card position="3" house={value} item={item}/>
						 	<Card position="4" house={value} item={item}/>
						 	<Card position="5" house={value} item={item}/> */}
					 	</div>
						<PageSelector house={value}/>
					</div>
				</div>
		 		)})}
			</div>
	)
	return(<>
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="0" house="gryffindor"/>
				<Card position="1" house="gryffindor"/>
				<Card position="2" house="gryffindor"/>
				<Card position="3" house="gryffindor"/>
				<Card position="4" house="gryffindor"/>
				<Card position="5" house="gryffindor"/>
			</div>
			<PageSelector house="h"/>
		</div><div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="0" house="hufflepuff"/>
				<Card position="1" house="hufflepuff"/>
				<Card position="2" house="hufflepuff"/>
				<Card position="3" house="hufflepuff"/>
				<Card position="4" house="hufflepuff"/>
				<Card position="5" house="hufflepuff"/>
			</div>
			<PageSelector house="r"/>
		</div>
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="0" house="ravenclaw"/>
				<Card position="1" house="ravenclaw"/>
				<Card position="2" house="ravenclaw"/>
				<Card position="3" house="ravenclaw"/>
				<Card position="4" house="ravenclaw"/>
				<Card position="5" house="ravenclaw"/>
			</div>
			<PageSelector house="s"/>
		</div>
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="0" house="slytherin"/>
				<Card position="1" house="slytherin"/>
				<Card position="2" house="slytherin"/>
				<Card position="3" house="slytherin"/>
				<Card position="4" house="slytherin"/>
				<Card position="5" house="slytherin"/>
			</div>
			<PageSelector house="h"/>
		</div>
		</>
	)
};
