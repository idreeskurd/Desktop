let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

// get total
function gettotal() {
  if(price.value != ''){
  let result = (+price.value + +taxes.value) - +discount.value;
  total.innerHTML = result;
}

}














// CREATE product


let datapro = [];



submit.onclick = function(){
  let newpro = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,
  }
datapro.push(newpro)
localstorage.setItem('product',JSON.stringify(datapro))
  console.log(datapro)
}
