let monthEl = document.querySelector(".date h1");
let dateEl = document.querySelector(".date p");
let daysEl = document.querySelector(".days");

const optionDate = {weekday: 'long', year: 'numeric', month: 'long', day: "numeric"}

let monthInx = new Date().getMonth();
let lastDay = new Date(new Date().getFullYear(), monthInx  + 1, 0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthInx).getDay() - 1 ;



let months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre', 
    'Novembre',
    'Décembre',
];


monthEl.innerText = months[monthInx];

dateEl.innerText = new Date().toLocaleDateString('fr-FR', optionDate);

let days = "";


for (let i = firstDay; i > 0 ; i--){
    days += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++){
    if( i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }else{
        days += `<div>${i}</div>`;
    }
    
}

daysEl.innerHTML = days;