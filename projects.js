const projects = [
    {
        title: "\"Ciach\"",
        image: "images/Ciach.png",
        alt: "Screenshot from the game \"Ciach\"",
        description: "Immersive VR sword-fighting game featuring responsive controls and realistic enemy AI based on real defensive techniques.",
        tools: ["Unity", "C#", "VR"],
        //  link: "project-bike.html"
        link: "https://www.youtube.com/watch?v=tB2oVVKE90A"
    },
    {
        title: "Heroes Project",
        image: "images/HeroesProject.jpg",
        alt: "Screenshot from the game Heroes Project",
        description: "A turn-based strategy game inspired by Heroes of Might and Magic 3. Tough choices, short and long term consequences.",
        tools: ["Unity", "C#"],
        //  link: "project-bike.html"
        link: "https://store.steampowered.com/app/2522830/Heroes_Project"
    },
  {
    title: "Fortune Guesser",
    image: "images/tarotgame.png",
	  alt: "Screenshot from the game Fortune Guesser",
    description: "Narrative-driven prototype featuring quirky hand-drawn characters, branching paths, and multiple endings.",
	  tools: ["Unity","C#", "Blender", "Trello"],
//  link: "project-tarot.html"
	  link: "https://zachpetty.itch.io/fortune-guesser"
  },
    {
        title: "\"Bike Game\"",
        image: "images/bikegame.png",
        alt: "Screenshot from the game \"Bike Game\"",
        description: "A fast-paced, horror-themed mountain biking game prototype created for Serenity Forge through the RealXP Lab program.",
        tools: ["Unity", "C#", "Notion"],
        //  link: "project-bike.html"
        link: "https://youtu.be/q9n3clmma_A"
    },
		{
        title: "NOL",
        image: "images/NOL.png",
        alt: "Screenshot from the game NOL",
        description: "An interactive game about trying to contact UFOs through exploration and environmental interaction. Players find hidden clues to unlock the mystery.",
        tools: ["Unity", "C#", "WebGL"],
        //  link: "project-blackjack.html"
        link: "https://antonver.itch.io/project-n-o-l"
    },
    {
        title: "\"Deadline\"",
        image: "images/U5GamePrototype.png",
        alt: "Screenshot from the U5 Game Prototype",
        description: "A timed puzzle game where you explore once to gather clues, then rush to execute a precise sequence before the clock hits zero to win.",
        tools: ["Unreal Engine", "C++"],
        //  link: "project-bike.html"
        link: "https://www.youtube.com/watch?v=hFi-SDoRxiM"
    },
    {
        title: "Running an internship",
        image: "images/internship.png",
        alt: "Screenshot from the internship",
        description: "I ran a game-development internship where we created two playable prototypes. The practice focused on rapid prototyping, and teamwork.",
        tools: ["Unity", "C#"],
        //  link: "project-bike.html"
        link: "https://gry-eti.itch.io"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  const toolsHTML = project.tools.map(tool => `<span class="tool">${tool}</span>`).join(", ");
  card.innerHTML = `
    <img src="${project.image}" alt="${project.alt}">
    <h3>${project.title}</h3>
	<p class="tools"><strong>Tools:</strong> ${toolsHTML}</p>
    <p>${project.description}</p>
    <a class="btn" href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
  `;
  projectList.appendChild(card);
});
