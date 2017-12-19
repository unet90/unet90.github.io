$(document).ready(function() {

    $("#contact-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "database/contact.php",
            cache: "false",
            dataType: "html",
            beforeSend: function () {
                $("#submit_contact").attr ("disabled", "disabled");  
            },
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#contact-form").trigger("reset");
        });
        return false;
    });

});