/*  Name: Zhu Lu 
    Email: Zhu_lu@student.uml.edu
*/
function calc() {
    var minValue = parseInt(document.querySelector("#minValue").value);
    var maxValue = parseInt(document.querySelector("#maxValue").value);
    var minRowValue = parseInt(document.querySelector("#minRowValue").value);
    var maxRowValue = parseInt(document.querySelector("#maxRowValue").value);
    var value1 = minValue;
    var value2 = minRowValue;
    checkForm();
    createTable(minValue,maxValue,minRowValue,maxRowValue);
}
function remove(){
    //make a new div in g the replace body with g
    var body = document.getElementById("result");
    var g = document.createElement('div');
    g.setAttribute("id", "result");
    body.replaceWith(g);
}
 //This function creates a table with the 4 variable are put in
function createTable(minValue,maxValue,minRowValue,maxRowValue){
    //This function will replace reuslt with a new div with the same id  and replace the current with it
    remove();
    checkForm();
    if ($("#myForm").valid()){
    var body = document.getElementById("result");

    var table = document.createElement('TABLE');

    var tableB = document.createElement('TBODY');

    table.appendChild(tableB);
     //Vertical
    for (var i = minRowValue; i <= maxRowValue + 1; i++)
    {
        //Create the rows
        var tr = document.createElement('TR');
        //Append the rows to the body
        tableB.appendChild(tr);
        
        //Horazontal
        for (var x = minValue; x <= maxValue + 1; x++)
        {
            var td = document.createElement('TD');
            if(i == minRowValue && x == minValue)
            {
                td.innerHTML = "Mult"

            }else if(i == minRowValue && x >= minValue){
                td.innerHTML = x - 1;
            }else if(x == minValue && i >= minRowValue){
                td.innerHTML = i - 1;
            }else{
                td.innerHTML = (i - 1) * (x -1);
            }
            tr.appendChild(td);
        }

    }
    //Append the table to the body
    body.appendChild(table);
}
}
//}
//when everything is loaded
//the ID that is named slider become a slider with value between -50.50 and each step is 1 and the starting value is 0
$(document).ready(function(){
    $('#slider').slider({
        min:-50,
        max:50,
        step: 1,
        value: 0,
        //for the slider the minValue is set to the value of the slider and this applys for slider2 3 and 4
        slide: function(event, ui){  
            $("#minValue").val(ui.value);
            checkForm();
            calc();
        }
    });
    $('#slider2').slider({
        min:-50,
        max:50,
        step: 1,
        value: 0,
        slide: function(event, ui){
            $("#maxValue").val(ui.value);
            checkForm();
            calc();
        }
    });
    $('#slider3').slider({
        min:-50,
        max:50,
        step: 1,
        value: 0,
        slide: function(event, ui){
            $("#minRowValue").val(ui.value);
            checkForm();
            calc();
        }
    });
    $('#slider4').slider({
        min:-50,
        max:50,
        step: 1,
        value: 0,
        slide: function(event, ui){
            $("#maxRowValue").val(ui.value);
            checkForm();
            calc();
        }
    });
    //This make the minValue text input to change when the slider is set and when the slider are change then it will check the form and it will generate the table
    $("#minValue").change(function (){
        $("#slider").slider("value",$("#minValue").val());
        checkForm();
        calc();
    })
    $("#maxValue").change(function (){
        $("#slider2").slider("value",$("#maxValue").val());
        checkForm();
        calc();
    })
    $("#minRowValue").change(function (){
        $("#slider3").slider("value",$("#minRowValue").val());
        checkForm();
        calc();
    })
    $("#maxRowValue").change(function (){
        $("#slider4").slider("value",$("#maxRowValue").val());
        checkForm();
        calc();
    })
});
//this will delate all the li and div with the class of tab
function deleteAll(){
    $(".tab").remove();
    $("#tabs").tabs("destroy");
    $("#tabs").tabs();
    $("#tabs").tabs("refresh");
}; 

