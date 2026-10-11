const projects = [
{
title: "Pilgrim of Navia",
image: "images/PilgrimOfNavia.png",
alt: "Screenshot from Pilgrim of Navia",
description: "Created the original concept and creative vision, wrote design documentation and dialogue, designed levels, prototyped ideas, and integrated gameplay systems in Unity.",
tools: ["Unity", "Game Design", "Level Design", "Narrative Design"],
link: "https://YOUR-PILGRIM-LINK"
},
{
title: "DreamDeck",
image: "images/DreamDeck.png",
alt: "Screenshot from DreamDeck",
description: "Developed the narrative concept and script, wrote dialogue, and shaped the narrative tone while connecting storytelling with card-based gameplay.",
tools: ["Narrative Design", "Game Design", "Writing"],
link: "https://YOUR-DREAMDECK-LINK"
},
{
title: "Project N-O-L",
image: "images/NOL.png",
alt: "Screenshot from Project N-O-L",
description: "Led creative direction and designed the narrative and gameplay. Implemented animations, graphics, and ending logic in Unity.",
tools: ["Unity", "Game Design", "Narrative Design", "Creative Direction"],
link: "https://antonver.itch.io/project-n-o-l"
},
{
title: "FunGone",
image: "images/FunGone.png",
alt: "Screenshot from FunGone",
description: "A cosy mushroom-gardening strategy game built around resource management, mushroom synergies, and adapting to changing conditions.",
tools: ["Game Jam", "Strategy Design", "Game Design"],
link: "https://antonver.itch.io/fungone"
},
{
title: "Operation... What?!",
image: "images/OperacjaCzego.png",
alt: "Screenshot from Operation... What?!",
description: "A cyberpunk surgery simulator exploring Alzheimer's disease, memory loss, and identity. Contributed to a narrative about a person gradually losing their memories.",
tools: ["Narrative Design", "Storytelling"],
link: "https://fellow-gamedecs.itch.io/operacja-czego"
}
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
const card = document.createElement("div");
card.className = "project-card";

```
const toolsHTML = project.tools
    .map(tool => `<span class="tool">${tool}</span>`)
    .join(", ");

card.innerHTML = `
    <img src="${project.image}" alt="${project.alt}">
    <h3>${project.title}</h3>
    <p class="tools"><strong>Focus:</strong> ${toolsHTML}</p>
    <p>${project.description}</p>
    <a class="btn" href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
`;

projectList.appendChild(card);
```

});
