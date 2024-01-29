/*VARIABILI DOM*/
//variabili per il menu e il cambio tema
var nodoPulsanteMenu;
var nodoBarraMenu;
var nodoMain;
var nodoBody;
var nodoToggleThemeButton;

var nodoHelp;
var nodoOverlay;
var nodoOverlayWindow;
var nodoCloseOverlay;
var nodoMessaggioOverlay;
var nodoImmagineOverlay;
var nodoOverlayCaption;

//variabili index
var nodoBackgroundImage;
var nodoFreccia;

/*variabi globali aiuto*/

const frasi=[
    "Succede",
    "Si vive una volta sola (grazie a dio)",
    "Non essere triste, dai",
    "Poteva andare peggio",
    "Vai tranquillo zio",
];
const figures = [
    {"img" : "animalicoccolosi/cat_1.jpg" ,
     "alt" : "Gattino",
     "autore": "Bjørnli Foto",
     "linkAutore": "https://www.flickr.com/photos/21503093@N03",
     "nomeFoto" : "Kitten",
     "linkFoto" :"https://www.flickr.com/photos/21503093@N03/4878878197",
     "linkLicenza":"https://creativecommons.org/licenses/by-nc/2.0/?ref=openverse",
     "licenze":["CC","BY","NC"]},
    {"img" : "animalicoccolosi/cat_2.jpg" ,
     "alt" : "Gattino",
     "autore": "Martin Cathrae",
     "linkAutore":"https://www.flickr.com/photos/34067077@N00",
     "nomeFoto":"Kitten!",
     "linkFoto" :"https://www.flickr.com/photos/34067077@N00/8474229421",
     "linkLicenza":"https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse",
     "licenze":["CC","BY","SA"]},
    {"img" : "animalicoccolosi/cat_3.jpg" ,
     "alt" : "Gattino",
     "autore": "Mikael Moiner",
     "linkAutore":"https://www.flickr.com/photos/43917849@N08",
     "nomeFoto":"Sweet and tender burmese kitten",
     "linkFoto" :"https://www.flickr.com/photos/43917849@N08/8424746318",
     "linkLicenza":"https://creativecommons.org/licenses/by/2.0/?ref=openverse",
     "licenze":["CC","BY"]},
    {"img" : "animalicoccolosi/cat_4.jpg",
    "alt" : "Gattino",
    "autore": "Daveybot",
    "linkAutore":"https://www.flickr.com/photos/12771303@N00",
    "nomeFoto":"Milo: pocket kitten",
    "linkFoto" :"https://www.flickr.com/photos/12771303@N00/3276753152",
    "linkLicenza":"https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse",
    "licenze":["CC","BY","NC","SA"]},
    {"img" : "animalicoccolosi/cat_5.jpg",
    "alt" : "Gattino",
     "autore":"deborah's perspective",
     "linkAutore":"https://www.flickr.com/photos/38911919@N00",
     "nomeFoto":"Pluks kittens",
     "linkFoto" :"https://www.flickr.com/photos/38911919@N00/14144861329",
     "linkLicenza":"https://creativecommons.org/licenses/by/2.0/?ref=openverse",
     "licenze":["CC","BY"]},
    {"img" : "animalicoccolosi/dog_1.jpg" ,
     "alt" : "Cagnolino",
     "autore":"K. W. Sanders",
     "linkAutore":"https://www.flickr.com/photos/28956728@N00",
     "nomeFoto":"Precious Puppy",
     "linkFoto" :"https://www.flickr.com/photos/28956728@N00/92330516",
     "linkLicenza":"https://creativecommons.org/licenses/by-nd-nc/2.0/?ref=openverse",
     "licenze":["CC","BY","NC","ND"]},
    {"img" : "animalicoccolosi/dog_2.jpg" ,
     "alt" : "Cagnolino",
     "autore":"evocateur",
     "linkAutore":"https://www.flickr.com/photos/84989911@N00",
     "nomeFoto":"Corgi Puppies 92",
     "linkFoto" :"https://www.flickr.com/photos/84989911@N00/8526324984",
     "linkLicenza":"https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse",
     "licenze":["CC","BY","SA"]},
    {"img" : "animalicoccolosi/dog_3.jpg" ,
     "alt" : "Cagnolino",
     "autore":"evocateur",
     "linkAutore":"https://www.flickr.com/photos/84989911@N00",
     "nomeFoto":"Corgi Puppies 26",
     "linkFoto" :"https://www.flickr.com/photos/84989911@N00/6342530545",
     "linkLicenza":"https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse",
     "licenze":["CC","BY","SA"]},
    {"img" : "animalicoccolosi/dog_4.jpg" ,
     "alt" : "Cagnolino",
     "autore":"evocateur",
     "linkAutore":"https://www.flickr.com/photos/84989911@N00",
     "nomeFoto":"Corgi Puppies 36",
     "linkFoto" :"https://www.flickr.com/photos/84989911@N00/6343280306",
     "linkLicenza":"https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse",
     "licenze":["CC","BY","SA"]},
    {"img" : "animalicoccolosi/dog_5.jpg" ,
     "alt" : "Cagnolino",
     "autore":"Ted Van Pelt",
     "linkAutore":"https://www.flickr.com/photos/28914673@N02",
     "nomeFoto":" Morgan Van Pelt red merle",
     "linkFoto" :"https://www.flickr.com/photos/28914673@N02/5580029980",
     "linkLicenza":"https://creativecommons.org/licenses/by/2.0/?ref=openverse",
     "licenze":["CC","BY"]}
    
];
const arrayLicenze ={
    "CC":"https://mirrors.creativecommons.org/presskit/icons/cc.svg",
    "BY":"https://mirrors.creativecommons.org/presskit/icons/by.svg",
    "SA":"https://mirrors.creativecommons.org/presskit/icons/sa.svg",
    "NC":"https://mirrors.creativecommons.org/presskit/icons/nc.svg",
    "ND":"https://mirrors.creativecommons.org/presskit/icons/nd.svg",


}