$(document).ready(function() {
     calc();
     checkForm();
     $("#tabs").tabs();
     $("#tabs").tab("refresh");
   });
   //function will check and validates the form and all of its input values
   function checkForm() {
    //when it is checking for the id myform it will have rules of what the minValue maxValue minRowValue MaxRowValue will be
    //the rules are that it will require a input and it has to be a number and the number has to be -50 to 50 and it needs to be less then some value
   $("#myForm").validate({    
           rules: {
               minValue: {
                   required: true,
                   number: true,
                   min: -50,
                   max: 50,
                   lessThan: "#maxValue"
               },
               maxValue: {
                   required: true,
                   number: true,
                   min: -50,
                   max: 50,
                   greaterThan: "#minValue"
                   
               },
               minRowValue: {
                   required: true,
                   number: true,
                   min: -50,
                   max: 50,
                   lessThan: "#maxRowValue"
               },
               maxRowValue: {
                   required: true,
                   number: true,
                   min: -50,
                   max: 50,
                   greaterThan: "#minRowValue"
               },
           },
           messages: {
               minValue: {
                   min: "The MinValue number is too low. Please enter a number between -50 and 50.",
                   max: "The MinValue number is too high. Please enter a number between -50 and 50.",
                   number: "MinValue's value is not a number between -50 and 50. Please correct it.",
                   required: "You have not entered a value in the MinValue input field. Please input a number bewteen -50 and 50.",
                   lessThan: "MinValue's value should be less than or equal to the MaxValue's value."
               },
               maxValue: {
                   min: "The MaxValue number is too low. Please enter a number between -50 and 50.",
                   max: "The MaxValue number is too high. Please enter a number between -50 and 50.",
                   number: "MaxValue's Value is not a number between -50 and 50. Please correct it.",
                   required: "You have not entered a value in the MaxValue input field. Please input a number bewteen -50 and 50.",
                   greaterThan: "MaxValue's value should be greater than or equal to the MinValue's value."
               },
               minRowValue: {
                   min: "The minRowValue is too low. Please enter a number between -50 and 50.",
                   max: "TheminRowValue is too high. Please enter a number between -50 and 50.",
                   number: "minRowValue is not a number between -50 and 50. Please correct it.",
                   required: "You have not entered a value in the minRowValue input field. Please input a number bewteen -50 and 50.",
                   lessThan: "Min Row's value should be less than or equal to the MaxRowvalue."
               },
               maxRowValue: {
                   min: "The maxRowValue is too low. Please enter a number between -50 and 50.",
                   max: "The maxRowValue is too high. Please enter a number between -50 and 50.",
                   number: "maxRowValue is not a number between -50 and 50. Please correct it.",
                   required: "You have not entered a value in the maxRowValue input field. Please input a number bewteen -50 and 50.",
                   greaterThan: "Max Row's value should be greater than or equal to the minRowValue"
               },
           }    
        //This checks to see if one value is less then another basic when min is less then the max
         });
         $.validator.addMethod("lessThan",
         function (value, element, param) {
               var $otherElement = $(param);
               return parseInt(value, 10) <= parseInt($otherElement.val(), 10);
         });
         $.validator.addMethod("greaterThan",
         function (value, element, param) {
               var $otherElement = $(param);
               return parseInt(value, 10) >= parseInt($otherElement.val(), 10);
         });
        }

        //Tab start here
        $(function(){
            var tab = $("#tabs").tabs();
            tab.on("click","span.ui-icon-close",function(){
            var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
            $( "#" + panelId ).remove();
            tabs.tabs( "refresh" );
            })
            
        });
        
        var rand = 0;
        function createTabs(){
            checkForm();

            if ($("#myForm").valid()){

            var minValue = parseInt(document.querySelector("#minValue").value);
            var maxValue = parseInt(document.querySelector("#maxValue").value);
            var minRowValue = parseInt(document.querySelector("#minRowValue").value);
            var maxRowValue = parseInt(document.querySelector("#maxRowValue").value);
            var value1 = minValue;
            var value2 = minRowValue;
            //This function will replace reuslt with a new div with the same id  and replace the current with it
           $("ul").append("<li class = \"tab\"><span class=\"ui-icon ui-icon-close\" role=\"presentation\">Remove Tab</span><a href=\"" + '#' + "tab" + rand + "\"> " + "[" + minValue + "]"+ "[" + maxValue + "]" + "[" + minRowValue + "]"+ "[" + maxRowValue + "]" +  "</a></li>");
            $("div#tabs").append("<div class = \"tab\" id = \"" + "tab" + rand + "\"> </div>");
            //I need to get the first element of the body
            var body = document.getElementById("tab" + rand);
            var table = document.createElement('TABLE');
        
            var tableB = document.createElement('TBODY');
        
            table.appendChild(tableB);
             //Vertical
            for (var i = minRowValue; i <= maxRowValue + 1; i++)
            {
                //Create the rows
                var tr = document.createElement('TR');
                //Append the rows to the body
                tableB.appendChild(tr);
                
                //Horazontal
                for (var x = minValue; x <= maxValue + 1; x++)
                {
                    var td = document.createElement('TD');
                    if(i == minRowValue && x == minValue)
                    {
                        td.innerHTML = "Mult"
        
                    }else if(i == minRowValue && x >= minValue){
                        td.innerHTML = x - 1;
                    }else if(x == minValue && i >= minRowValue){
                        td.innerHTML = i - 1;
                    }else{
                        td.innerHTML = (i - 1) * (x -1);
                    }
                    tr.appendChild(td);
                }
        
            }
            //Append the table to the body
            body.appendChild(table);
            rand = rand + 1;
            $("#tabs").tabs("destroy");
            $("#tabs").tabs();
            $("#tabs").tabs("refresh");
        }
        }