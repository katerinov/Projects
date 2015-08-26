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
    var
        req = getHTTP();
    function showXML() {
        var xmlDoc, xmlAuthors, xmlAuthor, xmlName, xmlBiography;
        req.open("GET", "4_1_3.xml", false);
        req.send();
        if (req.readyState === 4 && req.status === 200) {
            xmlDoc = req.responseXML;
            xmlAuthors = xmlDoc.getElementsByTagName("author");
            if (xmlAuthors.length > 0) {
                xmlAuthor = xmlAuthors[0];
                xmlAuthor.normalize();
                xmlName = xmlAuthor.getElementsByTagName('name')[0];
                document.getElementById("name").innerHTML = xmlName.firstChild.nodeValue;
                xmlBiography = xmlAuthor.getElementsByTagName('biography')[0];
                document.getElementById("biography").innerHTML = xmlBiography.firstChild.nodeValue;
            }
        }
        else {
            alert('XML load error: req.readyState=' + req.readyState + ', req.status=' + req.status);
        }
    }

    if (document.addEventListener) {
        document.getElementById('btn').addEventListener("click", showXML, false);
    } else if (document.attachEvent) {
        document.getElementById("btn").attachEvent("onclick", showXML);
    }
};