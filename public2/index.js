// import { readFile } from 'node:fs/promises';
const buttons = document.getElementsByClassName('myButtonNumber')
let customerProductNumber = '';
let productSelectedNumber = '';


for (i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function() {
    let buttonValue = this.value;
    customerProductNumber = customerProductNumber + buttonValue;
    console.log('Customer Product Number:', customerProductNumber);
  });
}

const enterButton = document.getElementsByClassName('myButtonEnterCancel')[0]
const cancelButton = document.getElementsByClassName('myButtonEnterCancel')[1]

cancelButton.addEventListener('click', function() {
    customerProductNumber = '';
    console.log('customerProductNumber Had been cancelled')
});

enterButton.addEventListener('click', function(){
  productSelectedNumber = Number(customerProductNumber);
  console.log('Product Selected Number:', productSelectedNumber);
  selectedProduct()
})

// async function selectedProduct(){
//   try{
//     const data = await readFile('products.txt', {encoding: 'utf-8'})
//     console.log(data)
//   } catch(err){
//     console.error(err)
//   }
  
// }

