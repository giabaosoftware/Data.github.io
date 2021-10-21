//jshint esversion: 6


/*
// let elName = document.getElementById("nameInput");
// let elData = document.getElementById("dataInput");
// let elTable = document.getElementById("table-body");
// let elSearch = document.getElementById("searchInput");
// let data = new Array();


// //display data
// function displayData(item){
//     const newRow = document.createElement('tr');
//     newRow.innerHTML = `
//                         <td>${item.name}</td>
//                         <td class="flex justify-between align-center">${item.data} <i class="bi bi-x-circle-fill" onclick="removeItem('${item.name}','${item.data}')"></i>
//                         </td>
//                         `;
//     elTable.appendChild(newRow);
//     console.log(item);
// }


// //get data
// function getData(){
//     elTable.innerHTML = "";
//     if(elName.value){
//         data.push({name : elName.value, data : elData.value});
//         data.stack.forEach(data => displayData(data));
//         console.log(data.stack);
//     }else{
//         data.stack.forEach(data => displayData(data));
//     }
// }


// //search data
// function search(){
//     elTable.innerHTML = "";
//     data.stack.forEach(data => {
//         if(elSearch.value){
//             if(elSearch.value === data.name){
//                 displayData(data);
//             }
//         }else{
//             return false;
//         }
//     });
//     if(!elSearch.value){
//         data.stack.forEach(data => displayData(data));
//     }
// }


// //remove data
// function removeItem(name, content){
//     for(let i = 0; i < data.stack.length; i++){
//         if(data.stack[i].name === name){
//             if(data.stack[i].data === content){
//                 data.remove(data.stack[i]);
//                 break;
//             }
//         }
//     }
//     elTable.innerHTML = "";
//     data.stack.forEach(data => displayData(data));
//     console.log(data);
// }*/


class Array{
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

let data = new Array;

//get data
$(document).ready(function(){
    $("#data").click(function(){
        if($("#nameInput").val()){ 
            data.push({name : $("#nameInput").val(), data : $("#dataInput").val()});
        }
        displayData(data.stack);
    });
});

//display data
function displayData(array){
        let html;
        array.forEach(item => {
            let index = array.indexOf(item);
            html += `<tr class="row-${index}">
                     <td class="itemId-${index}">${index}</td>
                     <td>${item.name}</td>
                     <td class="flex justify-between align-center">${item.data}<i class="bi bi-x-circle-fill" onclick="removeItem('${item.name}', '${item.data}')"></i></td>
                     </tr>`;
        });
        $("#table-body").html(html);
}

//search data
$(document).ready(function(){
    $("#search").click(function(){
        let idSearch = $('#searchInput').val();
        let id = $(`.itemId-${idSearch}`).text();
        if(id){
            let html = `<tr>
                    <td>${data.stack.indexOf(data.stack[id])}</td>
                    <td>${data.stack[id].name}</td>
                    <td class="flex justify-between align-center data-item">${data.stack[id].data}<i class="bi bi-x-circle-fill"></td>
                    </tr>`;

            $("#table-body").html(html);
        } else {
            displayData(data.stack);
        }
    });
});

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
    $("#table-body").html("");
    displayData(data.stack);
}