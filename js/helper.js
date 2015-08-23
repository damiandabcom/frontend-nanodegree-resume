var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="white-text role">%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="blue-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item contact"><span class="blue-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item contact"><span class="blue-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item contact"><span class="blue-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item contact"><span class="blue-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item contact"><span class="blue-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item contact"><span class="blue-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<div class="avatar"><img src="%data%" class="biopic flex-item"></div>';
var HTMLquote = '<div class="welcome-message flex-item">%data% <br><span>- %author%</span></div>';

var HTMLskillsStart = '<h2 class="skills-title">Skills at a Glance:</h2><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item skill-block"><div class="skill-data">%data%</div></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="%url%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img class="project-image" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em class="major"><br>Major: %data%</em>';
var HTMLschoolCostart = '<span class="cocreated"><br>Co-created by: </span>';
var HTMLschoolCo = '<span class="cocreated"> %data%</span>';

var HTMLonlineClasses = '<h3 class="online-courses">Online Courses</h3>';
var HTMLonlineStart = '<div class="courses-entry"></div>';
var HTMLonlineTitle = '<a href="%url%">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a class="course-url" href="%url%">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
Add target blank attribute to all links. Source: stackoverflow
*/
$(function(){ // document ready

    $("a").filter(function () {
        return this.hostname && this.hostname !== location.hostname;
    }).each(function () {
        $(this).attr({
            target: "_blank",
            title: "Visit " + this.href + " (click to open in a new window)"
        });
    });

});

/*
smooth scroll to anchor. Source: css tricks
*/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

/*
Google Map
*/

var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    scrollwheel: false,
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    var locations = [];

    locations.push(bio.contacts.location);

    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */

  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // open marker

    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */

  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.

    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location

    for (var place in locations) {

      // the search request object

      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.

      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations

  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()

  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array

  pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads

window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds

window.addEventListener('resize', function(e) {

  //Make sure the map bounds get updated on page resize

  map.fitBounds(mapBounds);
});
