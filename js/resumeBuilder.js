var bio = {
  "name": "Damian Dabrowski",
  "role": "Front-End Engineer",
  "contacts": {
    "mobile": "+49 1573 938 22 11",
    "email": "damian@damiandab.com",
    "github": "damiandabcom",
    "twitter": "@damiandabcom",
    "location": "Berlin, Germany"
  },
  "quote": "\"The programmers of tomorrow are the wizards of the future. You’re going to look like you have magic powers compared to everybody else.\"",
  "author": "Gabe Newell, Founder and President, Valve",
  "avatar": "images/damiand.jpg",
  "skills": [ "HTML & CSS (including Bootstrap)", "JavaScript", "jQuery", "HTML5 Canvas", "Critical Rendering Path", "60FPS Rendering", "JavaScript Web App Frameworks (Knockout)", "JavaScript Testing Frameworks (Jasmine)", "Object-Oriented Programming", "Chrome Developer Tools"]
};

var education = {
  "schools": [
    {
     "name": "Udacity",
     "city": "Mountain View, CA, United States",
     "degree": "Nanodegree Front-End Developer",
     "dates": "2015",
     "major": "Web Development - Online University",
     "url": "http://www.udacity.com",
     "cocreated": ["AT&T", "Google", "Hack Reactor", "Github"]
    }
    ],
    "onlineCourses": [
    {
      "title": "Growth Hacker",
      "school": "OneMonth",
      "dates": "2015",
      "url": "http://www.onemonth.com"
    },
    {
      "title": "Complete Web Developer Course",
      "school": "Udemy",
      "dates": "2014",
      "url": "http://www.udemy.com"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Wilanow Academy",
      "title": "Vice-President",
      "location": "Warsaw, Poland",
      "dates": "2015",
      "description": "Projects Management and Development",
      "url": "http://www.akademiawilanowska.pl"
    },

    {
      "employer": "Metapartner",
      "title": "Media and Web Designer",
      "location": "Berlin, Germany",
      "dates": "2013-2015",
      "description": "Media Design, Web Design and Development, Drupal and WordPress CMS",
      "url": "https://www.metapartner.com"
    },
    {
      "employer": "Viralstream",
      "title": "Technical Lead",
      "location": "Berlin, Germany",
      "dates": "2010-2013",
      "description": "Voice-Over Recording and Video Editing",
      "url": "http://viralstrea.com"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Fruittree.io",
      "dates": "2014",
      "description": "Inbound Blog Engine - Web App:Logo, Webdesign, WPMU based Website, Product Development",
      "images": [
        "images/fruittree-1.jpg",
        "images/fruittree-2.jpg"
      ],
      "url": "http://fruittree.io"
    },
    {
      "title": "Metapartner",
      "dates": "2013",
      "description": "Agency Website: Logo, Webdesign, Cloud Hosting, WordPress based Website, Business and Product Developemnt, Marketing, Advertising",
      "images": [
        "images/metapartner-1.jpg",
        "images/metapartner-2.jpg"
      ],
      "url": "https://www.metapartner.com"
    }
  ]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole= HTMLheaderRole.replace("%data%", bio.role);
  var formattedPic = HTMLbioPic.replace("%data%", bio.avatar);
  var formattedQuote = HTMLquote.replace("%data%", bio.quote).replace("%author%", bio.author);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#welcome").append(formattedPic);
  $("#welcome").append(formattedQuote);

  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedEmail);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedTwitter);

  $("#footerContacts").append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedTwitter);

  if(bio.skills.length > 0) {
    $("#skill").append(HTMLskillsStart);

    for(var skill in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
};

work.display = function() {
  for (var job in work.jobs) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};

projects.display = function()  {
  for(var project in projects.projects) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("%url%", projects.projects[project].url);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);

    for (var image in projects.projects[project].images) {
      var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImages);
    }
  }
};

education.display = function() {
  for(var school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("%url%", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

    $(".education-entry:last").append(formattedName+formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
    $(".education-entry:last").append(HTMLschoolCostart);

    for(var cocreator in education.schools[school].cocreated) {
      var formattedCocreated = HTMLschoolCo.replace("%data%", education.schools[school].cocreated[cocreator]);
      $(".education-entry:last").append(formattedCocreated);
    }
  }

  $("#education").append(HTMLonlineClasses);

  for( var course in education.onlineCourses) {
    $("#education").append(HTMLonlineStart);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("%url%", education.onlineCourses[course].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("%url%", education.onlineCourses[course].url);

    $(".courses-entry:last").append(formattedTitle+formattedSchool);
    $(".courses-entry:last").append(formattedDate);
    $(".courses-entry:last").append(formattedUrl);
  }
};

function inName() {
  var names = bio.name.trim().split(" ");
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  var newName = names.join(" ");
  return newName;
}

bio.display();
work.display();
projects.display();
education.display();
//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
