import "./AdviceComponent.css";
import { useEffect, useState } from "react";

import dice from "../assets/images/icon-dice.svg";

export const AdviceComponent = () => {
	const [advice, setAdvice] = useState([]);

	const fetchData = async () => {
		const random = Math.floor(Math.random() * 130);
		const res = await fetch(`https://api.adviceslip.com/advice/${random}`)
			.then((r) => r.json())
			.then((data) => setAdvice(data.slip))
			.catch((e) => console.warn(e));
	};

	const handleClick = (e) => {
		e.preventDefault();
		fetchData();
	};

	useEffect(() => {
		fetchData();
	}, []);
	console.log(advice);
	return (
		<main className="container">
			{/* advice.advice and advice.id */}
			<p>Advice #{advice.id}</p>
			<q>{advice.advice}</q>

			<div className="barDivider"></div>
			<button className="btn" onClick={handleClick}>
				<img src={dice} alt="dice icon for button" />
			</button>
		</main>
	);
};
