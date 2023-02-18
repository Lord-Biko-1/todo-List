const form=document.querySelector('.add');
const formSearch=document.querySelector('.search input');
const Todos=document.querySelector('.todos');
const trash=document.querySelector('.delete');
const generat=x =>{
    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span  class="text-light">${x}</span>
            <i class="far fa-trash-alt delete text-light"></i>
        </li>
    `;
    Todos.innerHTML+=html;
};


form.addEventListener('submit',(e)=>{
e.preventDefault();
    const todo=form.add.value.trim();
    if(todo.length)
    {
        generat(todo);
        form.reset();
    }
   
});
Todos.addEventListener('click',e=>{

    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});
const arr=[];
const filter=(terms)=>
{   

    Array.from( Todos.children)
    .filter((todo)=> !todo.textContent.toLowerCase().includes(terms))
    .forEach((todo)=> todo.classList.add('filtered'));

    Array.from( Todos.children)
    .filter((todo)=> todo.textContent.toLowerCase().includes(terms))
    .forEach((todo)=> todo.classList.remove('filtered'));
};
formSearch.addEventListener('keyup',()=>{
    const term=formSearch.value.trim().toLowerCase();
    filter(term);
});