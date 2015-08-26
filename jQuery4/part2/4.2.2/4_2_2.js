$(document).ready(function () {
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
      newText = $('#showText'),
    mas = [elephant, dog, cat, snake, whale, cheetah],
    showButton = $(':button')[0],
    checkBoxes = $(":checkbox").get();

    function showAnimals(useFilters) {
        var
            i = 0, display, description, ul,
            cb1Checked = checkBoxes[0].checked,
            cb2Checked = checkBoxes[1].checked,
            names = "";

        newText.empty();
        ul = newText.append("<ul>");
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
            if (!useFilters || display) {
                description = " (" + (mas[i].mammal ? "Mammal " : "") + (mas[i].swimmer ? "Swimmer " : "") + ")";
                names += "<li>" + mas[i].name + " " + description + "</li>";
            }
        }

        ul.append(names);
    }

    checkBoxes[0].onclick = function () {
        showAnimals(true);
    };
    checkBoxes[1].onclick = function () {
        showAnimals(true);
    };

    showButton.onclick = function () {
        if (showButton.getAttribute("value") === "hide") {
            newText[0].style.display = 'none';

            showButton.setAttribute('value', 'show');
        }
        else if (showButton.getAttribute("value") === "show") {
            newText[0].style.display = 'block';
            showButton.setAttribute('value', 'hide');
        }
    };

    showAnimals(false);
});