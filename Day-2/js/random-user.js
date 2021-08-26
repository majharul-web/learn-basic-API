const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

const displayBuddies = (data) => {
    const buddies = data.results;
    const buddiesContainer = document.getElementById('container');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name Is:${buddy.name.title}  ${buddy.name.first}  ${buddy.name.last}
        Email:${buddy.email}

        `;
        buddiesContainer.appendChild(p)

    }

}