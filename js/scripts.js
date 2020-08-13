
//Everything Below this line is user interface logic:
$(document).ready(function() {
  $("#userName").submit(function(event) {
    event.preventDefault();
    const userFirstName = $("input#firstname").val();
    const userLastName = $("input#lastname").val();
    const userFavFood = $("input#favfood").val();
    
    $("#return").show();  
  });
  const userMusic = $("#music").val();
  
  const how = $("input:radio[name=how]:checked").val();

  const dateOfBirth =$("#born").val();

  const favoriteColor = $("#color").val();

});

//THIS PROJECT NEEDS MORE FORM TAGS 