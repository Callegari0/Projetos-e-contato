$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {               // se rolar 40px ativa o evento
        $(".header-div-principal-flex").addClass("scroll");    //coloca a classe "ativo" no id=menu
    } else {
        $(".header-div-principal-flex").removeClass("scroll"); //se for menor que 40px retira a classe "ativo" do id=menu
    }
});