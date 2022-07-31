// Changes navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    openBtn.style.display = "none";
})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block";
})

// switch theme
const getStyle = (element, style) => 
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const root = document.querySelector(':root');
const switcher = document.querySelector(".theme__switch");
const themeIcon = document.querySelector(".theme-icon");

const initialColors = {
    colorBg: getStyle(root, "--color-bg"),
    colorLight: getStyle(root, "--color-light"),
    colorWhite: getStyle(root, "--color-white"),
    colorBlack: getStyle(root, "--color-black")
}

const darkMode = {
    colorBg: "#212121",
    colorLight: "#414141",
    colorWhite: "#121212",
    colorBlack: "#FFF"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        root.style.setProperty(transformKey(key), colors[key])
    )
}

const clearThemeIcon = () => {
    themeIcon.className = "";
    themeIcon.classList.add('uil', 'theme-icon');
}

let isDark = false;

window.onload = () => {
    if (localStorage.theme) {
        clearThemeIcon();
        themeIcon.classList.add(localStorage.icon);
        var theme = localStorage.theme
        switch (theme) {
            case 'dark':
                changeColors(darkMode);
                isDark = true;
                break;
            case 'initial':
                changeColors(initialColors);
                isDark = false;
                break;
            default:
                changeColors(initialColors);
                break;
        }
    }
    loadTableData(tableData)
}

