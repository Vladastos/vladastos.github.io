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

//variabili todo
var nodoInputText;
var nodoInputButton;
var nodoOutputList;
var nodoClearButton;
var nodoOutputSpan;
var nodoInputForm

/*VARIABILI GLOBALI*/ 
var contatore_nodi = "0";

class elementoLista{
    constructor(content){
        this.nome = "li"+contatore_nodi;
        this.contenuto = content;
        this.dataCompleta = null;
        this.completato = false;
        this.archiviato = false;
        this.oraCompleta = null;
        /*incremento il contatore nodi */
        contatore_nodi++;
        localStorage.setItem("contatoreNodi",contatore_nodi);

    }
}

function gestoreLoad(){
    try{
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


        nodoInputButton=document.getElementById("inputButton");
        nodoInputText=document.getElementById("inputText");
        nodoOutputList=document.getElementById("outputList");
        nodoClearButton=document.getElementById("clearButton");
        nodoOutputSpan=document.getElementById("outputSpan");
        nodoInputForm=document.getElementById("inputForm");
        /*EVENT LISTENERS*/

        //eventi per il menu e il cambio tema
        nodoToggleThemeButton.addEventListener("click",toggleTheme);
        nodoPulsanteMenu.addEventListener("click",toggleMenu);
        nodoMain.addEventListener("click",mainClick);
        nodoHelp.addEventListener("click",gestoreHelp);
        nodoCloseOverlay.addEventListener("click",gestoreCloseOverlay);
        nodoOverlay.addEventListener("click",gestoreCloseOverlay);
        nodoOverlayWindow.addEventListener("click",(event)=>{
            event.stopImmediatePropagation();
        });

        //eventi todo
        nodoInputForm.addEventListener("submit",gestoreIn);
        nodoClearButton.addEventListener("click",gestoreClear);
        

        /*RESET CAMPI INPUT*/
        nodoInputText.value="";

        /*inizializzo il contatore nodi*/
        inizializzaContatoreNodi();
        renderOutput();

    }catch(e){
        alert("gestoreLoad "+e);
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
//funzioni todo

function inizializzaContatoreNodi(){
    try{
        if(localStorage.getItem("contatoreNodi")==null){
            localStorage.setItem("contatoreNodi", 0);
        }else{
            contatore_nodi = localStorage.getItem("contatoreNodi");
        }
    }catch(e){
        alert("inizializzaContatoreNodi "+e);
    }
}


function renderOutput(){
    try {
        while(nodoOutputList.firstChild){
            nodoOutputList.firstChild.remove();
        }
        if(contatore_nodi==0){
            /*se non ci sono elementi salvati aggiungo un elemento placeholder*/
            let foo;
            foo = document.createElement("li");
            foo.textContent = "Aggiungi Qualcosa";
            nodoOutputList.appendChild(foo);
        }else{
            /*scorro gli elementi*/
            for(let i = 0;i<contatore_nodi;i++){
                
                let variabile = "li"+i;
                let elemento = JSON.parse(localStorage.getItem(variabile));
                /*controllo che l'elemento non sia archiviato */
                if(!elemento.archiviato){
                    /*creo variabili per nuovo elemento */
                    let listElement = document.createElement("li");
                    let contenutoElement = document.createElement("span");
                    let dataElement = document.createElement("span");
                        dataElement.classList.add("data");
                        dataElement.classList.add("dataCompleta");
                    let oraElement = document.createElement("span");
                        oraElement.classList.add("ora");
                    let bottoneElement = document.createElement("input");

                    listElement.setAttribute("id",variabile);
                    /*aggiungo classe completato se presente nel json*/
                    if(elemento.completato){
                        listElement.classList.add("completato");
                    }
                    
                    /*appendo figlio <span> di classe "contenuto" e bottone al <li> */
                        /*span contenuto */
                    contenutoElement.classList.add("contenuto");
                    contenutoElement.innerText = elemento.contenuto;
                        /*bottone elimina */
                    bottoneElement.setAttribute("type","button");
                    bottoneElement.value = "X";
                    bottoneElement.classList.add("button");
                    bottoneElement.classList.add("bottoneElimina");

                    listElement.appendChild(contenutoElement);
                    /*appendo elemento datacompleta se presente nel campo */
                    if(elemento.dataCompleta!=null){
                        dataElement.innerText = elemento.dataCompleta;

                    }else{
                        dataElement.innerText = "---";
                    }
                    if (elemento.oraCompleta!=null){
                        oraElement.innerText = elemento.oraCompleta;
                    }else{
                        oraElement.innerText = "---";
                    }
                    listElement.appendChild(dataElement);
                    listElement.appendChild(oraElement);
                    listElement.appendChild(bottoneElement);
                   

                    nodoOutputList.appendChild(listElement);

                    /*BOTTONE ELIMINA */

                    /*event listener completa*/
                    listElement.firstChild.addEventListener("click", gestoreCompleta);
                    listElement.lastChild.addEventListener("click",gestoreElimina);
                    //nodoCloseOverlay.addEventListener("click",gestoreCloseOverlay);
                }
            }
            /*se tutti gli elementi sono archiviati aggiungo un elemento placeholder */
            if(nodoOutputList.innerText===""){
                let foo;
                foo = document.createElement("li");
                foo.innerText = "Aggiungi Qualcosa";
                nodoOutputList.appendChild(foo);

            }
        }

        function scorriElementi(){

        }
    } catch (e) {
        alert("renderOutput "+e);
    }
}

function gestoreIn(event){
    try {
        event.preventDefault();
        /*creo oggetto nota*/
        let nuovoElemento = new elementoLista(nodoInputText.value);
        /*salvo in locale la stringa con il nome appena creato*/
        localStorage.setItem(nuovoElemento.nome,JSON.stringify(nuovoElemento));
        /*incremento contatore nodi*/
        renderOutput();
        

        nodoInputText.value="";
    } catch (e) {
        alert("gestoreIn "+e);
    }

}

function gestoreClear(){
    try{
        /*Richiedi conferma*/
        nodoOverlay.classList.add("displayOverlay");
        //messaggio overlay
        nodoOverlayCaption.innerText="";
        nodoImmagineOverlay.src = "";
        nodoMessaggioOverlay.innerText = "Sei sicuro di voler eliminare tutti gli elementi?"
        nodoCloseOverlay.onclick = ()=>{
            localStorage.clear();
            contatore_nodi=0;
            renderOutput();
        }

    }catch(e){
        alert("gestoreOut "+e)
    }

}

function gestoreCompleta(){
    /*creo variabile corridpondente all'id del padre  */
    let id; 
    id = this.parentNode.getAttribute("id");
    /*dichiaro variabile per l'elemento */
    let elemento;
    elemento = JSON.parse(localStorage.getItem(id)) ;
    /*controllo se il padre dell'elemento cliccato contiene la classe completato */
    if (this.parentNode.classList.contains("completato")){
        /*cambio la classe dell'elemento html */
        this.parentNode.classList.remove("completato");
        /*modifico il campo dell'oggetto elemento*/
        elemento.completato=false;
        elemento.dataCompleta = null;
        elemento.oraCompleta = null;
    }else{
        this.parentNode.classList.add("completato");
        elemento.completato = true;
        elemento.dataCompleta = dataOggi();
        elemento.oraCompleta = oraAttuale();
    }
    /*restituisco il json dell'oggetto al localstorage */
    localStorage.setItem(id,JSON.stringify(elemento));
     renderOutput();

}

function gestoreElimina(){
    /*richiedi conferma */
    nodoOverlay.classList.add("displayOverlay");
        //messaggio overlay
        nodoOverlayCaption.innerText="";
        nodoImmagineOverlay.src = "";
        nodoMessaggioOverlay.innerText = "Sei sicuro di voler eliminare questo elemento?"
        nodoCloseOverlay.onclick = ()=>{
            /**variabile elemento */
            let elemento;
            /*variabile id */
            let id;
            id = this.parentNode.getAttribute("id");
            /*json parse elemento */
            elemento = JSON.parse(localStorage.getItem(id));
            /*campo archiviato dell'elemento a true */
            elemento.archiviato = true;
            /*restituisco la stringa json dell'elemento a localstoreage */
            localStorage.setItem(id,JSON.stringify(elemento));
            /*rimuovo l'elemento dal dom */
            this.parentNode.remove();
        
            renderOutput();
            nodoCloseOverlay.onclick = null;
        };

}

function dataOggi(){
    let today = new Date();

    return (today.getDate()+"/"+(Number(today.getMonth())+1)+"/"+today.getFullYear()) ;
}

function oraAttuale(){
    try {
        let today = new Date();
        return today.getHours()+" : "+ today.getMinutes();
    } catch (error) {
        alert("oraAttuale "+error);
    }
}

window.onload=gestoreLoad;