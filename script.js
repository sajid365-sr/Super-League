let allBtn = document.querySelectorAll('#playerSection button');
let selection = document.querySelector('#selection ol')


for(let keys of allBtn){
    keys.addEventListener('click',function(event){
        let text = event.target.parentNode.children[0].innerText;

        if(selection.childElementCount >= 5){
            selection.innerHTML += '';
            alert('You can\'t add more than 5 player.');
            keys.removeAttribute('disabled');
            selection.classList.add('border','border-danger','border-2','rounded');
        }else{
            selection.innerHTML += `

            <li class="px-4 py-1 text-secondary fw-bold">${text}</li>
            
            `;
            keys.setAttribute('disabled',true);
            keys.className = 'btn btn-secondary px-5 py-1 rounded-0 mt-3'
            selection.classList.add('border','border-1','rounded');
        }
            
       
       
       
    })
}


//Player Budget Section

function inputValue(inputId){

    let input = document.getElementById(inputId);
    let inputValue = Number(input.value);
    return inputValue;
}

function innerTextValue(elementId,setValue){

    let element = document.getElementById(elementId);
    element.innerText = setValue;
    
}

let totalPlayerCost;
document.getElementById('calculateBtn').addEventListener('click',function(){
  let perPlayerCost =  inputValue('budgetInput');
    let selectedPlayer = Number(selection.childElementCount);

    if(perPlayerCost === 0 && selectedPlayer === 0){
        alert('Please select some player first and input their cost.')
        innerTextValue('playerExpense','000');
    }else if(selectedPlayer === 0){
        alert('Please select some player first')
        innerTextValue('playerExpense','000');
    }else if(perPlayerCost === 0 ){
        alert('Please input per player cost.')
        innerTextValue('playerExpense','000');
    }
    else{
        totalPlayerCost = selectedPlayer * perPlayerCost;
    
        innerTextValue('playerExpense',totalPlayerCost);

    }
})

//Manager & Coach Budget Section

document.getElementById('calculateTotalBtn').addEventListener('click',function(){
    let managerCost = inputValue('managerInput');
    let coachCost = inputValue('coachInput');
let playerExpenceValue = Number(document.getElementById('playerExpense').innerText);


    if(managerCost === 0 && coachCost === 0 && playerExpenceValue === 0){
        alert('Please complete player section first then input manager and coach cost.')
        innerTextValue('totalExpense','000');
    }else if(managerCost === 0 && coachCost === 0){
        alert('Please input manager and coach cost first.')
        innerTextValue('totalExpense','000');
    }else if(managerCost === 0){
        if(playerExpenceValue === 0){
alert('Please complete player section first then input manager cost.');
innerTextValue('totalExpense',coachCost)
        }else{
            alert('Please input manager cost first.')
            innerTextValue('totalExpense',(totalPlayerCost + coachCost));

        }
    }else if(coachCost === 0){

        if(playerExpenceValue === 0){
            alert('Please complete player section first then input coach cost.');
            innerTextValue('totalExpense',managerCost)
                    }else{
                        alert('Please input coach cost first.')
                        innerTextValue('totalExpense',(totalPlayerCost + managerCost));
                    }

    }else if(playerExpenceValue === 0){
        alert('Please complete player section first.');
        innerTextValue('totalExpense',managerCost + coachCost)
    }
    else{
        extraCost = managerCost + coachCost;
    
        let totalCost = totalPlayerCost + extraCost;
        innerTextValue('totalExpense',totalCost);

    }
})
