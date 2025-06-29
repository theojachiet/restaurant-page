import './style.css';
console.log('here');

const content = document.querySelector('.content');

function displayHome() {
    const homeTitle = document.createElement('h2');
    const homeParagraph = document.createElement('p');

    homeParagraph.classList.add('home');
    homeTitle.classList.add('home');
    homeTitle.innerHTML = 'Le <strong>meilleur</strong> restaurant <strong>quantique</strong> du secteur <strong>tellurique</strong>';
    homeParagraph.innerHTML = "Alignez vos chakras dans cet espace anti 5g et ouvert aux tachyons positifs. <br>Jamais manger n'a été aussi cosmique";

    content.appendChild(homeTitle);
    content.appendChild(homeParagraph);
}

function displayMenu() {
    const menuTitle = document.createElement('h2');
    const menuList = document.createElement('ul');
    menuTitle.classList.add('menu');
    menuList.classList.add('menu');

    menuTitle.textContent = 'NOS MENUS COSMO-GEODESIQUES';

    //ITEM 1
    const item1 = document.createElement('li');
    const item1Title = document.createElement('p');
    const item1Content = document.createElement('p');

    item1Title.classList.add('menu-title');
    item1Content.classList.add('menu-content');
    item1Title.textContent = 'Burger Effondré - 50€';
    item1Content.textContent = "Le burger existe seulement si tu l'observe et restera froid tout le temps";

    item1.appendChild(item1Title);
    item1.appendChild(item1Content);
    menuList.appendChild(item1);

    //ITEM 2
    const item2 = document.createElement('li');
    const item2Title = document.createElement('p');
    const item2Content = document.createElement('p');

    item2Title.classList.add('menu-title');
    item2Content.classList.add('menu-content');
    item2Title.textContent = 'Spaghetti Intriqués - 50€';
    item2Content.textContent = "Chaque nouille est liée à une autre dans l'assiette ou ailleurs dans le monde";

    item2.appendChild(item2Title);
    item2.appendChild(item2Content);
    menuList.appendChild(item2);

    //ITEM 3
    const item3 = document.createElement('li');
    const item3Title = document.createElement('p');
    const item3Content = document.createElement('p');

    item3Title.classList.add('menu-title');
    item3Content.classList.add('menu-content');
    item3Title.textContent = 'Soupe probable - 50€';
    item3Content.textContent = "Contient peut-être des champignons, peut-être des courgettes ou un concept de courgettes";

    item3.appendChild(item3Title);
    item3.appendChild(item3Content);
    menuList.appendChild(item3);

    //ITEM 4
    const item4 = document.createElement('li');
    const item4Title = document.createElement('p');
    const item4Content = document.createElement('p');

    item4Title.classList.add('menu-title');
    item4Content.classList.add('menu-content');
    item4Title.textContent = 'Entrecôte de Schrödinger - 50€';
    item4Content.textContent = "A la fois saignante, à point et vegan";

    item4.appendChild(item4Title);
    item4.appendChild(item4Content);
    menuList.appendChild(item4);

    //ITEM 5
    const item5 = document.createElement('li');
    const item5Title = document.createElement('p');
    const item5Content = document.createElement('p');

    item5Title.classList.add('menu-title');
    item5Content.classList.add('menu-content');
    item5Title.textContent = 'Entrecôte de Schrödinger - 50€';
    item5Content.textContent = "A la fois saignante, à point et vegan";

    item5.appendChild(item5Title);
    item5.appendChild(item5Content);
    menuList.appendChild(item5);

    // FINAL APPEND
    content.appendChild(menuTitle);
    content.appendChild(menuList);
    console.log('here');
}

// displayHome();
// displayMenu();