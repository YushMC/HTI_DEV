const preferedColorScheme =  'light';
const btnSwitch = document.querySelector('#swicth-mode');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
}

btnSwitch.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);

const btnVerde= document.querySelector('#color-verde');
const btnRosa = document.querySelector('#color-rosa');
const btnAzul = document.querySelector('#color-azul');
const btnMorado = document.querySelector('#color-morado');


const setColor = (colores) => {
    document.documentElement.setAttribute('data-colores', colores);
    localStorage.setItem('colores', colores);
    indicadores();
}


btnVerde.addEventListener('click', ()  => {
    setColor('verde');
});

btnRosa.addEventListener('click', ()  => {
    setColor('rosa');
});

btnAzul.addEventListener('click', ()  => {
    setColor('azul');
});

btnMorado.addEventListener('click', ()  => {
    setColor('morado');
});

setColor(localStorage.getItem('colores'));

function indicadores(){
    if(localStorage.getItem('colores')=="verde"){
        btnVerde.style.boxShadow = "0px 0px 5px 1px rgba(255, 255, 255, 0.5)";
        btnAzul.style.boxShadow = "none";
        btnMorado.style.boxShadow = "none";
        btnRosa.style.boxShadow = "none";
    }else  if(localStorage.getItem('colores')=="rosa"){
        
        btnRosa.style.boxShadow = "0px 0px 5px 1px rgba(255, 255, 255, 0.5)";
        btnVerde.style.boxShadow = "none";
        btnAzul.style.boxShadow = "none";
        btnMorado.style.boxShadow = "none";

    }else if(localStorage.getItem('colores')=="azul"){
        
        btnAzul.style.boxShadow = "0px 0px 5px 1px rgba(255, 255, 255, 0.5)";
        btnRosa.style.boxShadow = "none";
        btnVerde.style.boxShadow = "none";
        btnMorado.style.boxShadow = "none";
        
    }else if(localStorage.getItem('colores')=="morado"){
        btnMorado.style.boxShadow = "0px 0px 5px 1px rgba(255, 255, 255, 0.5)";
        btnRosa.style.boxShadow = "none";
        btnVerde.style.boxShadow = "none";
        btnAzul.style.boxShadow = "none";
    }
    
}

