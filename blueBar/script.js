
// const bodyElement = document.body
const myButton = document.getElementById('decrese');
console.log(myButton)
const Button = document.getElementById('increse');
console.log(Button)
const nam= document.getElementsByClassName("blue-bar")[0]

nam.style.width = '100px' // initial width

// myButton.addEventListener('click', () => {
// //   console.log('clicked!'); 
//   if(nam.style.width>100){                        
// //   console.log('width1', nam.style.width);        
//   let currentWidth = parseInt(nam.style.width);                     
//   nam.style.width = (currentWidth - 10) +'px'
//   console.log("h");
// }      
// //   console.log('width2', nam.style.width);                   
     

// });

Button.addEventListener('click', () => {
  // console.log('clicked!');                             
  // console.log('width1', nam.style.width);      
  let currentWidth = parseInt(nam.style.width);
  if(currentWidth < 1000){
      nam.style.width = (currentWidth + 10) +'px'  
      console.log('width2', nam.style.width);   
  }                                                 
}    
);



myButton.addEventListener('click', () => {
  console.log('clicked!'); 
  // if(nam.style.width>100){                        
//   console.log('width1', nam.style.width);        
  let currentWidth = parseInt(nam.style.width); 
  if(currentWidth > 100){                 
  nam.style.width = (currentWidth - 10) +'px'
  console.log("h");
  }   
// }      
//   console.log('width2', nam.style.width);                   
     

});

// {prop1: value1, prop2: value2}
// arr = [{prop1: value1, prop2: value2}, {prop1: value1, prop2: value2}, {prop1: value1, prop2: value2}]

// arr[0].prop1
 