const cards = [
  "https://www.trustedtarot.com/img/cards/the-hanged-man.png",
  "https://www.trustedtarot.com/img/cards/the-fool.png",
  "https://www.trustedtarot.com/img/cards/the-magician.png",
  "https://www.trustedtarot.com/img/cards/the-high-priestess.png",
  "https://www.trustedtarot.com/img/cards/the-empress.png",
  "https://www.trustedtarot.com/img/cards/the-emperor.png",
  "https://www.trustedtarot.com/img/cards/the-heirophant.png",
  "https://www.trustedtarot.com/img/cards/the-chariot.png",
  "https://www.trustedtarot.com/img/cards/strength.png",
  "https://www.trustedtarot.com/img/cards/the-hermit.png",
  "https://www.trustedtarot.com/img/cards/wheel-of-fortune.png",
  "https://www.trustedtarot.com/img/cards/justice.png",
  "https://www.trustedtarot.com/img/cards/death.png",
  "https://www.trustedtarot.com/img/cards/temperance.png",
  "https://www.trustedtarot.com/img/cards/the-tower.png",
  "https://www.trustedtarot.com/img/cards/the-moon.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXiW6tGP1XGcUjsuzGZhyQEARrJWW1yEaJZ7By5s9m7PJTMZkH&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW1UNWdckrcM9NPlKjoAWWxLv876YoIXj1ZU7TzIcO5lP3fVNa&usqp=CAU",
  "data:image/jpeg;base64,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",
];

$(".first").on("click", addCard);
let pickedCards = [];

// add card to page when clicked on div
function addCard() {
  let $card = $("<img>");
  let randomCard = cards[Math.floor(Math.random() * cards.length)];
  for (i = 0; i < cards.length; i++) {
    if (randomCard === cards[i]) {
      $card
        .attr("src", cards[i])
        .attr("class", "chosen")
        .on("click", retractCards);
      $(".grid").append($card);
      cards.splice(i, 1);
      pickedCards.push(randomCard);
      console.log(cards);
      console.log(pickedCards);
      if (cards[i] === cards[0]) {
        let $hangman = $("#hangman").html(
          "*HANGED MAN - Bad Luck Shall Befall You!*"
        );
      }
      if (cards.length === 0) {
        setTimeout(function () {
          alert("YOU ARE OUT OF FORTUNES!");
        }, 500);
      }
    }
  }
}

//push cards back into cards array once clicked on
function retractCards() {
  let image = this.src;
  cards.push(image);
  pickedCards.splice(this, 1);
  this.remove();
  console.log("Cards Left: ", cards);
  console.log("Used Cards: ", pickedCards);
}

// reset the entire page
function resetPage() {
  cards.push(...pickedCards);
  for (let i = 0; i < pickedCards.length; i++) {
    pickedCards.splice(i, pickedCards.length);
  }
  $("img").remove();
  $("#hangman").css("display", "none");
  console.log(cards);
  console.log(pickedCards);
}

// add a foreign image to the web page W/O jquery
document.getElementById("addToPage").onclick = function () {
  var val = document.getElementById("imagename").value,
    src = val;
  img = document.createElement("img");
  img.setAttribute("class", "chosen");
  img.addEventListener("click", retractCards);
  img.src = src;
  $(".grid").append(img);
  pickedCards.push(img.src);
  console.log(pickedCards);
  document.getElementById("imagename");
};

//attempt to use jquery to add foreign image to webpage
// $("#addToPage").on("click", appendForeign);

// function appendForeign() {
//   let $foreignImage = $("#imagename").val(),
//     src = $foreignImage,
//     img = $("<img>");
//   img.src = src;
//   img.attr("class", "chosen").on("click", retractCards);
//   pickedCards.push(img.src);
//   $(".grid").append(img);
//   pickedCards.push(img.src);
//   console.log(pickedCards);
// }
