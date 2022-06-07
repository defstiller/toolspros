import React from "react";

import HeaderLayout from "../../components/header/HeaderLayout";

import styles from "./about.module.css";

function About() {
	return <>
		<HeaderLayout />
		<main className={styles.main}>
			<h1>Get to know us!</h1>
			<img src="https://iili.io/XDmpqB.md.webp" alt="our team"/>
			<p>
				Cillum elit ullamco duis mollit non anim. Excepteur dolore cupidatat quis officia aliquip occaecat consectetur mollit occaecat labore. Irure tempor enim magna do occaecat sint. Enim aute culpa enim Lorem quis.Enim labore nostrud excepteur occaecat eiusmod pariatur cillum anim dolore sit. Et eiusmod deserunt laborum eu nostrud Lorem duis ea occaecat ullamco voluptate mollit nulla. Consectetur eiusmod consectetur nulla cillum.Amet sit nostrud esse consequat dolore enim occaecat deserunt elit irure veniam mollit commodo cillum. Eu laboris nisi adipisicing ullamco enim voluptate mollit cupidatat. Consequat quis dolor aute ullamco enim ullamco laborum sit amet cupidatat eu magna ad proident. Eiusmod ullamco reprehenderit anim occaecat ad id et enim cillum qui consectetur. Commodo anim deserunt mollit incididunt ut excepteur anim amet nostrud deserunt deserunt.
			</p>
			<p>
				Sit adipisicing do eu eiusmod amet in quis nisi elit occaecat pariatur do occaecat exercitation. Duis nostrud laboris eiusmod tempor. Esse ipsum incididunt nisi mollit ullamco cupidatat officia non dolore esse quis mollit nulla enim. Et fugiat cupidatat irure officia est ad ut. Esse eiusmod id eu ex cillum ipsum est. Duis adipisicing qui quis magna aute. Consectetur sunt ad eu velit labore minim irure proident aliqua nisi enim.
			</p>
		</main>
	</>;
}

export default About;