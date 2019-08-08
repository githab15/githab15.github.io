const numDivs = 36;
const maxHits = 10;
let miss = 0

let hits = 0;
let firstHitTime = 0;
let score = 0;

function round() {
  $(".game-field").removeClass("target");
  $(".game-field").removeClass("miss")
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  // TODO: помечать target текущим номером
  $(".target").text(hits)
  console.log(firstHitTime)

  // FIXME: тут надо определять при первом клике firstHitTime

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $(".game-field").addClass("d-none")



  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  score = hits - miss;
  $("#score-span").text(score);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  $(".target").text("")
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  }

  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
  else {
  	miss += 1
  	$(event.target).addClass("miss")
  }

}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  $(".game-field").addClass("d-none");
  $("#button-reload").addClass("d-none");
  $("#button-start").click(function() {
  	$(".game-field").removeClass("d-none");
  	$("#button-start").addClass("d-none");
  	$("#button-reload").removeClass("d-none")
  	firstHitTime = getTimestamp()
  	  round();
  })


  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
