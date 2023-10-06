let count=0;
let totalCount=document.getElementById("count");
let preValue=document.getElementById("pre");

//This function will display the number of people entered into the subway
function increment(){
    count+=1;
    totalCount.innerText=count;
}

//This function will display the number of people entered into the subway previously
function save(){
    let saveCount=count+"-"
    preValue.innerText+=saveCount;
    count=0;
    totalCount.innerText=0;
}