$(document).ready(function() {

    $("#comment").submit(function() {
        $.ajax({
            type: "POST",
            url: "database/comment.php",
            cache: "false",
            dataType: "html",
            beforeSend: function () {
                $("#submit_contact").attr ("disabled", "disabled");  
            },
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#comment").trigger("reset");
        });
        return false;
    });

});