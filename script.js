$("button").click(function() {
    var name = $(".ageInput").val();
    var age = parseInt($(".age").val());
    var futureAge = age+5;
    var name = $(".name").val();
    var years = $(".years").val();
    $("P").text("Hello you are "+age+". In five years it will be the year 2024 and you will be "+ futureAge +" years of age " + name);
   
}); 