const generatoreFigures = shuffleFigures();
const generatoreFrasi = shuffleFrasi();

function gestoreLoad(){
    try {
        //nodi per il menu e il cambio tema
        nodoPulsanteMenu = document.getElementById("pulsanteMenu");
        nodoBarraMenu = document.getElementById("barraMenu");
        nodoMain = document.getElementById("main");
        nodoBody = document.getElementById("body");
        nodoToggleThemeButton = document.getElementById("toggleThemeButton");
        nodoHelp = document.getElementById("help");
        nodoOverlay = document.getElementById("overlay");
        nodoOverlayWindow = document.getElementById("overlayWindow");
        nodoCloseOverlay = document.getElementById("closeOverlay");
        nodoMessaggioOverlay = document.getElementById("messaggioOverlay");
        nodoImmagineOverlay = document.getElementById("immagineOverlay");
        nodoOverlayCaption = document.getElementById("overlayCaption");

        //nodi index
        nodoBackgroundImage = document.getElementById("indexBackground");
        nodoFreccia = document.getElementById("freccia");
    
        
        //eventi per il menu e il cambio tema
        nodoToggleThemeButton.addEventListener("click",toggleTheme);
        nodoPulsanteMenu.addEventListener("click",toggleMenu);
        nodoMain.addEventListener("click",mainClick);
        nodoHelp.addEventListener("click",gestoreHelp);
        nodoCloseOverlay.addEventListener("click",gestoreCloseOverlay);
        nodoOverlay.addEventListener("click",gestoreCloseOverlay);

        

        //eventi index
        window.addEventListener("scroll",gestoreScroll);
        window.addEventListener("scroll",gestoreScrollFreccia);
    } catch (error) {
        alert("gestoreLoad "+error);
    }
}

//funzioni per il menu e il cambio tema
function mainClick(){
    try {
        if(nodoBarraMenu.classList.contains("expand")){
            toggleMenu();
        }
    } catch (error) {
        alert("mainClick "+error);
        
    }
}

function toggleMenu(){
    try {
        if(nodoBarraMenu.classList.contains("expand")){
            nodoPulsanteMenu.classList.remove("rotate");
            //faccio sparire il testo
            nodoBarraMenu.classList.remove("opacityUno");
            //tolgo il testo dal flow dopo 0.2 secondi
            setTimeout(() => {
                nodoBarraMenu.classList.remove("displayInline");
                
            }, 200);
            setTimeout(() => {
                nodoBarraMenu.classList.remove("expand");
                
            }, 200);
        }else{
            nodoPulsanteMenu.classList.add("rotate");
            nodoBarraMenu.classList.add("expand");
            setTimeout(() => {
                nodoBarraMenu.classList.add("displayInline");
            }, 180);
            setTimeout(() => {
                nodoBarraMenu.classList.add("opacityUno");
            }, 210);
        }
        
    } catch (error) {
        alert("toggleMenu "+error);
    }
}

function toggleTheme(){
    try {
        if(nodoBody.classList.contains("darkMode")){
            nodoToggleThemeButton.innerText= "dark_mode";

        }else{
            nodoToggleThemeButton.innerText= "light_mode";
        }
        nodoBody.classList.toggle("darkMode");
        nodoBody.classList.toggle("lightMode");

    } catch (error) {
        alert("toggleTheme "+error);
    }
}

