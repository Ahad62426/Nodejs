$(function () {
    $.getJSON('api', updateData);

    $('.form').submit(function (e) {
        //e.preventDefault();
        $.post('api', {
            fname: $('#fname').val(),
            lname: $('#lname').val(),
            email: $('#email').val()
        }, updateData);
    });

    $('.data').on('click', function (e) {
        if (e.target.className == 'delete') {
            $.ajax({
                url: 'api/' + e.target.id,
                type: 'DELETE',
                success: updateData
            }); //ajax
        }
    });

    function updateData(data) {
        var output = '';
        $.each(data, function (key, item) {
            if (key == 0) {
                output += `
                <tr>
                    <th>Names</th>
                    <th>Emails</th>
                </tr>`;
            }
            output += `
            <tr>
                <td>${item.fname} ${item.lname}</td>
                <td>${item.email}</td>
                <td id="del"><div><span id="' + key + '" class="delete">Delete</span></div></td>
            </tr>`;
        });
        if (output == '') {
            output += `
                <tr>
                    <th>Names</th>
                    <th>Emails</th>
                </tr>`;
        }
        $('.data').html(output);
    }

});