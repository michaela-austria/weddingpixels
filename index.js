const data = {
    team: [
        {
            id: 1,
            name: "Ken Dizon",
            position: "Senior Photographer",
            img: "img/team-ken.png"
        },
        {
            id: 2,
            name: "Carl Espiritu",
            position: "Senior Videographer",
            img: "img/team-carl.png"
        },
        {
            id: 3,
            name: "Sofia Ingson",
            position: "Senior Photo Editor",
            img: "img/team-sofia.png"
        },
        {
            id: 4,
            name: "Nick Corpuz",
            position: "Senior Video Editor",
            img: "img/team-nick.png"
        },
        {
            id: 5,
            name: "Rio Padilla",
            position: "Photographer",
            img: "img/team-rio.png"
        },
        {
            id: 6,
            name: "Sean De Leon",
            position: "Videographer",
            img: "img/team-sean.png"
        }
    ],

    features: [
        {
            id: 1,
            header: "Traditional/classic",
            desc: "Typically staged, formal pictures shot up close. This style has a timeless aesthetic.",
            img: "img/svg/traditional.svg" 
        },
        {
            id: 2,
            header: "Photojournalistic",
            desc: "Candid pictures gives the impression that you are watching the event unfold. This allows to see everyone's true emotions on their faces.",
            img: "img/svg/photojournalistic.svg" 
        },
        {
            id: 3,
            header: "Editorial",
            desc: "Ability to use props, encourage natural interactions, and see the couple bloom in front of the camera.",
            img: "img/svg/editorial.svg" 
        },
        {
            id: 4,
            header: "Dark and moody",
            desc: "The use of light to create drama in photos. It’s a cinematic style of wedding photography.",
            img: "img/svg/dark-and-moody.svg" 
        },
        {
            id: 5,
            header: "Vintage",
            desc: "The use of a film camera, special filters that attach to a digital camera’s lens, and post-production processes in the edit.",
            img: "img/svg/vintage.svg" 
        },
        {
            id: 6,
            header: "Landscape",
            desc: "A wonderful option, especially for nature lovers, this photo style requires a location scout.",
            img: "img/svg/landscape.svg" 
        }
    ],

    packages: [
        {
            id: 1,
            name: "The Essential",
            features: ["30 minute on Location Session",
                        "10 Digital Images",
                        "Professional Photo and Video Editing",
                        "Online gallery",
                        "Add-ons available"],
            img: "img/package-essential.png"
        },
        {
            id: 2,
            name: "The Keepsake",
            features: ["45 minute on Location Session",
                        "15 Digital Images",
                        "Professional Photo and Video Editing",
                        "Online gallery",
                        "Add-ons available"],
            img: "img/package-keepsake.png"
        },
        {
            id: 3,
            name: "The Heirloom",
            features: ["1 hour on Location Session",
                        "25 Digital Images",
                        "Professional Photo and Video Editing",
                        "Online gallery",
                        "Add-ons available"],
            img: "img/package-heirloom.png"
        }
    ]
}


const teamListContainer = document.querySelector(".team__list");
const teamData = data.team;

const featuresContainer = document.querySelector(".features");
const featureData = data.features;

const packagesContainer = document.querySelector(".packages");
const packagesData = data.packages;

const teamListLoad = function(){
    teamData.forEach(member => {
        const markup = `
        <div class="team__info">
            <img src="${member.img}" alt="team-${member.name}" class="team__img">
            <div class="team__details">
                <p class="team__name">${member.name}</p>
                <p class="team__position">${member.position}</p>
            </div>
        </div>
    `;
        teamListContainer.insertAdjacentHTML('beforeend', markup);
    })

}


const featuresDataLoad = function(){
    featureData.forEach(feature => {
        const markup = `
            <div class="features__container">
                <div class="features__icon">
                    <img src="${feature.img}" alt="${feature.header}">
                </div>
                
                <p class="features__name">${feature.header}</p>
                <p class="features__desc"> ${feature.desc}  </p>
                
            </div>
        `;

        featuresContainer.insertAdjacentHTML("beforeend", markup);
    })
}


const packagesDataLoad = function(){
    packagesData.forEach((package, i) => {
        const list = package.features.map((feature => `<li class="packages__list">${feature}</li>`));
        const markup = `
            <div class="packages__container">
                <img src="${package.img}" alt="package-${package.name}" class="packages__img">
                <h5 class="packages__name">${package.name}</h5>
                <ol class="packages__details">
                    ${list.join("")}
                </ol>
                <button class="btn packages__btn">Get this Package</button>
            </div>
        `;

        packagesContainer.insertAdjacentHTML("beforeend", markup);
    })
}



teamListLoad();
featuresDataLoad();
packagesDataLoad();



const dynamicYear = document.querySelector(".dynamicYear");
const currDate = new Date();
dynamicYear.textContent = currDate.getFullYear();