let taskinput = document.getElementById('inputtask');
let addbtn = document.getElementById('addbtn');
let alltask = document.getElementById('allTasks');
let notask = document.getElementById('noTasks');
let invalid = document.querySelector('.form-groub .invalid')
let addtask = () => {
    let taskdate=taskinput.value
    if (taskdate.trim() =="" || taskinput.value.length < 3 || taskinput.value.length >20)
    {
        invalid.classList.remove('invalid')
       
    }
    else{
    notasks.remove()
    invalid.classList.add('invalid')
    alltask.innerHTML += ` <div id="notasks" class="alert alert-danger">
    ${taskdate}
</div>
`;}

}
addbtn.addEventListener('click',addtask)