
/* ----------------------------------------------------------------------------------------------------------------- */
/* DZ11.1 */
let word='';
let letter='';
let num;
let num2;
let counter = 0;
let result;

function  wordF () {
    word = document.getElementById('word').value;
    counter=0;
}

function  letterF () {
    letter = document.getElementById('letter').value;
    counter=0;
}

function sliceWord () {
    num = letter.length;
    num2=word.length;
    for (i=0; i<num2; i++) {
        if (letter == word.substring(0,num)) {
            counter++;
        } 
        word=word.slice(1);
    } 
    console.log(counter);
    document.getElementById('result').value=counter;
}

/* ---------------------------------------------------------------------------------------------------------------- */

/* DZ11.2****** */

let str='';
let start = 0;
let end;
let step;
let stepMod;
let string;

function def() {
    string='';
    str = document.getElementById('string').value;
    if (str==0) str='';
    start = document.getElementById('start').value;
    end = document.getElementById('end').value;
    if (end==0) end=str.length;
    step = document.getElementById('step').value;
    if (step==0) step=1;
}


function sliceStr () {
    str=str.slice(start,end);
    stepMod = Math.abs(step);
    if (stepMod!=1) {
            while (str.length>0) {
            string=string+str.slice(0,1)
            str=str.slice(stepMod)
        }
    } else if (stepMod==1) {
            string=str;
        } ;
    if (step<0) string=string.split('').reverse().join('');
    document.getElementById('result2').value=string;
} 



/* ----------------------------------------------------------------------------------------------------------------------- */

/* DZ11.3-11.4 */

let distance = 2;
let distMax = 3; 
let dayX=1;
let tr;

function value () {
    distance = document.getElementById('oneDay').value;
    distMax = document.getElementById('distance').value;
    dayX=1;
}


function nextDay () {
    value ();
    while (distance<distMax) {
        distance = Number(distance) + (Number(distance))/10;
        dayX++;
        table = document.querySelector("table")
        trNew = document.createElement("tr");
        tdNew1 = document.createElement("td");
        tdNew2 = document.createElement("td");
        tdDay = 'День ' + dayX;
        tdDist = 'Дистанция ' + distance.toFixed(2);
        tdNew1.append(tdDay);
        tdNew2.append(tdDist);
        trNew.append(tdNew1);
        trNew.append(tdNew2);
        table.append(trNew);
    } 
    document.getElementById('result3').value=dayX;
}
