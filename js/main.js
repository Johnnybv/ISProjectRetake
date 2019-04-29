$(document).ready(function(){
    let items = [];
    items.push(new Entree("Steak",234,"Entree","TBone"));
    items.push(new Entree("Frank and Beens",234,"Entree","Hot Dogs and Beans"));
    items.push(new Entree("Vege Plate",234,"Entree","Null"));
    items.push(new Entree("Master Eater",234,"Entree","TBone, Hot Dogs and Beans"));
    items.push(new Entree("Scrambler",234,"Entree","Bacon or sausage"));
    items.push(new Dessert("Apple pie",234,"Dessert",true, false));
    items.push(new Dessert("Chocolate Cake",234,"Dessert",true, false));
    items.push(new Dessert("Ice Cream",234,"Dessert",true, true));
    items.push(new Dessert("Apple Tart",234,"Dessert",false, true));
    items.push(new Dessert("Cookie",234,"Dessert",false, false));

    let output1 = "<table><tr><th>Food Name</th><th>Calories</th><th>Protein</th></tr>";
    let output2 = "<table><tr><th>Food Name</th><th>Calories</th><th>Dairy Free</th><th>Gluten Free</th></tr>";
    let output3 = "<table><tr><th></th><th>Entrees</th><th>Desserts</th></tr>";
    let totalEntrees = 0, totalDesserts = 0, totalCaloriesE = 0, totalCaloriesD = 0;

    for(var i = 0; i < items.length; i++){
        if(items[i].foodType == "Entree"){
            output1 += "<tr>";
            output1 += "<td>" + items[i].name + "</td>";
            output1 += "<td>" + items[i].calories + "</td>";
            output1 += "<td>" + items[i].protein + "</td>";
            output1 += "</tr>";

            totalEntrees++;
            totalCaloriesE += items[i].calories;
        }
        if(items[i].foodType == "Dessert"){   
            output2 += "<tr>";
            output2 += "<td>" + items[i].name + "</td>";
            output2 += "<td>" + items[i].calories + "</td>";
            if (items[i].dairyFree){
                output2 += "<td>&#10004;</td>";
            }
            else{
                output2 += "<td></td>";
            }
            if (items[i].glutenFree){
                output2 += "<td>&#10004;</td>";
            }
            else{
                output2 += "<td></td>";
            }
            output2 += "</tr>";

            totalDesserts++;
            totalCaloriesD += items[i].calories;
        }
    }

    output3 += "<tr><td>Total Items </td><td>"+ totalEntrees +"</td><td>"+ totalDesserts +"</td></tr>";
    output3 += "<tr><td>Total Calories </td><td>"+ totalCaloriesE +"</td><td>"+ totalCaloriesD +"</td></tr>";
    output3 += "<tr><td>Average Calories </td><td>"+ totalCaloriesE/totalEntrees +"</td><td>"+ totalCaloriesD/totalDesserts +"</td></tr>";

    $('#listEntrees').append(output1 + "</table>");
    $('#listDesserts').append(output2 + "</table>");
    $('#summaryOutput').append(output3 + "</table>");

    $('#entreeMeat').show();
    $('#dessertFree').hide();

    $('.formRadio').change(function(){
        if ($(this).val() == 'entree' ){
            $('#entreeMeat').show();
            $('#dessertFree').hide();
        }
        else if ($(this).val() == 'dessert' ){
            $('#entreeMeat').hide();
            $('#dessertFree').show();
        }
    });

    $('#myForm').submit(function(e){
        e.preventDefault();
        if ($('.formRadio:checked').val() == 'entree'){
            items.push(new Entree(($('#name').val()),(+$('#calories').val()),"Entree",($('#protein').val())));
        }
        if($('.formRadio:checked').val() == 'dessert'){
            items.push(new Dessert(($('#name').val()),(+$('#calories').val()),"Dessert", ($('#dairyFree').is(':checked')), ($('#glutenFree').is(':checked'))));
        }

    $('#listEntrees').html("");
    $('#listDesserts').html("");
    $('#summaryOutput').html("");

    let output1 = "<table><tr><th>Food Name</th><th>Calories</th><th>Protein</th></tr>";
    let output2 = "<table><tr><th>Food Name</th><th>Calories</th><th>Dairy Free</th><th>Gluten Free</th></tr>";
    let output3 = "<table><tr><th></th><th>Entrees</th><th>Desserts</th></tr>";
    let xtotalEntrees = 0, xtotalDesserts = 0, xtotalCaloriesE = 0, xtotalCaloriesD = 0;

    for(var i = 0; i < items.length; i++){
        if(items[i].foodType == "Entree"){
            output1 += "<tr>";
            output1 += "<td>" + items[i].name + "</td>";
            output1 += "<td>" + items[i].calories + "</td>";
            output1 += "<td>" + items[i].protein + "</td>";
            output1 += "</tr>";

            xtotalEntrees++;
            xtotalCaloriesE += items[i].calories;
            console.log(xtotalCaloriesE);
        }
        if(items[i].foodType == "Dessert"){   
            output2 += "<tr>";
            output2 += "<td>" + items[i].name + "</td>";
            output2 += "<td>" + items[i].calories + "</td>";
            if (items[i].dairyFree){
                output2 += "<td>&#10004;</td>";
            }
            else{
                output2 += "<td></td>";
            }
            if (items[i].glutenFree){
                output2 += "<td>&#10004;</td>";
            }
            else{
                output2 += "<td></td>";
            }
            output2 += "</tr>";

            xtotalDesserts++;
            xtotalCaloriesD += items[i].calories;
        }
    }

    output3 += "<tr><td>Total Items </td><td>"+ xtotalEntrees +"</td><td>"+ xtotalDesserts +"</td></tr>";
    output3 += "<tr><td>Total Calories </td><td>"+ xtotalCaloriesE +"</td><td>"+ xtotalCaloriesD +"</td></tr>";
    output3 += "<tr><td>Average Calories </td><td>"+ xtotalCaloriesE/xtotalEntrees +"</td><td>"+ xtotalCaloriesD/xtotalDesserts +"</td></tr>";

    $('#listEntrees').append(output1 + "</table>");
    $('#listDesserts').append(output2 + "</table>");
    $('#summaryOutput').append(output3 + "</table>");
   
        $('#myForm').each(function(){
            this.reset();
        });
    });

    $('.onlyDessert').change(function(){
        $('#listDesserts').html("");
        let output2 = "<table><tr><th>Food Name</th><th>Calories</th><th>Dairy Free</th><th>Gluten Free</th></tr>";
        if(($('#dairy').is(':checked')) && ($('#gluten').is(':checked'))){
            for(var i = 0; i < items.length; i++){
                if(items[i].foodType == "Dessert"){   
                    output2 += "<tr>";
                    if(items[i].dairyFree || items[i].glutenFree){
                        output2 += "<td>" + items[i].name + "</td>";
                        output2 += "<td>" + items[i].calories + "</td>";
                        if (items[i].dairyFree){
                            output2 += "<td>&#10004;</td>";
                        }
                        else{
                            output2 += "<td></td>";
                        }
                        if (items[i].glutenFree){
                            output2 += "<td>&#10004;</td>";
                        }
                        else{
                            output2 += "<td></td>";
                        }
                    }
                    output2 += "</tr>";
                }
            }
        }
        else if (($('#dairy').is(':checked'))){
            for(var i = 0; i < items.length; i++){
                if(items[i].foodType == "Dessert"){   
                    output2 += "<tr>";
                    if(items[i].dairyFree){
                        output2 += "<td>" + items[i].name + "</td>";
                        output2 += "<td>" + items[i].calories + "</td>";
                        if (items[i].dairyFree){
                            output2 += "<td>&#10004;</td>";
                        }
                        else{
                            output2 += "<td></td>";
                        }
                        if (items[i].glutenFree){
                            output2 += "<td>&#10004;</td>";
                        }
                        else{
                            output2 += "<td></td>";
                        }
                    }
                    output2 += "</tr>";
                }
            }
        }
        else if (($('#gluten').is(':checked'))){
            for(var i = 0; i < items.length; i++){
                if(items[i].foodType == "Dessert"){   
                    output2 += "<tr>";
                    if(items[i].glutenFree){
                        output2 += "<td>" + items[i].name + "</td>";
                        output2 += "<td>" + items[i].calories + "</td>";
                        if (items[i].dairyFree){
                            output2 += "<td>&#10004;</td>";
                        }
                        else{
                            output2 += "<td></td>";
                        }
                        if (items[i].glutenFree){
                            output2 += "<td>&#10004;</td>";
                        }
                        else{
                            output2 += "<td></td>";
                        }
                    }
                    output2 += "</tr>";
                }
            }
        }
        else {
            for(var i = 0; i < items.length; i++){
                if(items[i].foodType == "Dessert"){   
                    output2 += "<tr>";
                    output2 += "<td>" + items[i].name + "</td>";
                    output2 += "<td>" + items[i].calories + "</td>";
                    if (items[i].dairyFree){
                        output2 += "<td>&#10004;</td>";
                    }
                    else{
                        output2 += "<td></td>";
                    }
                    if (items[i].glutenFree){
                        output2 += "<td>&#10004;</td>";
                    }
                    else{
                        output2 += "<td></td>";
                    }
                    output2 += "</tr>";
                }
            }
        }

        $('#listDesserts').append(output2 + "</table>");
    });

});

class Food {
    constructor(name, calories, foodType) {
        this.name = name;
        this.calories = calories;
        this.foodType = foodType;
    }
}

class Entree extends Food {
    constructor(name, calories, foodType, protein) {
        super(name, calories, foodType);
        this.protein = protein;
    }
}

class Dessert extends Food {
    constructor(name, calories, foodType, dairyFree, glutenFree) {
        super(name, calories, foodType);
        this.dairyFree = dairyFree;
        this.glutenFree = glutenFree;
    }
}