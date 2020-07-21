function add() {
    let t = $('#task');
    let i = t.val();
    let alert = '<div class="alert-container">' + '<p class="alert-message">The TO DO field cannot be empty.</p>' + '<div class="arrow-up"></div>' + '</div>';

    if (i !== '') {
        removeAlert();
        $('.todos-container ul').append('<li>' + i + '<div class="buttons">' + '<img src="delete-button.svg" class="delete-button">' + '<img src="tick-button.svg" class="tick-button">' + '</div>' + '</li>');

        t.val('');
    } else {
        // alert('The TO DO field cannot be empty.');
        $('.todo').append(alert);
        $('#task').addClass('highlighted');
    }
}

function removeAlert() {
    $('.alert-container').remove();
    $('#task').removeClass('highlighted');
}

$('#add').click(add);

$('#task').keypress(function(e) {
    if (e.which === 13) {
        add();
    }
    });

$('.todos-container ul').on('click', '.delete-button', function() {
    $(this).parent('.buttons').parent('li').remove();
});

$('.todos-container ul').on('click', '.tick-button', function() {
    $(this).parent('.buttons').parent('li').addClass("done");
    $(this).replaceWith('<img src="tick-button-2.svg" class="tick-button2"></img>');
});

$('.todos-container ul').on('click', '.tick-button2', function() {
    $(this).parent('.buttons').parent('li').removeClass("done");
    $(this).replaceWith('<img src="tick-button.svg" class="tick-button"></img>');
});
