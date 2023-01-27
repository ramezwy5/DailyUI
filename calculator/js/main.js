const buttons = $("button");
const numbers = $(".number");
const display = $("#display");
const functions = $(".function");
let num1 = "0";
let num2 = "0";

    
$(buttons).click( e => {
    
    const key = $(e.target);
    const keyValue = key.html();
    let displayValue = display.html();


    key.setTimeOut(() => key.toggleClass("clicked"), 800);

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
    
        let fn = key.attr("id");
        const taskKey = key.attr("data-function");
        if(taskKey === "task"){
            task(fn);
        
        }
        if(taskKey === "calc"){
            display.html('');
            num2 = keyValue;
            display.html(displayValue + num2);
            
        }
        if(taskKey === "equals"){
            calculat(fn);
        }
    }
     
    
})

function task(fnc){
    switch(fnc){
        case "cancel":
            num1 = 0;
            num2 = 0;
            display.html('0')
            break;
        case "del":
            display.html(display.html() - num1);
            break;
    }
}



function calculat(fnc){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let total;
    switch(fnc){
    
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