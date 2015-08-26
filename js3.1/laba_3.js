window.onload = function () {
    var visited = [false, false, false, false];

    function color(node) {
        var bgcolorlist = ["#DFDFFF", "#FFFFBF", "#80FF80", "#EAEAFF", "#C9FFA8", "#F7F7F7", "#FFFFFF", "#DDDD00", "#FF00FF", "#00FFFF", "#FF69B4", "#FF4500", "#FF69B4", "#008080", "#FF8C00", "#FA8072", "#7B68EE"];
        node.style.backgroundColor = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
    }

    function f1(node, index) {
        var bgcolorlist = ["#DDDD00", "#00FFFF", "#FF69B4", "#FF4500"];
        if ((index === 2) && ((visited[3] === true) || (visited[2] === true))) {
            document.getElementById('footer').style.backgroundColor = 'black';
        }
        node.style.backgroundColor = bgcolorlist[index];
        node.style.border = "8px solid black";
        node.style.height = "90px";
        node.innerHTML = '';
    }

    function f2(node, index) {
        node.style.backgroundColor = 'white';
        if ((index === 2) && ((visited[3] === false) || (visited[2] === false))) {
            document.getElementById('footer').style.backgroundColor = 'white';
        }
        switch (index) {
            case 0:
                node.innerHTML = "К";
                break;
            case 1:
                node.innerHTML = "И";
                break;
            case 2:
                node.innerHTML = "Ї";
                break;
            case 3:
                node.innerHTML = "В";
                break;
        }
        node.style.textAlign = "center";
        node.style.verticalAlign = "middle";
        node.style.fontSize = "40px";
        node.style.border = "";
        node.style.height = "90px";
    }

    document.getElementById('header').onmouseover = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        blockIndex = target.id.substring(1, 2) - 1;
        if (blockIndex < 4) {
            color(target);
        }
    };

    document.getElementById('footer').onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
         blockIndex = target.id.substring(1, 2) - 5;

        if (visited[blockIndex]) {
            f1(target, blockIndex);
            visited[blockIndex] = !visited[blockIndex];
        }
        else {
            f2(target, blockIndex);
            visited[blockIndex] = !visited[blockIndex];
        }
    };

    function drag(rect, event) {
        var startX = event.clientX,
        startY = event.clientY,
        origX = rect.offsetLeft,
        origY = rect.offsetTop,
        deltaX = startX - origX,
        deltaY = startY - origY;

        document.onmousemove = function (event) {
            event = event || window.event;
            var
            osheight = document.getElementById('center').offsetHeight,
            oswidth = document.getElementById('center').offsetWidth;

            startX = event.clientX - deltaX;
            startY = event.clientY - deltaY;

            if ((0 < startY) && (0 < startX) && ((osheight - 40) > startY) && ((oswidth - 40) > startX)) {
                rect.style.left = (event.clientX - deltaX) + "px";
                rect.style.top = (event.clientY - deltaY) + "px";
            }
        };

        document.onmouseup = function (event) {
            event = event || window.event;
            document.onmousemove = null;
        };
    }

    document.getElementById("rect").onmousedown = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        drag(target, e);
    };

    window.onresize = function () {
        var rct = document.getElementById('rect'),
         coord = document.getElementById("center");
        if ((rct.offsetLeft + 40) > coord.offsetWidth) {
            rct.style.left = coord.offsetWidth - 90 + "px";
        }
    };
};