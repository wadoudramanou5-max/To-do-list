
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
    
    const btnsave=document.createElement('button');
    const btnload=document.createElement('button');
    btnsave.textContent="sauvegarder";
    btnsave.onclick=function{
        const tasks=JSON.stringify(task);
        localstorage.setItem("sauvegarde_tache" , tasks);
        alert("liste sauvegardé avec succès )
        
        
    }
    btnload.textContent="charger";
    btnload.onclick=function{
        const tasksrecu=localstorage.getItem("sauvegarde_tache");
        if(tasksrecu){
            task=JSON.parse(tasksrecu);
        }
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



