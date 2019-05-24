$(document).ready(function () {

    //Create function to happen when clicked on the magnify item on the html
    $("#magnify").click(function() {
       //hides the magnify div
        $(this).hide();

        //display the search bar
        $("#search").toggle("scale");

        //change the css assign to the search bar
        $("#search").css("display", "block;");
    });
});

