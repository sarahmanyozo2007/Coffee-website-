function searchCoffee(){

    let input = document.getElementById("search");

    let filter = input.value.toUpperCase();

    let cards = document.getElementsByClassName("coffee-card");

    for(let i = 0; i < cards.length; i++){

        let title = cards[i].getElementsByTagName("h3")[0];

        let text = title.innerText;

        if(text.toUpperCase().indexOf(filter) > -1){

            cards[i].style.display = "";

        }
        else{

            cards[i].style.display = "none";

        }

    }

}