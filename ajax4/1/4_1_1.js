window.onload = function () {

    function getHTTP() {
        var xmlhttp;

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

    var i = 0,
    row = '',
    req = getHTTP();
    req.open("GET", "4_1_1.txt");
    req.send();
    req.onreadystatechange = function () {// onreadystatechange активируется при получении ответа сервера
        if (req.readyState === 4 && req.status === 200)// если запрос закончил выполняться и статус 200 (ОК) 
        {
            row = req.responseText.split("\n");
            for (i = 0; i < row.length; i += 1) {
                document.getElementById("poem").innerHTML += row[i] + "<br>";//добавляем рядок в текст параграфа с каждым нажатием кнопки и переходим на следующюю строку
            }
            document.getElementById("poem").innerHTML += "That's it :)" + "<br>";
        }
    };
};
