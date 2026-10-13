
const projects = [
    {
        title: "Pilgrim of Navia",
        image: "images/PilgrimOfNavia.png",
        alt: "Screenshot from Pilgrim of Navia",
        description: "Created the original concept, design documentation and levels, prototyped ideas, and integrated programmer-built Unity systems into gameplay. Developed in iterative sprints by a small student research club team, this ongoing project is a PS2-inspired survival horror immersive sim.",
        tools: ["Unity", "Game Design", "Level Design", "Narrative Design", "Direction", "Prefabs", "Sprints"],
        link: "https://drive.google.com/file/d/1A0jhvjd8nnwuqSncXz3XRprgfMB_hoCm/view?usp=drive_link"
    },
    {
        title: "DreamDeck",
        image: "images/DreamDeck.png",
        alt: "Screenshot from DreamDeck",
        description: "A narrative-driven card adventure for Cyberiada 2024/2025, following Lucy as grief and fear blur the line between dreams and reality. I developed the narrative concept, script and dialogue, using unreliable narration and linking card-combination battles with storytelling to reveal hidden layers of Lucy’s story through symbolic synergies and clues.",
        tools: ["Narrative Design", "Game Design", "Writing", "Scriptwriting "],
        link: "https://fellow-gamedecs.itch.io/dreamdeck"
    },
    {
        title: "Project N-O-L",
        image: "images/NOL.png",
        alt: "Screenshot from Project N-O-L",
        description: "Created during a week-long game jam, this quirky investigative game follows a UFO fanatic in communist-era Poland, searching newspaper clippings, radio broadcasts and TV signals for clues to summon aliens using bizarre equipment. I led creative direction, designed the narrative and gameplay, and implemented animations, graphics and ending logic in Unity.",
        tools: ["Unity", "Game Design", "Narrative Design", "Writing"],
        link: "https://antonver.itch.io/project-n-o-l"
    },
    {
        title: "FunGone",
        image: "images/FunGone.png",
        alt: "Screenshot from FunGone",
        description: "A cosy mushroom-gardening strategy game created during a week-long game jam. I built its world, wrote short-form humorous dialogue, and designed grid-based roguelite mushroom mechanics focused on synergies and resource management.",
        tools: ["Game Design", "Writing", "Level Design"],
        link: "https://antonver.itch.io/fungone"
    },
    {
        title: "Operation... What?!",
        image: "images/OperacjaCzego.png",
        alt: "Screenshot from Operation... What?!",
        description: "A cyberpunk surgery simulator created for the Cyberiada 2025 final game jam (24h), a game made to raise awareness of Alzheimer’s disease. I wrote the scenario and dialogue, exploring memory loss and its impact on personal identity of the main character.",
        tools: ["Narrative Design", "Storytelling"],
        link: "https://fellow-gamedecs.itch.io/operacja-czego"
    },
    {
        title: "Soplicowo Summer Diaries",
        image: "images/Tadek.png",
        alt: "Screenshot from Tadek",
        description: "A unique cooperative dating simulator based on the classic Polish epic ''Pan Tadeusz''. I wrote dialogues, adapted classical characters to a new media, and designed whole narrative structurre behind it.",
        tools: ["Narrative Design", "Storytelling, Dialogue Writing, Documentation Writing"],
        link: "https://www.youtube.com/watch?v=xUlZ1ocaIwQ"
    }
];

const projectList = document.getElementById("project-list");

if (!projectList) {
    console.error('Projects error: no element with id="project-list". Check index.html.');
} else {
    projectList.innerHTML = "";

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";

        const toolsHTML = project.tools
            .map(tool => `<span class="tool">${tool}</span>`)
            .join(", ");

        card.innerHTML = `
            <img src="${project.image}" alt="${project.alt}">
            <h3>${project.title}</h3>
            <p class="tools"><strong>Tools:</strong> ${toolsHTML}</p>
            <p>${project.description}</p>
            <a class="btn" href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
        `;

        const projectImage = card.querySelector("img");
        projectImage.addEventListener("error", () => {
            console.error("Could not load project image:", project.image);
        });

        projectList.appendChild(card);
    });
}