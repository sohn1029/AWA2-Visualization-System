
fetch("classes.txt")
.then(response => response.text())
.then(data => {

    var lines = data.split("\n");

    var totalRadiobuttons = 50;

    var totalRows = 5;
    var radiobuttonsPerRow = 10;

    var radiobuttonGrid = document.getElementById("radiobuttonGrid");
    var radiobuttonIndex = 1;

    for(var row = 0; row < totalRows; row++){
        var tr = document.createElement("tr");
        for(var col= 0; col < radiobuttonsPerRow; col++){

            if(radiobuttonIndex > totalRadiobuttons){
                break;
            }
            var line = lines[radiobuttonIndex - 1].trim();
            var parts = line.split("\t");
            var number = parts[0];
            var label2 = parts[1];

            var td = document.createElement("td");
            var radiobutton = document.createElement("input");
            radiobutton.type = "checkbox";
            radiobutton.name = "y-encoding";
            radiobutton.value = label2;
            radiobutton.id = "class"+number;
            radiobutton.checked = true;
            radiobutton.classList.add("awaclass");

            var label = document.createElement("label");
            label.htmlFor = "class"+number;
            label.appendChild(document.createTextNode("\u00A0"+ label2));

            td.appendChild(radiobutton);
            td.appendChild(label);
            tr.appendChild(td);

            radiobuttonIndex++;

        }
        
        radiobuttonGrid.appendChild(tr);
    }

});




