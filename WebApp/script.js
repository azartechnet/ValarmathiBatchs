function addStudent()
{
    let name=document.querySelector("#name").value;
    let course=document.querySelector("#course").value;
    if(name==="" || course==="")
    {
        alert("Plese enter all fields")
        
    }
    let table=document.querySelector("#studentTable");
    let row=document.createElement("tr");
    row.innerHTML=`
    <td>${name}</td>
    <td>${course}</td>`;
    table.appendChild(row);
   
   

}