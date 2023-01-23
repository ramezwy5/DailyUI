const buttons = $("button");
const numbers = $(".number");
const display = $("#display");
const functions = $(".function");
let num1 = 5;
let num2 = 9;

    
$(buttons).click( e => {
    
    let key = $(e.target);
    const keyValue = key.html();
    let displayValue = display.html();


    if(key.attr("data-number")){

        key.attr("data-number", () => {
            num1 = keyValue;
            if(displayValue == 0){
                display.html(num1);
            }else{
                display.html(displayValue + num1);
            }
        })
        
    }else if(key.attr("data-function")){
        fnc = key.id;
        operation(fnc);

     }
    
})



function operation(fnc){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let total;
    switch(fnc){
        case "cancel":
            num1 = 0;
            num2 = 0;
            display.html(num1)
            break;
        case "del":
            display.html(num1.toString().slice(0, -1));
            break;
        case "percent":
            total = num1 * (num2 /100);
            display.html(total);
            break;
        case "divide":
            total = num1 / num2;
            display.html(total);
            break;
        case "multi":
            total =  num1 * num2;
            display.html(total);
            break;
        case "sub":
            total =  num1 - num2;
            display.html(total);
            break;
        case "add":
            total = num1 + num2;
            display.html(total);
            break;
    }
}