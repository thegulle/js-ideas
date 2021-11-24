const todoInput = document.getElementById('todo-input');
const todoInputButton = document.getElementById('todo-add-button');
const todoList  = document.getElementById('todo-list');

todoInput.addEventListener('keyup',function(e){
    if(e.key=='Enter' || e.keyCode==13){
        appendList();
    }
});
todoInputButton.addEventListener('click',function(){
    appendList();
});

function appendList(){
    if(todoInput.value!==''){
        var newElement = document.createElement("li");
        newElement.setAttribute("class","new-append");
        newElement.appendChild(document.createTextNode(todoInput.value));
        todoList.appendChild(newElement);
        /*Remove Animation*/
        setTimeout(function(){
            newElement.removeAttribute("class","new-append");
        },1000);
        /*Clear input*/
        todoInput.value = null;
        todoInput.focus();
    }else{
        alert('Please enter to do');
    }
}