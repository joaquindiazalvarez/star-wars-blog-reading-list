import React, { useContext } from "react";
import "../../styles/home.css";
import { PageSelector } from "../component/page_selector";
import { Card } from "../component/card"
import { Context } from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context);
	return(
		<>
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="first" house="g"/>
				<Card position="second" house="g"/>
				<Card position="third" house="g"/>
				<Card position="fourth" house="g"/>
				<Card position="fifth" house="g"/>
				<Card position="sixth" house="g"/>
			</div>
			<PageSelector house="g"/>
		</div>
		<div className="row">
            <div className="text-center">
                    <button type="button" className="btn btn-secondary" 
					onClick={actions.getGryffindor}>hola</button>
            </div> 
        </div>
{/* 		
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="first" house="h"/>
				<Card position="second" house="h"/>
				<Card position="third" house="h"/>
				<Card position="fourth" house="h"/>
				<Card position="fifth" house="h"/>
				<Card position="sixth" house="h"/>
			</div>
			<PageSelector house="h"/>
		</div><div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="first" house="r"/>
				<Card position="second" house="r"/>
				<Card position="third" house="r"/>
				<Card position="fourth" house="r"/>
				<Card position="fifth" house="r"/>
				<Card position="sixth" house="r"/>
			</div>
			<PageSelector house="r"/>
		</div>
		<div className="text-center mt-5">
			<div className="row d-flex flex-row bd-highlight mb-3 flex-nowrap">
				<Card position="first" house="s"/>
				<Card position="second" house="s"/>
				<Card position="third" house="s"/>
				<Card position="fourth" house="s"/>
				<Card position="fifth" house="s"/>
				<Card position="sixth" house="s"/>
			</div>
			<PageSelector house="s"/>
		</div> */}
		</>
	)
};
