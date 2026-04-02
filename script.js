
let addbtn=document.getElementById("addtask")
let suppbtn = document.getElementById("clear")
let loadbtn = document.getElementById("load")






addbtn.addEventListener("click" , addTask)
suppbtn.addEventListener("click" , clearAll)

let task=[]

function displaytasks(){
    let html="";
    for(let i=0 ; i<task.length ; i++){
     html+="<li>"+task[i] + "<button onclick='removetask("+ i +")'>x</button></li>";
     
       
    }
    document.getElementById("list").innerHTML=html;
}

function addTask(){
    let taskInput=document.getElementById("taskinput");
    let text=taskInput.value;
    if (text==""){
        return;
    } 

    task.push(text);
    taskInput.value="";
    displaytasks();



}

function clearAll(){
    task=[];
    displaytasks();
}


function removetask(i) {
    task.splice(i, 1);      
    displaytasks();
}



