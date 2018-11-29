"use strict";

let test = true;
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];

function markXorO(element){
    if(element.textContent == ''){
        if(test == true){
            element.textContent = "X";
            test = false;
            switch(element.id){
                case "button1":
                    arr1.push("X");
                    arr4.push("X");
                    arr7.push("X");
                    break;     
                case "button2":
                    arr1.push("X");
                    arr5.push("X");
                    break;     
                case "button3":
                    arr1.push("X");
                    arr6.push("X");
                    arr8.push("X");
                    break;     
                case "button4":
                    arr2.push("X");
                    arr4.push("X");
                    break;     
                case "button5":
                    arr2.push("X");
                    arr5.push("X");
                    arr7.push("X");
                    arr8.push("X");
                    break;     
                case "button6":
                    arr2.push("X");
                    arr6.push("X");
                    break;     
                case "button7":
                    arr3.push("X");
                    arr4.push("X");
                    arr8.push("X");
                    break;     
                case "button8":
                    arr3.push("X");
                    arr5.push("X");
                    break;     
                case "button9":
                    arr3.push("X");
                    arr6.push("X");
                    arr7.push("X");
                    break;     
            }     
        } else{
            element.textContent = "O";
            test = true;
            switch(element.id){
                case "button1":
                    arr1.push("O");
                    arr4.push("O");
                    arr7.push("O");
                    break;     
                case "button2":
                    arr1.push("O");
                    arr5.push("O");
                    break;     
                case "button3":
                    arr1.push("O");
                    arr6.push("O");
                    arr8.push("O");
                    break;     
                case "button4":
                    arr2.push("O");
                    arr4.push("O");
                    break;     
                case "button5":
                    arr2.push("O");
                    arr5.push("O");
                    arr7.push("O");
                    arr8.push("O");
                    break;     
                case "button6":
                    arr2.push("O");
                    arr6.push("O");
                    break;     
                case "button7":
                    arr3.push("O");
                    arr4.push("O");
                    arr8.push("O");
                    break;     
                case "button8":
                    arr3.push("O");
                    arr5.push("O");
                    break;     
                case "button9":
                    arr3.push("O");
                    arr6.push("O");
                    arr7.push("O");
                    break;     
            }     
        }
    }else {
        alert("uzimtas")
    }
    if((arr1[0] == arr1[1] && arr1[1] == arr1[2] && arr1.length > 0) ||
        (arr2[0] == arr2[1] && arr2[1] == arr2[2] && arr2.length > 0) ||
        (arr3[0] == arr3[1] && arr3[1] == arr3[2] && arr3.length > 0) ||
        (arr4[0] == arr4[1] && arr4[1] == arr4[2] && arr4.length > 0) ||
        (arr5[0] == arr5[1] && arr5[1] == arr5[2] && arr5.length > 0) ||
        (arr6[0] == arr6[1] && arr6[1] == arr6[2] && arr6.length > 0) ||
        (arr7[0] == arr7[1] && arr7[1] == arr7[2] && arr7.length > 0) ||
        (arr8[0] == arr8[1] && arr8[1] == arr8[2] && arr8.length > 0)){
        alert('laimejo ' + element.textContent);
    }
    console.log(arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8);
}

let reset = () => {
    window.location.reload();
}

