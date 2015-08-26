$(document).ready(function () {
    var
       input = $('input'),
       errs = [],
       button = $(':button'),
       i = 0,
       str, strId,
       nameRegular = /^[A-Z][a-z]+$/,
       emailRegular = /^[A-Za-z0-9_\-]+@([a-zA-Z_]+?\.)+[a-zA-Z]{2,3}$/,
       passwordRegular = /^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/,
       phoneRegular = /^\+044[0-9]{7}$/,
       regulars = [emailRegular, passwordRegular, nameRegular, phoneRegular];

    function CheckEls() {
        for (i = 0; i < input.length - 1; i += 1) {
            errs[i] = input[i].getAttribute('data-message-id');
            str = errs[i].toString();
            strId = $('#' + str);
            if (!regulars[i].test(input[i].value)) {
                input[i].style.borderColor = "red";
                input[i].style.background = "red";
                strId[0].style.visibility = "visible";
            }
            else {
                input[i].style.borderColor = "black";
                input[i].style.background = "white";
                strId[0].style.visibility = 'hidden';
            }
        }
    }
    button.on("click", CheckEls);
});