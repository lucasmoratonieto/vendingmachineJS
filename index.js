const buttonsNumber = document.getElementsByClassName('myButtonNumber')
const buttonsMoney = document.getElementsByClassName('myButtonMoney')
let customerProductNumber = '';
let productSelectedNumber = '';
let customerProductMoneyEntered ='';
const enterButton = document.getElementsByClassName('myButtonEnterCancel')[0]
const cancelButton = document.getElementsByClassName('myButtonEnterCancel')[1]
const enterMoneyButton = document.getElementsByClassName('myButtonEnterCancel')[0]
const cancelMoneyButton = document.getElementsByClassName('myButtonEnterCancel')[1]


for (i = 0; i < buttonsNumber.length; i++){
  buttonsNumber[i].addEventListener('click', function() {
    let buttonValue = this.value;
    customerProductNumber = customerProductNumber + buttonValue;
    console.log('Customer Product Number:', customerProductNumber);
    screenDataBeforeSelect(customerProductNumber)

  });
}




cancelButton.addEventListener('click', function() {
    customerProductNumber = '';
    console.log('customerProductNumber Had been cancelled')
    screenDataBeforeSelect(customerProductNumber)
    document.getElementById('screen-input').value =''

});

enterButton.addEventListener('click', function(){
  productSelectedNumber = Number(customerProductNumber);
  customerProductNumber = "";
  console.log('Product Selected Number:', productSelectedNumber);
  document.getElementById('buttons-number').hidden = true
  document.getElementById('buttons-money').hidden = false
  screenDataSelectedProduct(productSelectedNumber)
  return productSelectedNumber;
})

const productsToBeSelected = document.getElementsByClassName('product')

function screenDataSelectedProduct(productSelectedNumber){

  if (productSelectedNumber){
    productSelectedNumber -= 1
    let products = document.querySelectorAll('.product')[productSelectedNumber];
    let productSelected = products.dataset.name;
    let productCost = products.dataset.value;
    products.dataset.cuantity -=  1;
    let productCuantity = products.dataset.cuantity;
    document.getElementById('screen-input').value =`You have selected;\n Product: ${productSelected}\nCost: ${productCost}$

Please Enter Money`
  for (i = 0; i < buttonsMoney.length; i++){
    buttonsMoney[i].addEventListener('click', function() {
      let buttonValue = Number(this.value);
      customerProductMoneyEntered = Number(customerProductMoneyEntered) + buttonValue;
      screenDataAfterSelect(customerProductMoneyEntered, productSelected, productCost)
    });
}
  }
}

function screenDataBeforeSelect(productSelectedNumber){
  document.getElementById('screen-input').value =`Number entered: ${productSelectedNumber}\n 
  Please click ✔ to select the product or ❌ to cancel`
}

function screenDataAfterSelect(customerProductMoneyEntered, productSelected, productCost){
  document.getElementById('screen-input').value =document.getElementById('screen-input').value =`You have selected;\n Product: ${productSelected}\nCost: ${productCost}$

  Money Entered: ${customerProductMoneyEntered}
  
  Left ${productCost - customerProductMoneyEntered}$`

  if (customerProductMoneyEntered >= productCost){
    change(customerProductMoneyEntered, productCost)
  }

}

function change(customerProductMoneyEntered, productCost){
  let change = customerProductMoneyEntered - productCost
  document.getElementById('screen-input').value =document.getElementById('screen-input').value =`Thak you for your purchase.\n 
  
  The money back is ${change}$`
}





console.log(document.getElementById('screen-input').value)
