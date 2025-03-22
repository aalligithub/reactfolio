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
		name: "C#",
		image: cSharpLogo,
		description:
		  "Proficient in building enterprise-level applications using C#. I've used it extensively for backend development, API integrations, and Windows-based applications.",
		proficiencyPercentage: "54%",
		proficiency: "Advanced",
	},

	{
		name: ".NET Core",
		image: dotnetCoreLogo,
		description:
		  "Experienced in developing scalable and high-performance web applications using .NET Core. I've worked on RESTful APIs, microservices, and database integrations.",
		proficiencyPercentage: "12%",
		proficiency: "Advanced",
	  },
	],
};

export default INFO;
