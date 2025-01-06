// calculator

var displayValues = document.getElementById("outPut");
var numbersKey    = document.querySelectorAll(".n_key");

// Click events 

let mainArr = [];


function calulation(button){
    let buttonValue = button.value; 
   
    display = mainArr.join('')
    
     if(buttonValue>=0 && buttonValue<=9||buttonValue ==="+"||buttonValue === '-'||buttonValue ==='/'||buttonValue ==='*'|buttonValue ==="."){
    mainArr.push(buttonValue)
    displayValues.value = mainArr.join('')
    }else if(buttonValue == "RESET"){
        mainArr =[]
        displayValues.value=mainArr.join('')
    }else if(buttonValue == "DEL" || button.key =="Backspace" ||button.key =="Delete"){
        mainArr.pop()
        displayValues.value=mainArr.join('')
    }else if(buttonValue == "="||button.key == "Enter"){
        let operation=eval(mainArr.join(''));
        mainArr =[];
        mainArr.push(operation);
        displayValues.value =operation;
    }else if(button.key>=0 && button.key<=9 ||button.key =="+"||button.key === '-'||button.key ==='/'||button.key ==='*'|button.key ==="."){
        mainArr.push(button.key)
    displayValues.value = mainArr.join('')
        
    }
    

}


numbersKey.forEach(button => button.addEventListener('click',()=>calulation(button)))



document.addEventListener("keydown",(event)=>{
   console.log(event)
   calulation(event)
})


// THEME
const theme = document.querySelector(".t-sub")
const themes1 = document.querySelectorAll('.t-main, .container2,.container3')

// .addEventListener("click",function(event){
//     console.log(event.this)
// })
main();
function main() {
    let a = 0;
    theme.onclick = function () {
        a++;
        if (a == 1) {
           

            theme2();
        }
        else if (a == 2) {
           
            theme3();
        }
        else {
            a = 0;
            reset();
        }
    }
}

const themes = document.querySelector(".theme");
const theme2_font = document.querySelectorAll(".t1");
const theme2_hover = document.querySelectorAll(".s_btn");
const theme2_btn = document.querySelectorAll(".n_key");
const theme_btn1_hover = document.querySelector(".equal")
function theme2() {
    theme.classList.add("theme_1ani");
    themes.classList.add("theme_1");
    theme2_font.forEach((el) => {
        el.classList.add("theme_1font_color");
    });
    themes1.forEach((event) => {
        event.classList.add("theme_1continerback")
    });
    document.querySelector(".d-in-ot").classList.add("theme2_d");
    theme2_btn.forEach((event) => {
        event.classList.add("theme2_btn")
    })
    theme2_hover.forEach((event) => {
        event.classList.add("theme2_btn_hover")
    });
    theme_btn1_hover.classList.add("theme2_btn1_hover")
}


function theme3() {
    theme.classList.add("theme_2ani");
    themes.classList.add("theme_2");
    theme2_font.forEach((event) => {
        event.classList.add("theme3_font");
    });
    themes1.forEach((event) => {
        event.classList.add("theme3_background")
    });
    document.querySelector(".d-in-ot").classList.add("theme3_background_d");
    theme2_btn.forEach((event) => {
        event.classList.add("theme3_btn_background");
    });
    theme2_hover.forEach((event) => {
        event.classList.add("theme3_btn_background_new")
    })
    theme_btn1_hover.classList.add("theme3_equal_color")
}



function reset() {
    theme.classList.remove("theme_2ani");
    theme.classList.remove("theme_1ani");
    themes.classList.remove("theme_1");
    themes.classList.remove("theme_2");
    themes1.forEach((event) => {
        event.classList.remove("theme_1continerback")
    })
    theme2_font.forEach((el) => {
        el.classList.remove("theme_1font_color");
    });
    document.querySelector(".d-in-ot").classList.remove("theme2_d")
    theme2_btn.forEach((event) => {
        event.classList.remove("theme2_btn")
    })
    theme2_hover.forEach((event) => {
        event.classList.remove("theme2_btn_hover")
    });
    themes1.forEach((event) => {
        event.classList.remove("theme3_background")
    });
    theme_btn1_hover.classList.remove("theme2_btn1_hover")
    theme2_font.forEach((event) => {
        event.classList.remove("theme3_font");
        document.querySelector(".d-in-ot").classList.remove("theme3_background_d");

    })
    theme2_btn.forEach((event) => {
        event.classList.remove("theme3_btn_background")
    });
    theme2_hover.forEach((event) => {
        event.classList.remove("theme3_btn_background_new")
    });
    theme_btn1_hover.classList.remove("theme3_equal_color")
}