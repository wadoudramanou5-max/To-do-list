
let addbtn=document.getElementById("addtask")
let suppbtn = document.getElementById("clear")
let savebtn= document.getElementById("save")
let loadbtn = document.getElementById("load")
let startbtn = documenyt.getElementById("start")



startbtn.addEventListener("click" , startAll)
addbtn.addEventListener("click" , addTask)
suppbtn.addEventListener("click" , clearAll)
savebtn.addEventListener("click" , saveAll)
loadbtn.addEventListener("click" , loadAll)

function startAll(){
    window.location.href="dashboardl.html"
}



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

function saveAll(){
    const tasks=JSON.stringify(task);
    localStorage.setItem("sauvegarde_todo" , tasks);
    alert("liste de tâche sauvegardé avec succès ")
    
}

function loadAll(){
    const taskRecu=localStorage.getItem("sauvegarde_todo");
    if(taskRecu){
        task=JSON.parse(taskRecu);
         displaytasks();
        alert("liste chargé avec succès ")
    }else{
        alert("Aucune sauvegarde trouvée" )
    }
}



