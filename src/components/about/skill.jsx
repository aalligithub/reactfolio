import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/skill.css";

const Skill = (props) => { 		
    const { name, image, description, proficiency} = props;

    const proficiencyPercentage = {
        Beginner: '33%',
        Intermediate: '66%',
        Advanced: '100%',
      }[proficiency];
    

    return (
        <React.Fragment>
            <div className="skill-card">
                <div className="skill-logo">
                    <img src={image} alt={`logo-${name}`} className="logo-image" />
                </div>
                <h3 className="skill-title">{name}</h3>
                <p className="skill-description">{description}</p>
                <div className="skill-proficiency">
                    <div className="proficiency-bar">
                    <div
                        className="proficiency-level"
                        style={{ width: proficiencyPercentage }}
                    ></div>
                    </div>
                    <span className="proficiency-label">{proficiency}</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Skill;