function gestoreHelp(){
    try {
        let x = generatoreFigures.next().value;
        let y = generatoreFrasi.next().value;
        nodoOverlay.classList.add("displayOverlay");
        nodoImmagineOverlay.src = x.img;
        nodoImmagineOverlay.alt = x.alt;
        while(nodoOverlayCaption.lastChild){
            nodoOverlayCaption.lastChild.remove();
        }
        /* */
        let nodoParagrafoAttribution = document.createElement("p");
        nodoParagrafoAttribution.classList.add("attribution");
        let nodoNomeImmagine = document.createElement("a");
        nodoNomeImmagine.innerText = x.nomeFoto;
        nodoNomeImmagine.target = "_blank"
        nodoNomeImmagine.setAttribute("href",x.linkFoto);

        nodoParagrafoAttribution.appendChild(nodoNomeImmagine);
        nodoParagrafoAttribution.appendChild(document.createTextNode(" di "));

        let nodoAutoreImmagine = document.createElement("a");
        nodoAutoreImmagine.innerText = x.autore;
        nodoAutoreImmagine.target = "_blank"
        nodoAutoreImmagine.setAttribute("href",x.linkAutore);

        nodoParagrafoAttribution.appendChild(nodoAutoreImmagine);
        nodoParagrafoAttribution.appendChild(document.createElement("br"));
        nodoParagrafoAttribution.appendChild(document.createTextNode(" è sotto licenza "));

        let nodoLicenza = document.createElement("a");
        nodoLicenza.setAttribute("href", x.linkLicenza);
        for(i in x.licenze){
            if(i>1){
                nodoLicenza.appendChild(document.createTextNode("-"));
            }
            if(i==1){
                nodoLicenza.appendChild(document.createTextNode(" "));
            }
            nodoLicenza.appendChild(document.createTextNode(x.licenze[i]));
        }
        nodoParagrafoAttribution.appendChild(nodoLicenza);
        for(i in x.licenze){
            let nodoImmagineLicenza = document.createElement("img");
            let nomeLicenza = x.licenze[i];
            nodoImmagineLicenza.setAttribute("src",arrayLicenze[nomeLicenza]);
            nodoParagrafoAttribution.appendChild(nodoImmagineLicenza);
        }

        nodoOverlayCaption.appendChild(nodoParagrafoAttribution);

        /* */
        nodoMessaggioOverlay.innerText = y;
        nodoOverlayWindow.addEventListener("click",(event)=>{
            try {
                event.stopPropagation();
                
            } catch (error) {
                alert("Overlay Stop Propagation "+ error);
            }
        });

    } catch (error) {
        alert("gestoreHelp "+error);
    }
}

/*FUNZIONI PERMUTAZIONI */

    function shuffle(arr){
        try {
            for(i in arr){
                let k = arr[i];
                let j = Math.floor(Math.random()*arr.length)
                arr[i] = arr[j];
                arr[j]=k;
    
            }
            return arr;
            
        } catch (error) {
            alert("shuffle "+error);
        }
    }

    function* shuffleFigures(){
        try {
            while(true){
                var arrei = shuffle(figures);
                for(i in arrei){
                    yield arrei[i];
                }
            }
            
        } catch (error) {
            alert("shuffleFigures "+error);
        }
    }

    function* shuffleFrasi(){
        try {
            while(true){
                var arrei = shuffle(frasi);
                for(i in arrei){
                    yield arrei[i];
                }
            }
            
        } catch (error) {
            alert("shuffleFigures "+error);
        }
    }


function gestoreCloseOverlay(){
    try {
        nodoOverlay.classList.toggle("displayOverlay");
        nodoImmagineOverlay.alt = "";
    } catch (error) {
        alert("gestoreCloseOverlay "+error);
    }
}

/*FUNZIONI INDEX */

function gestoreScroll(){
    try {
        let opacity = window.scrollY/window.innerHeight;
        nodoBackgroundImage.style.opacity=opacity;
    } catch (error) {
        alert("gestoreScroll "+error);
    }
}

function gestoreScrollFreccia(){
    try {
        console.log(window.scrollY);
        if(scrollY<=window.innerHeight/10){
            nodoFreccia.style.display = "inline-block";
            nodoFreccia.style.opacity = 1-(window.scrollY/window.innerHeight*10);
        }else{
            nodoFreccia.style.display = "none";
        }
    } catch (error) {
        alert("gestoreScrollFreccia "+error);
    }
}

window.onload = gestoreLoad;