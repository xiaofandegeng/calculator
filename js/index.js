var result = '';
var flag = false;
var last = "";
$(document).ready(function () {
    $('button').click(function () {
        var str = $(this).attr('value');
        if (parseInt(str) == str || str === '.' || str  === '+' || str === '-' || str  === '*' || str  === '/' || str === '%') {
            if (flag === false) {
                result += str;
                $('.screen').val(result);
            } else {
                result = str;
                $('.screen').val(result);
                flag = false;
            }
        }else if (str === 'AC') {
            result = '';
            $('.screen').val('');
        }else if (str === 'CE') {
            result = result.slice(0, -1);
            $('.screen').val(result);
        }else if (str === '=') {
            last = eval(result);
            $('.screen').val(last);
            flag = true;
        }
    });
});