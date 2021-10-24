$(function () {
    /*menu-burger*/

    const burger = document.querySelector('.menu__burger');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__link');
    const body = document.querySelector('body');

    burger.onclick = function () {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    };

    menuLink.forEach(function (item) {
        item.onclick = function () {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('active');
        };
    })

    /*---------*/

    /*E-mail Ajax Send*/

    const sendForm = document.querySelector('.send-form')
    const sendFormInput = document.querySelectorAll('.send-form-input')
    const contactBtn = document.querySelector('.contact__btn')

    sendFormInput.forEach(function (item) {
        item.addEventListener('click', function () {
            sendForm.classList.add('hidden');
            sendForm.classList.remove('send-form-appear');
        })
    })

    $("form").submit(function() { //Change
        let th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            sendForm.classList.remove('hidden');
            sendForm.classList.add('send-form-appear');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    /*--------------*/

})
