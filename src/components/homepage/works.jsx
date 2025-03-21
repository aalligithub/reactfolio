import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import INFO from "../../data/user";

import jahadLogo from "../../data/jahadLogo.jpg"
import lionLogo from "../../data/lionLogo.jpg"
import tahlilgaran from "../../data/tahlilgaran.jpg"

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src={tahlilgaran}
								className="work-image"
							/>
							<div className="work-title">Tahlilgaran System Zagros</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">December 2024 - Now</div>
						</div>

						<div className="work">
							<img
								src="https://img.icons8.com/?size=100&id=64238&format=png&color=000000"
								className="work-image"
							/>
							<div className="work-title">Freelance Software Developer</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">June 2018 - Now</div>
						</div>

						<div className="work">
							<img
								src={lionLogo}
								className="work-image"
							/>
							<div className="work-title">Lion Computer</div>
							<div className="work-subtitle">
								Technical Support Engineer
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

						<div className="work">
							<img
								src={jahadLogo}
								className="work-image"
							/>
							<div className="work-title">Jahad Institude</div>
							<div className="work-subtitle">
								Programming tutor
							</div>
							<div className="work-duration">June 2018 - August 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
