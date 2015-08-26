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


    var req = getHTTP();
    function start() {
        req.onreadystatechange = function () {// onreadystatechange активируется при получении ответа сервера
            var info,
                propt,
                valCol,
                propCol;
            if (req.readyState === 4 && req.status === 200)// если запрос закончил выполняться и статус 200 (ОК) 
            {
                info = JSON.parse(req.responseText);
                for (propt in info) {
                    if (info.hasOwnProperty(propt)) {
                        propCol = document.createElement("p");
                        valCol = document.createElement("p");
                        document.getElementById("properties").appendChild(propCol);
                        document.getElementById("values").appendChild(valCol);
                        document.getElementById("properties").innerHTML += propt + "<br>";
                        document.getElementById("values").innerHTML += info[propt] + "<br>";
                    }
                }
                document.getElementById('btn').style.visibility = 'hidden';
            }
        };
        req.open("GET", "json1.json");
        req.send();
    }
    if (document.addEventListener) {
        document.getElementById('btn').addEventListener("click", start, false);
    } else if (document.attachEvent) {
        document.getElementById("btn").attachEvent("onclick", start);
    }
};