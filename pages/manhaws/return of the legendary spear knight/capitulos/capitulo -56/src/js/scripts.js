$(document).ready(function () {

    $('#form-enviar').submit(function (e) {
        e.preventDefault();
        var passou = 0;
        $(this).find('.requerido').each(function () {
            if ($(this).val() == '') {
                passou++;
                $(this).parent().addClass("has-error").removeClass("has-success");
            } else {
                $(this).parent().addClass("has-success").removeClass("has-error");
            }
        });
        if (passou == 0) {
            var $btn = $("button").button('loading');
            $.ajax({
                url: 'php/' + $(this).attr('id') + '.php',
                //Formulario sem arquivo
                data: $(this).serialize(),
                type: 'POST',
                dataType: "json",
                success: function (retorno) {
                    if (retorno["error"] == 0) {
                        console.log(retorno);
                        $(".recebeTexto").html(retorno["mensagem"]);
                        $(".myModal").modal('show');
                        $btn.button('reset');
                        $('.form')[0].reset();
                        $('input.requerido').parent().removeClass("has-success");
                    } else {
                        console.log(retorno);
                        $(".recebeTexto").html(retorno["mensagem"]);
                        $(".myModal").modal('show');
                        $btn.button('reset');
                    }
                }
            });
        }
    });


    $('.buscaManga').keyup(function () {
        $('#mangas').hide();
        $('#mangas').html('');
        $('.load').show();
        busca = $(this).val();
        $.ajax({
            url: 'php/busca-mangas.php',
            //Formulario sem arquivo
            data: { busca: busca },
            type: 'POST',
            dataType: "html",
            success: function (retorno) {
                $('#mangas').html(retorno);
                $('#mangas').fadeIn(500);
                $('.load').hide();
            }
        });
        $('.load').hide();
    });

    $('.subir').click(function () { $('html, body').stop().animate({ scrollTop: "0px" }, 1500); });

    $('#slide').carousel({
        interval: 15000
    });
    $('.item:first-child').addClass('active');


    //LEITOR
    //MODO DE LEITURA
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    modoAtual = getCookie("modoLeitura");
    if (modoAtual == "") {
        document.cookie = "modoLeitura=1";
        modoLeitura = getCookie("modoLeitura");
    } else {
        modoLeitura = getCookie("modoLeitura");
    }

    if (modoLeitura == 1) {
        // Modo 1
        $('.img-manga').hide();
        $('.img-manga:first-child').show();
        setTimeout(function () {
            $('.btn-nav').show();
        }, 1000);
        $('.img-manga:first-child').attr('pg', 'firstPg').addClass('active');;
        $('.img-manga:last-child').attr('pg', 'lastPg');
        $('.btn-next-cap').hide();
    } else if (modoLeitura == 2) {
        //Modo2
        $('.btn-nav').hide();
        $('.img-manga').show();
        $('.btn-next-cap').show();
    }


    $('#modo_leitura').change(function () {
        modoLeitura = $(this).val();
        if (modoLeitura == 1) {
            // Modo 1
            document.cookie = "modoLeitura=1";
            $('.img-manga').hide();
            $('.img-manga:first-child').show();
            setTimeout(function () {
                $('.btn-nav').show();
            }, 1000);
            $('.img-manga:first-child').attr('pg', 'firstPg').addClass('active');;
            $('.img-manga:last-child').attr('pg', 'lastPg');
            $('.btn-next-cap').hide();
        } else if (modoLeitura == 2) {
            //Modo2
            document.cookie = "modoLeitura=2";
            $('.btn-nav').hide();
            $('.img-manga').show();
            $('.btn-next-cap').show();
        }
    });

    modoAtual2 = getCookie("modoEscuro");
    if (modoAtual == "") {
        document.cookie = "modoEscuro=2";
        modoEscuro = getCookie("modoEscuro");
    } else {
        modoEscuro = getCookie("modoEscuro");
    }

    $('.escurecer').click(function () {
        $('body').css({ 'background': '#000000' });
        $(this).hide();
        $('.clarear').show();
        document.cookie = "modoEscuro=2";
    });

    $('.clarear').click(function () {
        $('body').css({ 'background': '#ffffff' });
        $(this).hide();
        $('.escurecer').show();
        document.cookie = "modoEscuro=1";
    });

    if (modoEscuro == 1) {
        $('.escurecer').show();
        $('.clarear').hide();
        $('body').css({ 'background': '#ffffff' });
    } else if (modoEscuro == 2) {
        $('.escurecer').hide();
        $('.clarear').show();
        $('body').css({ 'background': '#000000' });
    }


    $('#capitulo_trocar').change(function () {
        capitulo = $(this).val();
        mangaUrl = $('#mangaUrl').text();
        window.location = '/capitulos/' + mangaUrl + '/' + capitulo;
    });

    numeroUrl = $('#numeroUrl').text();
    $('.listCap').each(function () {
        atualCap = $(this).val();
        if (atualCap == numeroUrl) {
            proximoCap = $(this).next().val();
            anteriorCap = $(this).prev().val();
        }
    });
    mangaUrl = $('#mangaUrl').text();
    lastCap = $('.listCap:last-child').val();
                   /*MENSAGEM LER PROXIMO CAPITULO*/
    function nextPage() {
        if ($('.active').attr('pg') == "lastPg") {
            if (numeroUrl != lastCap) {
                swal({
                    title: "Fim do capi­tulo",
                    text: "Deseja ler o proximo?",
                    type: "success",
                    confirmButtonColor: "#000000",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                }, function () {
                    window.location = './capitulo2.html';
                });
            } else {
                swal({
                    title: "você leu o ultimo capitulo",
                    confirmButtonColor:"#800000"
                });
            }
        } else {
            $('html,body').animate({ scrollTop: $('.backTop').offset().top }, 150);
            $('.btn-prev').removeAttr('disabled', 'disabled');
            pgAtual = $('.active').attr('pag');
            pgNext = parseInt(pgAtual) + 1;
            $('#paginaAtual').text(pgNext);
            $('.active').stop().hide().removeClass('active');
            $('img[pag=' + pgNext + ']').stop().fadeIn().addClass('active');
            $('#paginas').val(pgNext).trigger('change');
        }
    }
                       /*MENSAGEM LER PROXIMO CAPITULO*/
    function prevPage() {
        if ($('#paginaAtual').text() == 1) {
            $('.btn-prev').attr('disabled', 'disabled');
        } else {
            $('html,body').animate({ scrollTop: $('.backTop').offset().top }, 150);
            pgAtual = $('.active').attr('pag');
            pgPrev = parseInt(pgAtual) - 1;
            $('#paginaAtual').text(pgPrev);
            $('.active').stop().hide().removeClass('active');
            $('img[pag=' + pgPrev + ']').stop().fadeIn().addClass('active');
            $('#paginas').val(pgPrev).trigger('change');
        }
    }

    $('.btn-next').click(function (e) {
        e.preventDefault();
        nextPage();
    });

    $('.btn-prev').click(function (e) {
        e.preventDefault();
        prevPage();
    });

    $('.img-manga').click(function (e) {
        e.preventDefault();
        if (modoLeitura == 1) {
            nextPage();
        }
    })


    $(document).keydown(function (e) {
        if (modoLeitura == 1) {
            switch (e.which) {
                case 37: // left
                    prevPage();
                    break;

                case 39: // right
                    nextPage();
                    break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
        }
    });




    $('#paginas').change(function (e) {
        e.preventDefault();
        pg = $(this).val();
        $('#paginaAtual').text(pg);
        $('.active').hide().removeClass('active');
        $('img[pag=' + pg + ']').stop().fadeIn().addClass('active');
    });
});