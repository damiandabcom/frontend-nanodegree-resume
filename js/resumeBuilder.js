/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Damian Dabrowski",
  "role": "Front-End Developer",
  "contacts": {
   "mobile": "+49 1573 938 22 11",
   "email": "damiandabcom@gmail.com",
   "github": "damiandabcom",
   "twitter": "damiandabcom",
   "location": "Berlin"
  },
  "welcomeMessage": "Hello Everyone!",
  "skills": ["HTML5", "CSS3", "JavaScript", "JQuery", "Drupal", "WordPress"],
  "bioPic": "images/fry.jpg"
}

var education = {
  "schools": [
    {
     "name": "Freie Uni",
     "city": "Berlin, DE",
     "degree": "None",
     "major": "Computer Science"
    },
    {
     "name": "Hochschule für Wirtschaft und Technik",
     "city": "Berlin, DE",
     "degree": "None",
     "major": "Media Computing"
    }
    ],
    "onlineCourses": [
    {
     "title": "Complete Web Developer Course",
     "school": "Udemy",
     "dates": "2014",
     "urls": "www.udemy.com"
    },
    {
     "title": "Growth Hacker",
     "school": "OneMonth",
     "dates": "2015",
     "urls": "www.onemonth.com"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Metapartner",
      "title": "Media and Web Designer",
      "location": "Berlin",
      "dates": "2013-2015",
      "description": "Media Design, Web Design and Development, Drupal and WordPress CMS"
    },
    {
      "employer": "Viralstream",
      "title": "Technical Lead",
      "location": "Berlin",
      "dates": "2010-2013",
      "description": "Voice-Over Recording and Video Editing"
    }
  ]
}

var projects =  {
  "projects": [
    {
      "title": "Fruittree.io",
      "dates": "2014",
      "description": "Web App: Inbound Blog Engine",
      "images": [
        "images/proj1-1.jpg",
        "images/proj1-2.jpg"
      ]
    },
    {
      "title": "Metapartner",
      "dates": "2015",
      "description": "WordPress Web Agency",
      "images": [
        "images/proj2-1.jpg",
        "images/proj2-2.jpg"
      ]
    }
  ]
}

var formattedname = HTMLheaderName.replace("%data%", bio.name);
var formattedrole= HTMLheaderRole.replace("%data%", bio.role);
var formattedpic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
$("#header").append(formattedpic);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile)
$("#topContacts").append(formattedmobile);
var formattedemail = HTMLmobile.replace("%data%", bio.contacts.email)
$("#topContacts").append(formattedemail);

if(bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  for(skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

projects.display = function()  {

  for(project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    }
}

projects.display();



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName() {
  var names = bio.name.trim().split(" ");
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  var newName = names.join(" ");
  return newName;
}
