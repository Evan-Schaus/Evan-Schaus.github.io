
function addHeaders() {
    var head = document.getElementsByTagName('head')[0];
    var link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = '../../components/nav/nav.css';
    head.appendChild(link1);

    var link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = '../../all/all.css';
    head.appendChild(link2);
}

function addNav() {

    var script = document.createElement('script');
    script.innerHTML = 'function openNav() {\n' +
        '    document.getElementById("mySidenav").style.width = "250px";\n' +
        '}\n' +
        'function closeNav() {\n' +
        '    document.getElementById("mySidenav").style.width = "0";\n' +
        '}';
    document.body.appendChild(script);

    var nav = document.createElement('div');
    nav.id = "mySidenav";
    nav.className = "sidenav";
    nav.innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                      <a href="javascript:void(0)" onclick="window.routeTo('home')">Home</a>
                      <a href="javascript:void(0)" onclick="window.routeTo('projects')">Projects</a>
                      <a href="javascript:void(0)" onclick="window.routeTo('about')">About</a>
                      <a href="javascript:void(0)" onclick="window.routeTo('contact')">Contact</a>`;
    document.body.appendChild(nav);

    var openButton = document.createElement('span');
    openButton.style.fontSize = "30px";
    openButton.style.cursor = "pointer";
    openButton.style.position = "absolute";
    openButton.style.top = "2vh";
    openButton.style.left = "2vh";
    openButton.onclick = openNav;
    openButton.innerHTML = '&#9776;';
    document.body.appendChild(openButton);

}

window.routeTo =  function(route) {
    window.location.replace(`/pages/${route}/${route}.html`);
}


function onload() {
    addHeaders();
    addNav();
}
onload();