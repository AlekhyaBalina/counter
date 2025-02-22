let saveEl=document.getElementById("save_btn")
let countEl=document.getElementById("count_val")
let previous=document.getElementById("prev")
let count=0
function increment(){
    count+=1;
    countEl.textContent=count
}
function decrement(){
    count-=1;
    countEl.textContent=count
}
function save()
{
    let countstr= count+" - "
    previous.textContent+=countstr
    count=0;
    countEl.textContent=count;
}
function reset()
{
    count=0
    previous.textContent=""
}

