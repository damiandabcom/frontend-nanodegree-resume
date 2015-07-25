/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Damian Dabrowski";
var role = "Front-End Developer";

var formattedname = HTMLheaderName.replace("%data%", name);
var formattedrole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedrole);
$("#header").prepend(formattedname);
