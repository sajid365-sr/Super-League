let allBtn = document.querySelectorAll('#playerSection button');
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


function inputValue(inputId){

    let input = document.getElementById(inputId);
    let inputValue = Number(input.value);
    return inputValue;
}

function innerTextValue(elementId,setValue){

    let element = document.getElementById(elementId);
    element.innerText = setValue;

}

document.getElementById('calculateBtn').addEventListener('click',function(){
  let perPlayerCost =  inputValue('budgetInput');
    let selectedPlayer = selection.childElementCount;

    const totalPlayerCost = selectedPlayer * perPlayerCost;

    innerTextValue('playerExpense',totalPlayerCost);
})