
fetch("predicates.txt")
.then(response => response.text())
.then(data => {

    var lines = data.split("\n");

    var totalCheckboxes = 85;

    var totalRows = 17;
    var checkboxesPerRow = 5;

    var checkboxGrid = document.getElementById("checkboxGrid");
    var checkboxIndex = 1;

    for(var row = 0; row < totalRows; row++){
        var tr = document.createElement("tr");
        for(var col= 0; col < checkboxesPerRow; col++){

            if(checkboxIndex > totalCheckboxes){
                break;
            }
            var line = lines[checkboxIndex-1].trim();
            var parts = line.split("\t");
            var number = parts[0];
            var label2 = parts[1];
            
            var td = document.createElement("td");
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = "x-encoding";
            checkbox.value = label2;
            checkbox.id = "attr"+number;
            checkbox.checked = true;
            checkbox.classList.add("awaattr");

            var label = document.createElement("label");
            label.htmlFor = "attr"+number;
            label.appendChild(document.createTextNode("\u00A0"+ label2));

            td.appendChild(checkbox);
            td.appendChild(label);
            tr.appendChild(td);

            checkboxIndex++;

        }
        
        checkboxGrid.appendChild(tr);
    }

});