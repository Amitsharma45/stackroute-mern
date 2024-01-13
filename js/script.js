let data=[];
function addData(){
    let id =document.getElementById('id').value;
    let name =document.getElementById("name").value;
    data.push({id,name});
    if(id === '' || name === ''){
        alert("Please Enter All Value");
    }else{

        document.getElementById('id').value='';
        document.getElementById('name').value='';
        // console.log(data);
        showData();
    }
}
showData();
function showData(){
    let li='';
    let table =document.getElementById('table');
    data.forEach(item=>{
        li+=`
        <tr id=${item.id}>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td><button onclick="deleteData(${item.id})">Delete</button></td>
        </tr>
        `;
    });
    table.innerHTML=li;
}
function deleteData(id){
    console.log(id);
    data= data.filter((e) => { return e.id != id });
    showData();
}
