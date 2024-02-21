if ($(".mobile-menu-btn").length > 0) {
    $(".mobile-menu-btn").on("click",function(){
        $(this).find("svg").toggleClass("hidden")
        $(".mobile-menu").toggleClass("show")
    })
}