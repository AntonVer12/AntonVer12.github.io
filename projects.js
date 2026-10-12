
const projects = [
    {
        title: "Pilgrim of Navia",
        image: "images/PilgrimOfNavia.png",
        alt: "Screenshot from Pilgrim of Navia",
        description: "Created the original concept and creative vision, wrote design documentation and dialogue, designed levels, prototyped ideas, and integrated gameplay systems in Unity.",
        tools: ["Unity", "Game Design", "Level Design", "Narrative Design"],
        link: "https://drive.google.com/file/d/1A0jhvjd8nnwuqSncXz3XRprgfMB_hoCm/view?usp=drive_link"
    },
    {
        title: "DreamDeck",
        image: "images/DreamDeck.png",
        alt: "Screenshot from DreamDeck",
        description: "Developed the narrative concept and script, wrote dialogue, and connected storytelling with card-based gameplay.",
        tools: ["Narrative Design", "Game Design", "Writing"],
        link: "https://fellow-gamedecs.itch.io/dreamdeck"
    },
    {
        title: "Project N-O-L",
        image: "images/NOL.png",
        alt: "Screenshot from Project N-O-L",
        description: "Led creative direction and designed the narrative and gameplay. Implemented animations, graphics, and ending logic in Unity.",
        tools: ["Unity", "Game Design", "Narrative Design"],
        link: "https://antonver.itch.io/project-n-o-l"
    },
    {
        title: "FunGone",
        image: "images/FunGone.png",
        alt: "Screenshot from FunGone",
        description: "A cosy mushroom-gardening strategy game built around resource management, mushroom synergies, and adapting to changing conditions.",
        tools: ["Game Design", "Strategy"],
        link: "https://antonver.itch.io/fungone"
    },
    {
        title: "Operation... What?!",
        image: "images/OperacjaCzego.png",
        alt: "Screenshot from Operation... What?!",
        description: "A cyberpunk surgery simulator created for the Cyberiada 2025 final game jam (24h) to raise awareness of Alzheimer’s disease. I wrote the scenario and dialogue, exploring memory loss and its impact on personal identity.",
        tools: ["Narrative Design", "Storytelling"],
        link: "https://fellow-gamedecs.itch.io/operacja-czego"
    },
    {
        title: "Soplicowo's Diaries",
        image: "images/Tadek.png",
        alt: "Screenshot from Tadek",
        description: "A unique cooperative dating simulator based on the classic Polish epic ''Pan Tadeusz''. I Wrote dialogues, adapted classical characters to a new media, and designed whole narrative structurre behind it",
        tools: ["Narrative Design", "Storytelling, Dialogue Writing, Documentation Writing"],
        link: "https://fellow-gamedecs.itch.io/operacja-czego"
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