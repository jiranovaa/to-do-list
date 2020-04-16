$('#add').click(add);

$('#task').keypress(function(e) {
    if (e.which === 13) {
        add();
    }
    });

function add() {
    var i = $('#task').val();
    if (i === '') {
        alert('Add TO DO.');
    } else {
        $('.todos-container ul').append('<li>' + i + '<div class="buttons">' + '<img src="delete-button.svg" class="delete-button">' + '<img src="tick-button.svg" class="tick-button">' + '</div>' + '</li>');
    }
}

$('.todos-container ul').on('click', '.delete-button', function() {
    $(this).parent('.buttons').parent('li').remove();
});

$('.todos-container ul').on('click', '.tick-button', function() {
    $(this).replaceWith('<img src="tick-button-2.svg" class="tick-button"></img>');
});
