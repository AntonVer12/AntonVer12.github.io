const projects = [
    {
        title: "Pilgrim of Navia",
        image: "images/PilgrimOfNavia.png",
        video: "videos/PilgrimOfNavia.mp4",
        alt: "Screenshot from Pilgrim of Navia",
        duration: "9 months",
        role: "Lead Designer & Producer",
        description: "A PS2-inspired survival horror immersive sim in a Slavic world. Led a student team in Scrum, built levels from paper through blockout to lightning, and directed creative vision.",
        link: "https://drive.google.com/file/d/1A0jhvjd8nnwuqSncXz3XRprgfMB_hoCm/view?usp=drive_link",
        socials: "https://www.instagram.com/hollowwoodgames/"
    },
    {
        title: "Soplicowo Summer Diaries",
        image: "images/Tadek.png",
        video: "videos/Tadek.mp4",
        alt: "Screenshot from Soplicowo Summer Diaries",
        duration: "5 months",
        role: "Game/Narrative Designer & Writer",
        description: "A co-op dating sim adapted from Pan Tadeusz. Wrote dialogues, structured narrative flow, conducted deep historical and literary research, and maintained detailed documentation",
        link: "https://www.youtube.com/watch?v=xUlZ1ocaIwQ",
        caseStudy: "projects/soplicowo-summer-diaries/index.html"
    },
    {
        title: "Project N-O-L",
        image: "images/NOL.png",
        video: "videos/NOL.mp4",
        alt: "Screenshot from Project N-O-L",
        duration: "7 days",
        role: "Game/Narrative Designer & Writer",
        description: "An investigative jam game set in communist Poland. Led creative direction, designed interior and mechanics, world, and created with custom animations in Unity.",
        link: "https://antonver.itch.io/project-n-o-l",
        caseStudy: "projects/project-n-o-l/index.html"
    },
    {
        title: "FunGone",
        image: "images/FunGone.png",
        video: "videos/FunGone.mp4",
        alt: "Screenshot from FunGone",
        duration: "7 days",
        role: "Game/Narrative Designer & Writer",
        description: "A cosy mushroom-gardening strategy game. Built world lore, wrote humorous dialogue, designed level layout, and crafted grid-based roguelike mechanics according to the jam's theme, and done some VFX.",
        link: "https://antonver.itch.io/fungone",
        caseStudy: "projects/fungone/index.html"
    },
    {
        title: "DreamDeck",
        image: "images/DreamDeck.png",
        video: "videos/DreamDeck.mp4",
        alt: "Screenshot from DreamDeck",
        duration: "2 months",
        role: "Game/Narrative Designer & Writer",
        description: "A narrative card adventure exploring grief and reality. Wrote script riddled with unreliable narration of main character, and created card synergies with the story progression (Honorable Mention at Cyberiada for narration).",
        link: "https://fellow-gamedecs.itch.io/dreamdeck",
        caseStudy: "projects/dreamdeck/index.html"
    },
    {
        title: "Operation... What?!",
        image: "images/OperacjaCzego.png",
        video: "videos/OperacjaCzego.mp4",
        alt: "Screenshot from Operation... What?!",
        duration: "24 hours",
        role: "Writer & Narrative Designer",
        description: "A cyberpunk surgery simulator raising Alzheimer's awareness. Wrote scenario and dialogue focusing on personal identity and memory loss.",
        link: "https://fellow-gamedecs.itch.io/operacja-czego",
        caseStudy: "projects/operation-what/index.html"
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

        let secondaryButtonHTML = '';
        if (project.caseStudy) {
            secondaryButtonHTML = `
                <a class="btn-secondary" href="${project.caseStudy}">
                    Design Process &rarr;
                </a>
            `;
        } else if (project.socials) {
            secondaryButtonHTML = `
                <a class="btn-secondary" href="${project.socials}" target="_blank" rel="noopener noreferrer">
                    Socials &rarr;
                </a>
            `;
        }

        const videoHTML = project.video ? `
            <video class="project-media project-video" loop muted playsinline preload="none">
                <source src="${project.video}" type="video/mp4">
            </video>
        ` : '';

        card.innerHTML = `
            <div class="project-media-wrapper">
                <img class="project-media project-image" src="${project.image}" alt="${project.alt}">
                ${videoHTML}
            </div>
            <div class="project-title-area">
                <h3>${project.title}</h3>
                <span class="project-duration">${project.duration}</span>
            </div>
            <p class="project-role"><strong>Role:</strong> ${project.role}</p>
            <p class="project-desc">${project.description}</p>

            <div class="project-links">
                <a class="btn-primary"
                   href="${project.link}"
                   target="_blank"
                   rel="noopener noreferrer">
                    View Project
                </a>
                ${secondaryButtonHTML}
            </div>
        `;

        const videoElement = card.querySelector(".project-video");

        if (videoElement) {
            card.addEventListener("mouseenter", () => {
                videoElement.play().catch(err => console.log("Auto-play prevented:", err));
            });

            card.addEventListener("mouseleave", () => {
                videoElement.pause();
                videoElement.currentTime = 0;
            });
        }

        projectList.appendChild(card);
    });
}