window.onload = function () {
    function AddAnimal(name, mammal, swimmer) {
        this.name = name;
        this.mammal = mammal;
        this.swimmer = swimmer;
    }
    var
        elephant = new AddAnimal('elephant', true, false),
        dog = new AddAnimal('dog', true, true),
        cat = new AddAnimal('cat', true, false),
        snake = new AddAnimal('snake', false, true),
        whale = new AddAnimal('whale', true, true),
        cheetah = new AddAnimal('cheetah', true, false),
      showButton = document.getElementById('show'),
      newText = document.getElementById('showText'),
    mas = [elephant, dog, cat, snake, whale, cheetah];

    function showAnimals(useFilters) {
        var
            i = 0, display, description,
            cb1Checked = document.getElementById("chb1").checked,
            cb2Checked = document.getElementById("chb2").checked,
            names = "";
        for (i = 0; i < mas.length; i++) {
            display = false;
            if (cb1Checked && cb2Checked) {
                display = mas[i].swimmer && mas[i].mammal;
            }
            else if (cb1Checked && !cb2Checked) {
                display = mas[i].mammal;
            }
            else if (!cb1Checked && cb2Checked) {
                display = mas[i].swimmer;
            }
            else {
                useFilters = false;
            }
            if (!useFilters || display) {
                description = " (" + (mas[i].mammal ? "Mammal " : "") + (mas[i].swimmer ? "Swimmer " : "") + ")";
                names += "<li>" + mas[i].name + " " + description + "</li>";
            }
        }
        newText.innerHTML = "<ul>" + names + "</ul>";
    }

    document.getElementById('chb1').onclick = function () {
        showAnimals(true);
    };
    document.getElementById('chb2').onclick = function () {
        showAnimals(true);
    };

    showButton.onclick = function () {
        if (showButton.getAttribute("value") === "hide") {
            newText.style.visibility = 'hidden';
            showButton.setAttribute("value", "show");
        }
        else if (showButton.getAttribute("value") === "show") {
            newText.style.visibility = 'visible';
            showButton.setAttribute("value", "hide");
        }
    };

    showAnimals(false);
};