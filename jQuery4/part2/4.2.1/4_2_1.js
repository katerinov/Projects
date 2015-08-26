$(document).ready(function () {
    $("#rect").draggable({
        containment: "parent"
    });

    var visited = [false, false, false, false],
        i = 0,
        topNodes = $("#header")[0].children,
        botNodes = $("#footer")[0].children;

    function color(node) {
        var bgcolorlist = ["#DFDFFF", "#FFFFBF", "#80FF80", "#EAEAFF", "#C9FFA8", "#F7F7F7", "#FFFFFF", "#DDDD00", "#FF00FF", "#00FFFF", "#FF69B4", "#FF4500", "#FF69B4", "#008080", "#FF8C00", "#FA8072", "#7B68EE"];
        node.style.backgroundColor = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)];
    }

    function f1(node, index) {
        var bgcolorlist = ["#DDDD00", "#00FFFF", "#FF69B4", "#FF4500"];
        if ((index === 2) && ((visited[3] === true) || (visited[2] === true))) {
            $('#footer')[0].style.backgroundColor = 'black';
        }
        node.style.backgroundColor = bgcolorlist[index];
        node.style.border = "8px solid black";
        node.style.height = "90px";
        node.innerHTML = '';
    }

    function f2(node, index) {
        node.style.backgroundColor = 'white';
        if ((index === 2) && ((visited[3] === false) || (visited[2] === false))) {
            $('#footer')[0].style.backgroundColor = 'white';
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

    function mouseover(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        blockIndex = target.id.substring(1, 2) - 1;
        if (blockIndex < 4) {
            color(target);
        }
    }

    function click(e) {
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
    }
    for (i = 0; i < topNodes.length; i += 1) {
        $(topNodes[i]).on("mouseenter", mouseover);
        $(botNodes[i]).on("click", click);
    }
});
$(window).resize(function () {
    var rct = $("#rect")[0],
    coords = $("#rect")[0].parentNode.offsetWidth;
    if (rct.offsetLeft + 50 > coords) {
        rct.style.left = coords - rct.offsetWidth - 90 + 'px';
    }
});