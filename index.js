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
  customerProductNumber = "";
  console.log('Product Selected Number:', productSelectedNumber);
  selectProduct(productSelectedNumber)
  return productSelectedNumber;
})

const productsToBeSelected = document.getElementsByClassName('product')

function selectProduct(productSelectedNumber){

  if (productSelectedNumber){
    productSelectedNumber -= 1
    let products = document.querySelectorAll('.product')[productSelectedNumber];
    let productSelected = products.dataset.name;
    let productCost = products.dataset.value;
    products.dataset.cuantity -=  1;
    let productCuantity = products.dataset.cuantity;
    console.log(`The product selected is ${productSelected}. The cost is: ${productCost}$`);
    console.log(productCuantity)
  }
}
