const inputButton = document.getElementById('so')
const deleteButton = document.getElementById('del')
const completeButton = document.getElementById('com')
const addtext = document.getElementById('ad')
const kr = document.getElementById('hr')
addtext.addEventListener('click',() =>{
//   const newNode = document.createElement("ul")
//        newNode.innerHTML = `${inputButton.value}`;
//        console.log(newNode.innerHTML)
//        addtext.appendChild(newNode);
//      inputButton.value="";
//   const li = document.createElement("li");
//         li.textContent = taskText;

 const pc = document.getElementById("list");
 for (let i = 1; i <= 10; i++) {
 const li = document.createElement("li");
 console.log("h")
 li.textContent = `${inputButton.value}`;
 pc.appendChild(li); 
 }




})

completeButton.addEventListener('click',()=>{
 li.textContent = document.createElement("del")


})


deleteButton.addEventListener('click',() => {

    deleteButton.parentElement.remove();

})
