function searchCoffee(){

    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let cards = document.getElementsByClassName("coffee-card");

    for(let i = 0; i < cards.length; i++){

        let title = cards[i].getElementsByTagName("h3")[0];
        let text = title.innerText;

        if(text.toUpperCase().indexOf(filter) > -1){

            cards[i].style.display = "";

        }else{

            cards[i].style.display = "none";

        }

    }

}


let images = [

    "coffee pics/coffee.png",
    "coffee pics/coffee 2.png",
    "coffee pics/coffee 3.png",
    "coffee pics/coffee 4.png",
    "coffee pics/coffee 5.png",
    "coffee pics/coffee 6.png"

];

let current = 0;

function changeImage(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    document.getElementById("slide").src = images[current];

}

setInterval(changeImage,3000);

window.onload = function(){

    if(localStorage.getItem("popupShown") == "yes"){

        document.getElementById("popup").style.display = "none";

    }

}


function closePopup(){

    let email = document.getElementById("email").value;

    if(email == ""){

        alert("Please enter your email.");
        return;

    }

    document.getElementById("popup").style.display = "none";

    localStorage.setItem("popupShown","yes");

}
function addToCart(product, price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({

        name: product,
        price: price

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(product + " added to cart.");

}
function loadCart(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let table = document.getElementById("cartItems");

    if(table == null){

        return;

    }

    let total = 0;

    table.innerHTML = "";

    for(let i=0;i<cart.length;i++){

        total += cart[i].price;

        table.innerHTML +=

        "<tr>" +

        "<td>"+cart[i].name+"</td>" +

        "<td>K"+cart[i].price+"</td>" +

        "<td>1</td>" +

        "<td>K"+cart[i].price+"</td>" +

        "</tr>";

    }

    document.getElementById("grandTotal").innerHTML =
    "Total Amount: K"+total;

}

loadCart();
function checkout(){

    alert("Thank you for shopping at Bean Boutique.");

    localStorage.removeItem("cart");

    location.reload();
    document.querySelector(".register-form").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your event registration has been received.");

    this.reset();

});

}