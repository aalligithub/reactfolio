import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/skill.css";

const Skill = (props) => { 		
    const { name, image, description, proficiency, proficiencyPercentage} = props;

    return (
        <React.Fragment>
            <div className="skill-card">
                <div className="skill-logo">
                    {image.map((image, index) => (
                        <img src={image} alt={`logo-${index}`} className="logo-image" key={index}
                          style={{
                            width: "70px",
                            height: "auto",
                            padding: "5px",
                            filter: "drop-shadow(1px 1.5px 3px rgb(160, 160, 160))", // Corrected syntax
                          }}/>
                    ))}
                </div>
                <h3 className="skill-title">{name}</h3>
                <p className="skill-description">{description}</p>
                <p>{proficiencyPercentage}</p>
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