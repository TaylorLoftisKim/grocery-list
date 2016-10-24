$(document).ready(function()  {
  $(".list").submit(function(event){
  event.preventDefault();
debugger;

  var items = ["item1", "item2", "item3"];
  var upperList = [];

  items.forEach(function(item)  {
    var userInput = $("input#" + item).val();
    upperList.push(userInput.toUpperCase());
});
    upperList.sort();

  $("form").hide();
  $(".item1").text(upperList[0]);
  $(".item2").text(upperList[1]);
  $(".item3").text(upperList[2]);

  });

});
