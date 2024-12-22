var sidenav=document.getElementById("sidenav")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")

  menuicon.addEventListener("click",function(){
    sidenav.style.right=0
  })


  closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
  })

/////

var productContainer = document.getElementById("product-container")
 var search = document.getElementById("s")
 var productList = productContainer.querySelectorAll("div")

 search.addEventListener("keyup", function() {
     var enteredValue = event.target.value.toUpperCase()
     for (var count = 0; count<productList.length; count=count+1) {
         var productName = productList[count].querySelector("p").textContent
         if (productName.toUpperCase().indexOf(enteredValue) < 0) {
             productList[count].style.display = "none"
         } else {
             productList[count].style.display = "block"
         }
     }
 });


