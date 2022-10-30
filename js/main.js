let write = document.getElementById('write')
let read = document.getElementById('read')
let closee = document.getElementById('close')
let inputt = document.getElementById('task')
let add = document.getElementById('add')
let alertt = document.getElementById('alert')
let alertblus = document.getElementById('alertblus')

read.onclick=function(){
    write.style.display='block'
}
closee.onclick=function(){
    write.style.display='none'
}
add.onclick=function(){
    write.style.display='none'
    if(inputt.value != ""){
        alertt.style.display='none'
        alertblus.innerHTML+=`<div class="divjs" ><div style="background-color:#FBEAFF; color:black; margin-top:10px; width:100%; height: 25px;
    padding: 8px 0px; border-radius: 5px;">${inputt.value} <button class="delete">Delete</button></div></div>`
    }

}

document.addEventListener('click', function(e){
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})