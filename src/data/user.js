import { css } from "styled-components";
import AllProjects from "../components/projects/allProjects";

import javascriptLogo from "./javascript.png"
import pythonLogo from "./python.png";
import djangoLogo from "./django.png";
import sqlServerLogo from "./sqlServer.png";
import cSharpLogo from "./csharp.png";
import dotnetCoreLogo from "./dotnet.png";
import jqueryLogo from "./jquery.webp";
import htmlLogo from "./html.png";
import bootstrapLogo from "./bootstrap.png";
import reactLogo from "./react.webp";
import cssLogo from "./css.webp";
import postmanLogo from "./postman.png";
import cppLogo from "./cpp.png";
import restApi from "./restapi.png";
import wpf from "./wpf.png";
import netMVC from "./netMVC.jpg";
import pineScript from "./pineScript.png";
import unity from "./unity.svg";
import requests from "./Requests-logo.png";
import deeplearning from "./deeplearning.jpg";
import kivy from "./kivy.png";
import pandas from "./pandas.png";
import flask from "./flask.png";
import sqlite from "./sqlite.webp";
import azure from "./microsoft-azure@2x.png";
import github from "./github.png";
import git from "./Git-logo.svg.png";
import msTest from "./ms_test.png";

const workplaceLink = "'https://iranestekhdam.ir/company/ogr4tm-tahlilgaran'";

const INFO = {
	main: {
		title: "Ali Karimpour",
		name: "Ali Karimpour",
		email: "mynameisaalli@gmail.com",
		logo: "../fdg.jpg",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/aalligithub",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/aalli_k",
		stackoverflow: "https://stackoverflow.com/users/11687785/ali-karimpour?tab=profile",
		facebook: "https://facebook.com/",
		telegram: "https://t.me/AALLIGRAM",
	},

	homepage: {
		title: "Software Engineer | Backend Developer | Database Administrator",
		description:
		  "I am a versatile software engineer specializing in backend development, database design, and large-scale enterprise software. With experience in cutting-edge technologies like LLMs and a passion for solving complex problems, I deliver robust and scalable solutions. If it's software-related, I can do it—and I can do it well.",
	  },

	about: {
		title: "I’m Ali Karimpour",
		description: "Throughout my career, I've had the opportunity to work on impactful, enterprise-level projects that operate at a national scale and are used by thousands daily. My contributions span database management, scalability enhancements, and system maintenance, ensuring these projects run smoothly and efficiently. Beyond my professional work, I enjoy taking on freelance projects and building personal tools, which allow me to explore new technologies and solve unique challenges.",
		workplaceText: "I currently work fulltime at ",
		workplaceLink: <a href={workplaceLink}>Tahlilgaran System Zagros</a>,
	},

	projects: [
		{
			title: "Samab",
			description:
			"Samab is a large-scale enterprise software system designed to manage and optimize the nation's water resources. Since its launch in 2002, it has been instrumental in streamlining water source protection, resource utilization, and customer management for millions of users across the country. Developed and maintained core features to ensure seamless operation at a national scale. Optimized database performance and scalability to handle large datasets and high user traffic. Implemented user-friendly interfaces and robust backend systems for efficient resource management.",
			logos:[
				dotnetCoreLogo,
				sqlServerLogo,
				jqueryLogo,
				javascriptLogo,
				bootstrapLogo,
				htmlLogo,
			],
			linkText: "View Project",
			link: "https://samab.znrw.ir/",
		},

		{
			title: "Hafari",
			description:
				"A nationwide enterprise software solution designed to manage excavation permits and oversee associated companies. This system ensures compliance with regulations, streamlines permit issuance, and enhances oversight of excavation activities across the country.",
			logos: [
				dotnetCoreLogo,
				sqlServerLogo,
				javascriptLogo,
				bootstrapLogo,
				htmlLogo,
				restApi,
			],
			linkText: "View Project",
			link: "",
		},

		{
			title: "E Samab",
			description:
				"The National Business Licensing Portal is an internet platform managed by the Secretariat of the Regulatory Reform and Business Environment Improvement Council. It provides transparent and accessible information about licensing requirements, prerequisites, costs, and processing times for all businesses in the country. My Role Developed and maintained the module related to water source management, ensuring compliance with national regulations. Designed and implemented features to streamline the issuance of water-related business permits.",
			logos: [
				cSharpLogo,
				postmanLogo,
				restApi,
			],
			linkText: "View Project",
			link: "https://des.wrm.ir/Entrances/EntranceAll",
		},

		{
			title: "Many More Projects...",
			description:
				"Other than these projects I have worked on many more projects from small to large scale, learn more about my experiences in About",
			logos: [
				djangoLogo,
				pythonLogo,
				reactLogo,
				cssLogo,
				cppLogo,
			],
			linkText: "About",
			link: "/About",
		},
	],

	skills: [
	{		
		name: "C#, .NET Core, .NET Webforms, .Net MVC, WPF, Unity Game Engine and more",
		image: [cSharpLogo, dotnetCoreLogo, wpf, netMVC, sqlServerLogo, unity],
		description:
		  "Proficient in building enterprise-level applications using C# and the .NET ecosystem. I have extensive experience in backend development, API integrations, Windows-based applications, and game development using Unity. My work includes scalable solutions, database integrations, and performance optimization.",
		proficiencyPercentage: "88%",
		proficiency: "Advanced",
	},

	{
		name: "Python. Django, RESTful API, Requests, AI, Webservices and more",
		image: [pythonLogo, djangoLogo, restApi, requests, deeplearning, pandas, flask, kivy, sqlite, postmanLogo],
		description:
		  "Experienced in developing scalable web applications using Django and Python. I have built RESTful APIs, microservices, and AI-driven solutions, including data normalization and model training. My expertise also includes creating custom tools and integrating third-party APIs for seamless functionality.",
		proficiencyPercentage: "80%",
		proficiency: "Advanced",
	},

	{
		name: "Web development, UI desing, Backend integrations and more",
		image: [javascriptLogo, htmlLogo, cssLogo, reactLogo, jqueryLogo, bootstrapLogo,],
		description:
			"Skilled in creating modern, responsive, and user-friendly web interfaces. I specialize in frontend development using React, JavaScript, and Bootstrap, as well as backend integrations to ensure seamless functionality. My focus is on delivering intuitive and visually appealing designs that enhance user experience.",
		proficiencyPercentage: "72%",
		proficiency: "Advanced",
	},

	{
		name: "Version Control and Software Testing",
		image: [azure, git, github, msTest],
		description:
			"Experienced in version control systems like Git and GitHub, as well as Azure DevOps for collaborative development and CI/CD pipelines. Proficient in test-oriented development, including writing unit tests, integration tests, and automated testing frameworks to ensure code quality and reliability. My expertise includes maintaining robust version control workflows and implementing best practices for software testing.",
		proficiencyPercentage: "90%",
		proficiency: "Advanced",
	},

	{
		name: "Custom solutions, whatever you might need",
		image: [pineScript, cppLogo,],
		description:
			"If you need development for niche technologies like Pine Script or custom software solutions, I’m your go-to developer. I thrive on solving unique challenges and delivering tailored solutions that meet specific business requirements.",
		proficiencyPercentage: "100%",
		proficiency: "Advanced",
	},
   ],
};

export default INFO;
