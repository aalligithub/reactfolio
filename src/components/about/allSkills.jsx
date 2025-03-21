import React from "react";

import Skill from "./skill";

import INFO from "../../data/user";

// import "./styles/allskill.css";

const AllSkills = () => {
	return (
		<div className="all-skill-container">
			{INFO.skills.map((skill, index) => (
				<div className="all-skills-skill" key={index}>
					<Skill
						image={skill.image}
						name={skill.name}
						description={skill.description}
						proficency={skill.proficiency}
						proficiencyPercentage={skill.proficiencyPercentage}
					/>
				</div>
			))}
		</div>
	);
};

export default AllSkills;
