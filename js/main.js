$(document).ready(function() {

// GitHub Personal url //

 $.ajax({
  headers: {"Authorization": "token da0b79579f918477519b2ca2f8e540ae5b4828b9"},
  url: "https://api.github.com/users/joeygaskin",
  type: "GET",
}).then(function(data){

var url = "https://api.github.com/users/joeygaskin";
$.ajax(url).then(function(response) {
console.log(response.avatar_url)
 $(".sidebar").append('<img src="' + response.avatar_url +'"/>');
})

$.ajax(url).then(function(response) {
console.log(response.login)
 $(".sidebar li").append('<h1>' + response.login + '</h1>');
})

});


$.ajax({
 headers: {"Authorization": "token da0b79579f918477519b2ca2f8e540ae5b4828b9"},
 url: "https://api.github.com/users/joeygaskin",
 type: "GET",
}).then(function(data){

var url = "https://api.github.com/users/joeygaskin";
$.ajax(url).then(function(response) {
console.log(response)
var source = $('#user-template').html();
var usertemplate = Handlebars.compile(source);
 $('.user-info').html(usertemplate(response));

 });
 });




// GitHub Repositiory API url //

   $.ajax({
    headers: {"Authorization": "token da0b79579f918477519b2ca2f8e540ae5b4828b9"},
    url: "https://api.github.com/users/joeygaskin/repos",
    type: "GET",

}).then(function(data){
//console.log(data);

var url = "https://api.github.com/users/joeygaskin/repos";
$.ajax(url).then(function(response) {
response.forEach(function(responses) {
console.log(responses)
var source = $('#repo-template').html();
var template = Handlebars.compile(source);
 $('.repositories ul').append(template(responses));

})
 });
 });
 });
