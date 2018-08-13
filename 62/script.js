(function () {
    'use strict';

    const body = $('#body');
    const form = $('<form id="addContactForm">'
    + '<div>'
    + '<label for="first">First</label><input type="text" id="first">'
    + '</div>'
    + '<div class="formGroup">'
    + '<label for="last">Last</label><input type="text" id="last" required>'
    + '</div>'
    + '<div class="formGroup">'
    + '<label for="email">Email</label><input type="email" id="email">'
    + '</div>'
    + '<div class="formGroup">'
    + '<label for="phone">Phone</label><input type="text" id="phone">'
    + '</div>'
    + '<div class="buttons">'
    + '<label for="check">Check if You Agree</label><input type="checkbox" id="check" >'
    + '<br><button type="submit" id="submit">Submit</button>'
    + '</div>'
    + '</form>');

    body.append(form);

    const first = $('#first');
    const last = $('#last');
    const email = $('#email');
    const phone = $('#phone');

    const table = $('<table id="table">'
    + '<thead>'
    + '<tr>'
    + '<th>First Name</th>'
    + '<th>Last Name</th>'
    + '<th>Email</th>'
    + '<th>Phone</th>'
    + '</tr>'
    + '</thead>'
    + '<tbody id = "tbody">'
    + '</tbody>'
    + '</table>');
    body.append(table);
    const tableBody = $('#tbody');

    table.hide();

    const check = $('#check');

    form.on('submit', (event) => {
        if (check[0].checked) {
            console.log('hello bello');
            tableBody.append(`<tr>
            <td>${first.val()}</td>
            <td>${last.val()}</td>
            <td>${email.val()}</td>
            <td>${phone.val()}</td>
            </tr>`);
            console.log(tableBody);
            table.show();
            event.preventDefault();
        } else {
            event.preventDefault();
        }
    });
}());
