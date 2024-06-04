
$(document).ready(function(){
    
    $('#addNewList').click(function(){

        var getLists = $('#getList').val();

        if (getLists != "") {
            
            var createItem = $('<li>&nbsp;&nbsp;&nbsp;').text(getLists);

            var createDeleteBtn = $('<button>').addClass('deleteBtn','alignVtn').text('Delete');

            createItem.append(createDeleteBtn);

            $('.list').append(createItem);

            $('#getList').val("");

        }

    });

    $(document).on('click', '.deleteBtn', function(){

        $(this).parent().remove();

    });


});

