import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PageSelector } from "../component/page_selector";
import { Card } from "../component/card"

export const Home = () => (
	<div className="text-center mt-5">
		<Card/>
		<PageSelector/>
	</div>
);
