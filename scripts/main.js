const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const text = document.querySelector('#text-container');
const locales = [{
    name: 'home',
    buttonText: ['rest', 'study magic', 'read book', 'eat','leave'],
    buttonFunctions: [rest, studyMagic, eat,read, leave],
    text: 'You are now at Home!, chose what you want to do.',
    backgrounds: ["url(../images/room.gif) 50% 50%/cover", "url(../images/studyMagic.gif) 50% 65%/cover", "url(../images/readBook.gif) 50% 50%/cover", "url(../images/eat.gif) 50% 50%/cover"]
},
];

let health = 100;
let knowledge = 100;
let power = 50;
let mana = 50;
let XP = 0;
let level = 0;

let monsterHealth;
let monsterKnowledge;
let monsterPower;
let monsterMana;
let monsterLevel;

button0.addEventListener('click', () => {
    goHome();
})

function update(local){
    button0.innerText = local.buttonText[0];
    button1.innerText = local.buttonText[1];
    button2.innerText = local.buttonText[2];
    button3.innerText = local.buttonText[3];
    button4.innerText = local.buttonText[4];

    button0.style.background = local.backgrounds[0];
    button1.style.background = local.backgrounds[1];
    button2.style.background = local.backgrounds[2];
    button3.style.background = local.backgrounds[3];
    button4.style.background = local.backgrounds[4];

    button0.addEventListener('click', () => {
        local.buttonFunctions[0];
    });
    button1.addEventListener('click', () => {
        local.buttonFunctions[1];
    });
    button2.addEventListener('click', () => {
        local.buttonFunctions[2];
    });
    button3.addEventListener('click', () => {
        local.buttonFunctions[3];
    });
    button4.addEventListener('click', () => {
        local.buttonFunctions[4];
    });

    text.innerHTML = `<div>
        <p>${local.text}</p>
    </div>` 
}

function goHome() {
    update(locales[0]);
}

function rest() {

}

function studyMagic() {

}

function read(){

}

function eat(){

}

function leave() {

}