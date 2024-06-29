var product1 = document.getElementById ("product1")
var qtyl = document. getElementById ("qtyl")
var pricel = document. getzlementByld ("pricel")

var product2 = document.getElementById ("product2")
var qty2 = document.getElementById ("qty2")
var price2 = document.getElementByld ("price2")

var product3 = document.getElementById ("product3")
var qtyl = document. getElementById ("qty3")
var price3 = document. getElementById ("price3")

var product4 = document.getElementById ("product4")
var qty4 = document.getElementById ("qty4")
var price4 = document.getElementByld ("price4")

var product5 = document.getElementById ("product5")
var qty5 = document. getElementById ("qty5")
var price5 = document. getElementByld ("price5")

var product6= document.getElementById ("product6")
var qty6 = document.getElementById ("qty6")
var price6 = document.getElementByld ("price6")

var carts = document.getElementById ("carts")
var total = document.getElementById ("total")
var cash = document.getElementById ("cash")
var change = document.getElementById ("change")

function addOrder () {
    carts. textContent=""
    if (parseFloat (qtyl. value) › 0){
    var order= qtyl. value. toString() + ' pc/s x '+ price1.textContent + '-------'+ product.textContent + '------Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)
//carts.textContent += carts.value.toString() + "\n";
carts. textContent += order
--'+ producti. textContent + '------ Php' + (parseFloat (qtyl. value) *parseFloat (pricel. textConte:
if (parseFloat (qty2. value) > 0){
var order= qty2.value.toString() + ' pc/s x '+ price2. textContent + '---//carts.textContent += carts.value.toString() + "\n";
carts. textContent += order
---'+ product. textContent + '---
-- Php' + (parseFloat (qty2. value) *parseFloat (price2. textConten
qtyl. addEventListener ("keyup", addOrder) :
qty2. addEventListener ("keyup", addorder) :
qty3. addEventListener ("keyup", addOrder) :
qty4. addEventListener ("keyup", addorder) :
qty5. addEventListener ("keyup", addOrder) :
qty6. addEventListener ("keyup", addorder) :
