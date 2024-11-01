const Questions =[

{
    // index 0
question : "Quel élément HTML est utilisé pour créer un lien hypertexte ?",
Options:    [
    "A) <link>",
    "B) <a>",
    "C) <href>",
 ] ,

 correctAnswer:"B) <a>"
},

{
    // index 1
question :"Quelle propriété CSS est utilisée pour changer la couleur du texte ?",
Options:    [

    "A)color" ,
    " B)font-color",
   " C)text-color",
],
correctAnswer:" C)text-color",
},

{
question:"Quel attribut HTML est utilisé pour spécifier l'URL d'une image ?",
Options:[
"A) src",
"B) href",
"C) link",
],
correctAnswer:"A) src",
},
{
question:"Comment définir une marge de 20 pixels en CSS ?",
Options:[

   "A) margin: 20" ,
   "B) margin: 20px",
   "C) margin: 20pt",

],
correctAnswer:"B) margin: 20px",
},
{
question:"Quel élément HTML est utilisé pour créer une liste à puces ?",
Options:[

    "A) <ol>",
    "B) <ul>",
    "C) <list>",

],
correctAnswer:"B) <ul>",
},
{
question:"Quelle propriété CSS est utilisée pour changer la taille de la police ?",
Options:[
"A) font-size",
"B) text-size",
"C) size",
],
correctAnswer:"A) font-size",
},
{
question:"Quel attribut est utilisé pour ajouter une classe à un élément HTML ?",
Options:[
    "A) class",
    "B) id",
    "C) style",
],
correctAnswer:"A) class",
},
{

question:"Comment sélectionner tous les paragraphes dans un fichier CSS ?",
Options:[
    "A) p {}",
    "B) paragraph {}",
    "C) all p {}",
],
correctAnswer:"A) p {}",

},
{

    question:"Quel élément HTML est utilisé pour insérer une ligne horizontale?",
    Options:[
        "A) <hr>",
        "B) <line>",
        "C) <break>",
    ],
    correctAnswer:"A) <hr>",
    },
    {

        question:" Quelle propriété CSS est utilisée pour changer l'arrière-plan d'un élément ?",
        Options:[
            "A) <hr>",
            "B) <line>",
            "C) <break>",
        ],
        correctAnswer:"A) background-color",
        }
]

const questionplace=document.getElementById("question");
const option1=document.getElementById("Ans1");
const option2=document.getElementById("Ans2");
const option3=document.getElementById("Ans3");

var Resultat=0;
var NbQ=1;
function rempliData(){
    if (NbQ-1 < Questions.length) {
questionplace.textContent=Questions[NbQ-1].question;
option1.textContent=Questions[NbQ-1].Options[0];
option2.textContent=Questions[NbQ-1].Options[1];
option3.textContent=Questions[NbQ-1].Options[2];
}
   else {
    alert(Resultat)
}

}
rempliData();
option1.addEventListener('click',(e)=>{

    if(e.target.textContent==Questions[NbQ-1].correctAnswer){
        Resultat++;
    }
    NbQ++;

    rempliData();
})

option2.addEventListener('click',(e)=>{
    if(e.target.textContent==Questions[NbQ-1].correctAnswer)
        Resultat++;
    NbQ++;
    rempliData();
})
option3.addEventListener('click',(e)=>{
    if(e.target.textContent==Questions[NbQ-1].correctAnswer){    
        Resultat++;
    }
    NbQ++;
    rempliData();
})

rempliData();

const next=document.getElementById("next");
const previous=document.getElementById("previous");


next.addEventListener("click",function(e){

if(NbQ < Questions.length){
    NbQ++;
    rempliData();
}
else{
    next.style.display="none";
}
if(NbQ>1){
    previous.style.display="block";
}
})
  previous.addEventListener("click",(e)=>{

    if (NbQ > 1) {
        NbQ--
        rempliData()
    }
    if(NbQ==1){
        previous.style.display="none";
        next.style.display="block";
    }

})
const start=document.getElementById("startbtn");



start.addEventListener('click',()=>{
    start.style.display="none";

    
})