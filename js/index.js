//jshint esversion: 6
class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        return this.stack.push(val);
    }

    pop(){
        return this.stack.pop();
    }

    remove(item){
        if(this.stack[this.stack.indexOf(item)]){
            let head = this.stack.slice(0, this.stack.indexOf(item));
            let tail = this.stack.slice(this.stack.indexOf(item)+1, this.stack.length);
            this.stack = head.concat(tail);
        } else {
            return false;
        }
    }

    addAt(item, index){
        if(this.stack[index]){
            let head = this.stack.slice(0, index);
            head.push(item);
            let tail = this.stack.slice(index, this.stack.length);
            this.stack = head.concat(tail);
        } else {
            return false;
        }
    }
}    

let stack1 = new Stack();
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);

console.log(stack1);
stack1.remove(3);
console.log(stack1);

let elName = document.getElementById("nameInput");
let elData = document.getElementById("dataInput");
let elTable = document.getElementById("table-body");
let elSearch = document.getElementById("searchInput");
let data = new Stack();


//display data
function displayData(item){
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<tr>
                        <td>${item.name}</td>
                        <td class="flex justify-between align-center">${item.data} <i class="bi bi-x-circle-fill" onclick="removeItem('${item.name}','${item.data}')"></i>
                        </td>
                        </tr>`;
    elTable.appendChild(newRow);
    console.log(item);
}

//get data
function getData(){
    elTable.innerHTML = "";
    if(elName.value){
        data.push({name : elName.value, data : elData.value});
        data.stack.forEach(data => displayData(data));
        console.log(data.stack);
    }else{
        return false;
    }
}

//search data
function search(){
    elTable.innerHTML = "";
    data.stack.forEach(data => {
        if(elSearch.value){
            if(elSearch.value === data.name){
                displayData(data);
            }
        }else{
            return false;
        }
    });
    if(!elSearch.value){
        data.stack.forEach(data => displayData(data));
    }
}

//remove data
function removeItem(name, content){
    for(let i = 0; i < data.stack.length; i++){
        if(data.stack[i].name === name){
            if(data.stack[i].data === content){
                data.remove(data.stack[i]);
                break;
            }
        }
    }
    elTable.innerHTML = "";
    data.stack.forEach(data => displayData(data));
    console.log(data);
}


