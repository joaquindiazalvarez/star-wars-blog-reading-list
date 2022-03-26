import React, { useContext } from "react";
import "../../styles/home.css";
import { PageSelector } from "../component/page_selector";
import { Card } from "../component/card"
import { Context } from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context);
	return(
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				{store.gryffindor.map((value, key)=><Card position={key}/>)}
			</div>
			<PageSelector/>
		</div>

	)
};
