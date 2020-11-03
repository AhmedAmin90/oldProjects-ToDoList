
$("ul").on("click" , "li", function(){

    $(this).toggleClass("completed");
    
});


$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
event.stopPropagation();

});

$("input").keypress(function(event){
    if(event.which === 13) {
        var newToDo = $(this).val();
        $("ul").append("<li> <span> <i class='fa fa-trash-alt'> </i> </span> " + newToDo + "</li>");
        $(this).val("");
        event.stopPropagation();
        if (newToDo === ""){
            alert("Please write yout task :) ");
            event.stopPropagation()
        }
    };
    
})

$(".fa-plus").click(function(){
$("input").fadeToggle();
})
