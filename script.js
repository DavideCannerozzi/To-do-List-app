const myBtn = document.getElementById('btn-input');
const myInput = document.getElementById('input-list');
const myList = document.getElementById('list-todos');

myBtn.addEventListener('click', function(){
   
        const myValue = myInput.value;
        if(myValue){
        
        myInput.value = "";
        const myDiv = document.createElement('div');
        myDiv.classList.add('div-container'); 
        myDiv.innerHTML = myValue; 
        myList.append(myDiv);

        const deleteBtn = document.createElement('button');
        deleteBtn.style.backgroundImage = "url('img/btn-delete.png')";
        deleteBtn.classList.add('delete-button');
        myDiv.append(deleteBtn);
        deleteBtn.addEventListener('click',function(){
                myDiv.parentNode.removeChild(myDiv);
            })
        }
    });

