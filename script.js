let allBtn = document.querySelectorAll('button');
let selection = document.querySelector('#selection ol')


for(let keys of allBtn){
    keys.addEventListener('click',function(event){
        let text = event.target.parentNode.children[0].innerText;
            selection.innerHTML += `

            <li class="px-4">${text}</li>
            
            `;

            
       keys.setAttribute('disabled',true)
       keys.className = 'btn btn-secondary px-5 py-1 rounded-0 mt-3'
        
    })
}