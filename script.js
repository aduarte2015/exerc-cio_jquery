$(document).ready(function() {
    $('#todoForm').submit(function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        var taskName = $('#taskInput').val();
        if (taskName.trim() !== '') {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskInput').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
