let countEl=document.getElementById("count-el")

count=0

function INCREMENT(){
    count=count+1
    countEl.innerText=count
}

saveEl=document.getElementById("save-el")

function SAVE(){
    countString=count+"-"
    saveEl.innerText+=countString
    countEl.innerText=count
    count=0
}