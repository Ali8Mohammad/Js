 /*function print () {
    console.log(1)
 }

 print()

 const print1 = function() {
    console.log(2);
 }
 print1()
 //arow functions
 const print2 = () => {
    console.log(3);
 }
 print2()*/
 
 const addRowToTable = (name, last, handle, elementIndex) => {
   const tableBody = document.querySelector(".table tbody")

   tableBody.insertAdjacentHTML('beforeend',
   `
   <tr>
   <th scope="row">${elementIndex}</th>
   <td>${name}</td>
   <td>${last}</td>
   <td>${handle}</td>
   <td><button class="btn-danger delete-row">Delete Row</button></td>
   
   </tr>
  
`);
 }
 let elementIndex = 1;
 const newRowButton = document.querySelector(".add-new-button");

 newRowButton.addEventListener("click", () => {
   const nameInput = document.querySelector('.name');
   const lastInput = document.querySelector('.last');
   const handleInput = document.querySelector('.handle');
   
   addRowToTable(nameInput.value, lastInput.value, handleInput.value, elementIndex);

   const deleteRowButton = document.querySelector('.delete-row');
   deleteRowButton.addEventListener("click", (event) => {
         event.target.parentElement.parentElement.remove();
         
   });
   elementIndex += 1;
 });

// const deleteRow = (event) => {
//    event.target.parentElement.parentElement.remove()
// }
const darkMode = document.querySelector('.fa-moon');
darkMode.addEventListener('click', () => {
   document.body.classList.toggle("dark-mode");

})