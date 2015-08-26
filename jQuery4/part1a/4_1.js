$(document).ready(function () {
    var xmlhttp,
        resp = '',
        i=0,
        req = '';

    function animate() {
        $('#rect1').animate({ left: '200px', opacity: '0.5', height: '100px', width: '150px' });
        $('#rect1').animate({ width: '450px' }, "slow");

        $('#rect2').animate({ left: '10px' }, "slow");
        $('#rect2').animate({ height: '80px' }, "slow");
        $('#rect2').animate({ width: '100px' }, "slow");
        $('#rect2').animate({ fontSize: '2em' }, "slow");

        $('#rect3').animate({ height: '120px', opacity: '0.4' }, "slow");
        $('#rect3').animate({ width: '200px', opacity: '0.8' }, "slow");
        $('#rect3').animate({ height: '100px', opacity: '0.4' }, "slow");
        $('#rect3').animate({ width: '100px', opacity: '0.8' }, "slow");
    }

    function showtables() {
        $('#table1').find('tr:nth-child(odd)')
            .css('background', 'gray')
            .end()
            .find('tr:nth-child(even)')
            .css('background', 'white');

        $('#table2').find('td:nth-child(odd)')
            .css('background', 'gray')
            .end()
            .find('td:nth-child(even)')
            .css('background', 'white');
    }

    function getHTTP() {
        try {
            xmlhttp = new window.ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new window.ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlhttp = false;
            }
        }
        if (!xmlhttp && XMLHttpRequest !== 'undefined') {
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    }

    req = getHTTP();
    function start() {
        req.onreadystatechange = function () {// onreadystatechange активируется при получении ответа сервера
            if (req.readyState === 4 && req.status === 200)// если запрос закончил выполняться и статус 200 (ОК) 
            {
                resp = req.responseText.split("\n");
                for (i = 0; i < resp.length; i += 1) {
                    document.getElementById("paragraph").innerHTML += resp[i] + "<br>";//добавляем рядок в текст параграфа с каждым нажатием кнопки и переходим на следующюю строку
                }
            }
        };
        req.open("GET", "4_1.txt");
        req.send();
    }

    $("button").click(function () {
        start();
        animate();
        showtables();
    });
});