const changeTheme = () => {
    isDark = !isDark;
    clearThemeIcon();
    if (isDark) {
        themeIcon.classList.add('uil-moon');
        changeColors(darkMode);
        localStorage.setItem('icon', 'uil-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.add('uil-sun');
        changeColors(initialColors);
        localStorage.setItem('icon', 'uil-sun');
        localStorage.setItem('theme', 'inital');
    }
}

switcher.addEventListener('click', () => {
    changeTheme();
})


// show/hide secret cmd 
const cmd = document.querySelector(".secret__cmd");
const secretBtn = document.getElementById("secret");
const cmdText = document.getElementById("auto-type");
const devs = document.querySelector(".secret__devs");

var messageArray = [`C:\\Users\\3DS\\2022> <span class="cmd__cd">cd Desenvolvedores</span> \nC:\\Users\\3DS\\2022\\Desenvolvedores>`];
var textPosition = 0;
var speed = 80;

function typewriter() {
    cmdText.innerHTML = messageArray[0].substring(0, textPosition) + `<span class="blinker">_</span>`;

    if (textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    } else {
        devs.style.display = "flex";
    }
}

secretBtn.addEventListener('click', () => {
    if (cmd.style.display == "none") {
        cmd.style.display = "flex";
        typewriter();
    } else {
        cmd.style.display = "none";
    }
})

// reveal history on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// team table
let sortDirection;
let sortName = false;
let sortRole = false;

let equipeDocente = [
    { name: "ABRAÃO LUZ SILVEIRA", role: "Professor(a)" },
    { name: "ACYLINO LIMA JUNIOR", role: "Professor(a)" },
    { name: "ADALBERTO IZAIAS MOREIRA JUNIOR", role: "Professor(a)" },
    { name: "ALEXANDRA WIENDL NOGUEIRA FERRAROLI", role: "Professor(a)"},
    { name: "ALEXANDRE JOSE SILVA", role: "Professor(a)"},
    { name: "ALEXANDRE JUNQUEIRA", role: "Professor(a)"},
    { name: "ANA CAROLINA BARBOSA ANGELI", role: "Professor(a)"},
    { name: "ANA PAULA BELOTTO", role: "Professor(a)"},
    { name: "ANDRE RODRIGO TIAGO DE CAMPOS BUENO", role: "Professor(a)"},
    { name: "ANDREA SIMOCELLI", role: "Professor(a)"},
    { name: "ANDREAS KOBERLE", role: "Professor(a)"},
    { name: "ANTONIO CARLOS MONTINI ANTONACCI", role: "Professor(a)"},
    { name: "José Carlos Pereira", role: "AUXILIAR DOCENTE ELETROTECNICA"},
    { name: "ANDRE MORAES", role: "AUXILIAR DOCENTE INFORMATICA"},
    { name: "DANIEL NARDIN", role: "AUXILIAR DOCENTE INFORMATICA"},
    { name: "CACILDA MONTEIRO DE OLIVEIRA DELLA SANTINA", role: "Professor(a)"},
    { name: "CARLOS AUGUSTO CRAVEIRO", role: "Professor(a)"},
    { name: "CARLOS EDUARDO POPPI", role: "Professor(a)"},
    { name: "CARLOS RODRIGO GIOMO", role: "Professor(a)"},
    { name: "CÁSSIA OLIVEIRA MAZIERO", role: "Professor(a)"},
    { name: "CECILIA GABRIEL", role: "Professor(a)"},
    { name: "CLAUDIA CRISTINA JUNDI", role: "Professor(a)"},
    { name: "CLAUDIA LIMA TRUZZI PERONDINI", role: "Professor(a)"},
    { name: "CLEUSA APARECIDA DA SILVA ALBUQUERQUE", role: "Professor(a)"},
    { name: "DAVID BARBOSA PERONDINI", role: "Professor(a)"},
    { name: "EDUARDO MARTINHO RODRIGUES", role: "Professor(a)"},
    { name: "ELAINE CRISTINA DE ALMEIDA ZANIN", role: "Professor(a)"},
    { name: "ELIANE CAVALCANTE DA SILVA", role: "Professor(a)"},
    { name: "ELIANE CRISTINA GALLO AQUINO", role: "Professor(a)"},
    { name: "ELISABETH CRISTINA DOMINGUES DE SOUZA MARCHI", role: "Professor(a)"},
    { name: "ELISANGELA LUZ SILVEIRA ALVES DE OLIVEIRA", role: "Professor(a)"},
    { name: "ELOISA HELENA MACEDO WITTER", role: "Professor(a)"},
    { name: "ELISANGELA LUZ SILVEIRA ALVES DE OLIVEIRA", role: "Professor(a)"},
    { name: "ELZA REGINA PACE VERNIER", role: "Professor(a)"},
    { name: "EMERSON RODRIGO BAIÃO", role: "Professor(a)"},
    { name: "EVANDRO CESAR LEBET SCALVI", role: "Professor(a)"},
    { name: "EVERLI APARECIDA CALEFFI CARDOSO", role: "Professor(a)"},
    { name: "FERNANDO BARTHOLOMEU REIS DA SILVA CUNHA", role: "Professor(a)"},
    { name: "FLAVIO ALEXANDRE CAMARGO MANCINI", role: "Professor(a)"},
    { name: "GIULIANO CATELLI", role: "Professor(a)"},
    { name: "GUILHERME ANTONIO BIM COPIANO", role: "Professor(a)"},
    { name: "GUSTAVO ANTONIO VELHO", role: "Professor(a)"},
    { name: "HÉLIO PÍNOLA FILHO", role: "Professor(a)"},
    { name: "ITAILSON DA CUNHA", role: "Professor(a)"},
    { name: "JOÃO DE FREITAS BUENO", role: "Professor(a)"},
    { name: "JOHNNY MALAGODI CIAMBELLI", role: "Professor(a)"},
    { name: "JOSE AMERICO MARSULO", role: "Professor(a)"},
    { name: "JOSE ANGELO APARECIDO VANSAN", role: "Professor(a)"},
    { name: "JOSE FELIPE FERRARESSO JUNIOR", role: "Professor(a)"},
    { name: "JOSE FERNANDO GABRIEL", role: "Professor(a)"},
    { name: "JUÇARA RODRIGUES JORGE FONTANA BASTOS", role: "Professor(a)"},
    { name: "JULIO DE CARVALHO MONTEIRO DE BARROS", role: "Professor(a)"},
    { name: "LARA PRISCILA DOMINGUES CAZOTTO", role: "Professor(a)"},
    { name: "LEANDRA CAMARGO VERDURICO", role: "Professor(a)"},
    { name: "LETÍCIA CAROLINE DE OLIVERIA", role: "Professor(a)"},
    { name: "LIDIANE FARCHI DE PAULA", role: "Professor(a)"},
    { name: "LUCIANA TERESA DIAS CAPPELINI", role: "Professor(a)"},
    { name: "LUCIENE MARIA CASSIA EUGÊNIO", role: "Professor(a)"},
    { name: "LUIS CARLOS OTTE", role: "Professor(a)"},
    { name: "LUIS CARLOS ROMEIRO", role: "Professor(a)"},
    { name: "LUIZ HENRIQUE BELLUCCI PETERLINI", role: "Professor(a)"},
    { name: "MARA LÍGIA PACCE VERNIER BELLIX", role: "Professor(a)"},
    { name: "MARCIA APARECIDA GODOI RONDINI NERY", role: "Professor(a)"},
    { name: "MARIA LUCILDA PULCINELLI", role: "Professor(a)"},
    { name: "MARILDA GUTIERREZ", role: "Professor(a)"},
    { name: "MÁRIO CELSO GROU", role: "Professor(a)"},
    { name: "MAURO FERNANDO ALVES RODRIGUES", role: "Professor(a)"},
    { name: "NEIVALDO LOPES FERNANDES LAPA", role: "Professor(a)"},
    { name: "OSVALDO MATEUS GOMES", role: "Professor(a)"},
    { name: "PATRÍCIA CARLA DOS SANTOS MARTINS", role: "Professor(a)"},
    { name: "PAULA CASSIANO ZANDONÁ DE OLIVEIRA", role: "Professor(a)"},
    { name: "PAULO GUSTAVO DE SIQUEIRA LOPES", role: "Professor(a)"},
    { name: "PAULO HENRIQUE MAZIERO", role: "Professor(a)"},
    { name: "RAFAEL LUIS CAZOTO SEGATO", role: "Professor(a)"},
    { name: "RAFAEL WILLIAM MARQUES", role: "Professor(a)"},
    { name: "RENATA CARNEVALI LUSKO", role: "Professor(a)"},
    { name: "RENATA EUGÊNIA BUENO GONÇALVES", role: "Professor(a)"},
    { name: "RENATO AUGUSTO NASCIMENTO", role: "Professor(a)"},
    { name: "RICARDO CAETANO BERTINI", role: "Professor(a)"},
    { name: "RICARDO RODRIGUES DA SILVA", role: "Professor(a)"},
    { name: "ROBERTA MARIA PAVANI MANZOLLI BERTONI", role: "Professor(a)"},
    { name: "RODRIGO DE PAIVA LOPES", role: "Professor(a)"},
    { name: "RUBENS CASTALDELLI CARLOS", role: "Professor(a)"},
    { name: "SANDRA RAIMUNDA MARANCON", role: "Professor(a)"},
    { name: "SERGIO AMAURI BERTONI", role: "Professor(a)"},
    { name: "SERGIO LUIS DOMINGUES", role: "Professor(a)"},
    { name: "SHEILA MARIA BARATELA", role: "Professor(a)"},
    { name: "SILVIA HELENA GONCALVES DOS REIS SANTOS", role: "Professor(a)"},
    { name: "SIMONE APARECIDA GRILLO PEREIRA DE LIMA", role: "Professor(a)"},
    { name: "SONIA BUENO DE MORAES BELTRAME", role: "Professor(a)"},
    { name: "SUSANA APARECIDA PADILHA MOLINA", role: "Professor(a)"},
    { name: "TAIS ARMELIN ACCORDI DE PAIVA LOPES", role: "Professor(a)"},
    { name: "TALINE BUENO PÍNOLA", role: "Professor(a)"},
    { name: "TALITA ARIELA SAMPAIO E SILVA", role: "Professor(a)"},
    { name: "THIAGO RODRIGUES GONÇALVES", role: "Professor(a)"},
    { name: "TIAGO FERREIRA DE OLIVEIRA", role: "Professor(a)"},
    { name: "VALDIR FERRARI", role: "Professor(a)"},
    { name: "VANIA HELEN MORANDI BRUNETTO", role: "Professor(a)"},
    { name: "VANIA RIBEIRO DE ALMEIDA AZEVEDO", role: "Professor(a)"},
    { name: "WAGNER SEIZO HOKAMA", role: "Professor(a)" }
]

let equipeEscolar = [
    { name: "Ana Paula Belotto", role: "Diretor da Escola e Assistente Técnico Administrativo" },
    { name: "Aparecida Rosa da Silva", role: "Diretor de Serviço Administrativos e Acadêmico" },
    { name: "André Luis de Moraes", role: "Auxiliar Docente" },
    { name: "Daniel Nardin", role: "Auxiliar Docente" },
    { name: "José Carlos Pereira", role: "Auxiliar Docente" },
    { name: "Andréa Fernanda Andrade Barbosa", role: "Agente Técnico" },
    { name: "Eneide Maria Bonaldo", role: "Agente Técnico" },
    { name: "Lais Gakyia Spinella", role: "Agente Técnico" },
    { name: "Lais Martins Bortolotti", role: "Agente Técnico" },
    { name: "Lucimara Aparecida Alves de Souza", role: "Agente Técnico" },
    { name: "Monica Marinho", role: "Agente Técnico" },
    { name: "Maximiana da Silva", role: "Agente Técnico" },
    { name: "Regina Célia Macedo", role: "Agente Técnico" },
    { name: "Ronivaldo Hemógenes Leme da Silva", role: "Agente Técnico" },
    { name: "Rosângela Aparecida Quintana", role: "Agente Técnico" },
    { name: "Hersilia Caleffi de Souza", role: "Professor Readaptado" },
    { name: "Luis Carlos Otte", role: "Professor Readaptado" }
]

let conselhoEscolar = [
    { name: "Ana Paula Belotto", role: "Diretora de Escola" },
    { name: "Aparecida Rosa Silva", role: "Representante da Diretoria de Serviços Administrativos" },
    { name: "Laís Martins Bortolotti", role: "Representante da Diretoria de Serviços Acadêmicos" },
    { name: "Mario Celso Grou", role: "Representante dos professores do Ensino Médio" },
    { name: "Rubens Castaldelli Carlos", role: "Representante dos professores do Ensino Técnico" },
    { name: "Lucimara Aparecida Alves de Souza", role: "Representante dos Servidores Técnicos Administrativos" },
    { name: "Agatha Marchi Cavalini", role: "Representante dos alunos do Ensino Médio e Etim" },
    { name: "Sergio Luis Domingues", role: "Representante do Sindicato dos Trabalhadores" },
    { name: "Marcelo José Viam Ribeiro", role: "Representante do Poder Municipal" },
    { name: "Vinicius Martins", role: "Representante dos ex-alunos" },
    { name: "Gilson Marques", role: "Representante dos alunos do Ensino Técnico" },
    { name: "Carlos Augusto Craveiro", role: "Representante dos empresários vinculado aos cursos" },
    { name: "Mônica Ferreira Duarte", role: "Representante dos pais" }
]

let tableData = equipeDocente

let i = 0;

function setTableData(data) {
    tableData = data;
    i = 0;
    sortName = false 
    sortRole = false;
    clearIcon();
    setCurrentTeam(data);
    loadTableData(tableData);
} 

function setCurrentTeam(team) {
    const teams = document.querySelectorAll('.team');
    const current = document.querySelector(".--current");
    current.classList.remove('--current');
    switch (team) {
        case equipeDocente:
            teams[0].classList.add('--current')
            break;
        case equipeEscolar:
            teams[1].classList.add('--current')
            break;
        case conselhoEscolar:
            teams[2].classList.add('--current')
            break;
    }
}

function loadTableData(tableData) {
    const tableBody = document.getElementById('tableData');
    const tablePages = document.getElementById('tablePages');
    const dataPerPage = 10;
    let dataHtml = '';

    for (i; i < tableData.length; i++) {
        var person = tableData[i];
        dataHtml += `<tr><td>${person.name}</td><td>${person.role}</td></tr>`;
        if ((i + 1) % dataPerPage == 0) {
            break;
        }
    }

    // Draws pagination
    if (tableData.length > dataPerPage) {
        tablePages.style.display = "flex";
        tablePages.innerHTML = '';
        const pageQnt = Math.ceil(tableData.length / dataPerPage);
        for (let j = 1; j <= pageQnt; j++) {
            tablePages.innerHTML += `<div class="page">${j}</div>`
        }

        document.querySelectorAll('.page').forEach(page => {
            page.addEventListener('click', () => {
                pageNumber = parseInt(page.innerHTML) - 1;
                i = dataPerPage * pageNumber;
                loadTableData(tableData);
            })
            if ((parseInt(page.innerHTML) * dataPerPage - i) < dataPerPage && (parseInt(page.innerHTML) * dataPerPage - i) > 0) {
                page.classList.add('active')
            }
        })
    }

    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
    // Icon change
    const columnI = document.getElementById(`i__${columnName}`);
    clearIcon();

    switch (columnName) {
        case "name":
            sortName = !sortName;
            sortDirection = sortName;
            sortRole = false;
            break;
        case "role":
            sortRole = !sortRole;
            sortDirection = sortRole;
            sortName = false;
            break;
    }

    if (sortDirection) {
        tableData = tableData.sort(function (a, b) { return a[columnName] > b[columnName] ? 1 : -1; });
        columnI.className = "";
        columnI.classList.add('uil', 'uil-angle-down', 'th-icon');
    } else {
        tableData = tableData.reverse();
        columnI.className = "";
        columnI.classList.add('uil', 'uil-angle-up', 'th-icon');
    }
    i = 0;

    loadTableData(tableData)

}

function clearIcon() {
    const thIcons = document.querySelectorAll('.th-icon');
    thIcons.forEach(icon => {
        icon.className = "";
        icon.classList.add('uil', 'uil-angle-right', 'th-icon')
    });
}


