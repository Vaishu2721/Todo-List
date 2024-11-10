let data= document.getElementById('input')
let listData= document.getElementById("list-container")

function addData(){
    if(data.value===""){
        alert("Enter a valid task data")
    }else{
        let listItem = document.createElement("li")
        listItem.innerHTML=data.value
        listData.appendChild(listItem)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        listItem.appendChild(span)
    }
    data.value = ""
    saveData()
}

listData.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data", listData.innerHTML)
}

function showData(){
    listData.innerHTML=localStorage.getItem("data")
}

showData()