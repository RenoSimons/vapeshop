function showTwitterFeed () {
  var twitterBox = document.querySelector("#tweets-sidebar");
  var twitterButton = document.querySelector("body > main > div:nth-child(4) > button");

  if (twitterBox.classList.contains("hidden")) {
    twitterBox.classList.remove("hidden");
    twitterButton.innerHTML = "Hide Twitter Feed"
  } else {
    twitterBox.classList.add("hidden");
    twitterButton.innerHTML = "Show Twitter Feed"
  }
}

function addInvisible () {
  var promotion = document.getElementById("delivery-message");
  promotion.classList.add("invisible");

}

function removeInvisible () {
  var promotion = document.getElementById("delivery-message");
  promotion.classList.remove("invisible");
}

setInterval(addInvisible, 1000);
setInterval(removeInvisible, 2000);

var slides = 0;

function getWindowWidth(mq) {
  if (mq.matches) {
    slides = 1;// window width is at less than 570px

  }
  else {
    slides = 3;// window width is greater than 570px
    
  }
}

var mq = window.matchMedia( "(max-width: 1024px)" );
getWindowWidth(mq); // Call listener function at run time
mq.addListener(getWindowWidth); // Attach listener function on state changes



var swiper = new Swiper('.swiper-container', {
      slidesPerView: slides,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var Antwerpen = {lat: 51.219448, lng: 4.402464};
  var Kapellen = {lat: 51.313999, lng: 4.432400};
  var Beveren = {lat: 51.213249, lng: 4.258165};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 11, center: Antwerpen});

  var contentStringAntwerpen = '<div id="content-maps">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading" class="first-heading">Vape Store Antwerpen</h1>'+
      '<div id="bodyContent">'+
      '<img id="store1"src="../images/vapestore-antwerpen.jpg" alt="">'+
      '<div class="table-hours">' +
      '<p>Maandag 9u00 - 18u30</p>' +
      '<p>Dinsdag 9u00 - 18u30</p>' +
      '<p>Woensdag 9u00 - 18u30</p>' +
      '<p>Donderdag 9u00 - 18u30</p>' +
      '<p>Vrijdag 9u00 - 18u30</p>' +
      '</div>'+
      '</div>'+
      '</div>';

    var contentStringKapellen = '<div id="content-maps">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading" class="first-heading">Vape Store Kapellen</h1>'+
      '<div id="bodyContent">'+
      '<img id="store1"src="../images/vapestore-kapellen.jpg" alt="">'+
      '<div class="table-hours">' +
      '<p>Maandag 9u00 - 18u30</p>' +
      '<p>Dinsdag 9u00 - 18u30</p>' +
      '<p>Woensdag 9u00 - 18u30</p>' +
      '<p>Donderdag 9u00 - 18u30</p>' +
      '<p>Vrijdag 9u00 - 18u30</p>' +
      '</div>'+
      '</div>'+
      '</div>';

    var contentStringBeveren = '<div id="content-maps">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="first-heading" class="first-heading">Vape Store Beveren</h1>'+
      '<div id="bodyContent">'+
      '<img id="store1"src="../images/vapestore-beveren.jpg" alt="">'+
      '<div class="table-hours">' +
      '<p>Maandag 9u00 - 18u30</p>' +
      '<p>Dinsdag 9u00 - 18u30</p>' +
      '<p>Woensdag 9u00 - 18u30</p>' +
      '<p>Donderdag 9u00 - 18u30</p>' +
      '<p>Vrijdag 9u00 - 18u30</p>' +
      '</div>'+
      '</div>'+
      '</div>';

   var infowindowAntwerpen = new google.maps.InfoWindow({
     content: contentStringAntwerpen
   });

   var infowindowKapellen= new google.maps.InfoWindow({
     content: contentStringKapellen
   });

   var infowindowBeveren = new google.maps.InfoWindow({
     content: contentStringBeveren
   });

  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({position: Antwerpen, map: map});
  var marker2 = new google.maps.Marker({position: Kapellen, map: map});
  var marker3 = new google.maps.Marker({position: Beveren, map: map});

  marker1.addListener('click', function() {
    infowindowAntwerpen.open(map, marker1);
    infowindowKapellen.close(map, marker2);
    infowindowBeveren.close(map, marker3);
  });

  marker2.addListener('click', function() {
    infowindowKapellen.open(map, marker2);
    infowindowAntwerpen.close(map, marker1);
    infowindowBeveren.close(map, marker3);
  });

  marker3.addListener('click', function() {
    infowindowBeveren.open(map, marker3);
    infowindowKapellen.close(map, marker2);
    infowindowAntwerpen.close(map, marker1);
  });
}
