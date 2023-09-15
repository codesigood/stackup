let table = "";
let id = 0;
let deletedIds = [];
let dreams = [{}];
let mytable = document.getElementById("myTable");



document.getElementById("submit").addEventListener("click", function () {
    let title = document.getElementById("title-input").value;
    let description = document.getElementById("desc-input").value;
    let category = document.getElementById("category").value;

  id++;
  
  description = description.toString().trim();
  let data = {
    id,
    title,
    description,
    category,
  };
  

 const t =dreams.push(data);
 console.log('Check',t);
  
    // console.log(dreams[i].title);
    
        table += `<tr id=${data.id}>`;
        table += `<td >` + `${data?.id} ` + "</td>";
        table+="<td>"+data?.title+"</td>"
        table+="<td>"+data?.description+"</td>"
        table+="<td>"+data?.category+"</td>"
        table+=`<td><button onClick='removeDream(${data.id})'>`+"Delete"+"</button></td>"
     table += "</tr>";
  

  // dreams.forEach((element) => {
  //     table +=`<tr id=${counter}>`;
  //     table+="<td>"+index +"</td>"
  //     table+="<td>"+element.title+"</td>"
  //     table+="<td>"+element.description+"</td>"
  //     table+="<td>"+element.category+"</td>"
  //     table+=`<td><button onClick='removeDream(${counter})'>`+"Delete"+"</button></td>"
  //      table+="</tr>"

  //  });

  document.getElementById("result").innerHTML = table;
  //console.log(dreams)
});



function removeDream(index) {
  let lent = mytable.rows.length - 1;

  // alert(counter)
   // document.getElementById(`${index}`).remove();
//   deletedIds.push(index);


 //dreams = dreams.splice(index-1,1)
//  dreams = dreams.filter((item)=> {
//     return item.id!=index;
//  });
//let t = dreams.splice(index,1);
 //deletedIds.push(index);
 const In = dreams.findIndex(obj=>obj.id === index);
 console.log('Na im be this',In);
 console.log('Na DREAM',dreams);
 const t =dreams.splice(In,1);
 console.log('Deleted',t);
 //document.getElementById(`${index}`).remove();
 console.log('Wetin remain',dreams);
    mytable.deleteRow(`${index}`)
 //console.log("deleted", dreams);
 //console.log("REturn", t);
//   console.log("SHOW D", itemsShow);
//   console.log("COUNTER", counter);
//   console.log("DREAMS", dreams);
}

// document.getElementById(`counter`).addEventListener('click',function(){
//     alert('fuck you')
// })
