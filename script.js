var Task1_side1;
var Task1_side2;
var Task1_angle;
var t2_R;
var t3_vr;
var t3_hr;
var t4_A;
var t5_A;
var t5_B;
var t6_A;
var t6_B;
var numInputs;
var results;
var state;
function InputData()
{
    Task1_side1 = document.getElementById("T1_1");
    Task1_side2 = document.getElementById("T1_2");
    Task1_angle = document.getElementById("T1_3");
    t2_R = document.getElementById("T2_1");
    t3_vr = document.getElementById("T3_1");
    t3_hr = document.getElementById("T3_2");
    t4_A = document.getElementById("T4_1");
    t5_A = document.getElementById("T5_1");
    t5_B = document.getElementById("T5_2");
    t6_A = document.getElementById("T6_1");
    t6_B = document.getElementById("T6_2");
    numInputs = document.querySelectorAll('input[type=number]');
    results = document.querySelectorAll("span");
    state = 0;
}
function moment(){
    InputData();
    if(state==0){
        numInputs.forEach(element => {
            element.addEventListener('input', calc);
        });
        state=1;
    }
    else{
        numInputs.forEach(element => {
            element.removeEventListener('input', calc);
        });
        state=0;
    }
    
}
function calc(){
    InputData();
    if(Task1_side1.value>0&&Task1_side2.value>0&&Task1_angle.value<180&&Task1_angle.value>0){
        results[0].innerText=Math.abs((Task1_side1.value*Task1_side2.value*Math.sin(Task1_angle.value))).toFixed(2);
        results[1].innerText=(results[0].innerHTML/Task1_side1.value).toFixed(2);
    }
    else{
        results[0].innerText="-";
        results[1].innerText="-";       
    }
    if(t2_R.value>0){
        results[2].innerText=(t2_R.value*t2_R.value*Math.PI).toFixed(2);
        results[3].innerText=(2*(t2_R.value*Math.PI)).toFixed(2);
    }
    else{
        results[2].innerText="-";
        results[3].innerText="-";
    }  
    if(t3_vr.value>0&&t3_hr.value>0){
        results[4].innerText=(Math.PI*t3_vr.value*t3_hr.value).toFixed(2);
        results[5].innerText=(2*Math.PI*Math.sqrt((t3_vr.value*t3_vr.value+t3_hr.value*t3_hr.value)/8)).toFixed(2);
    }
    else{
        results[4].innerText="-";
        results[5].innerText="-";
    }
    if(t4_A.value>0){
        results[6].innerText=(Math.SQRT2*t4_A.value).toFixed(2);
        results[7].innerText=(t4_A.value*t4_A.value).toFixed(2);
    }
    else{
        results[6].innerText="-";
        results[7].innerText="-";
    }
    if(t5_A.value>0&&t5_B.value>0){
        results[8].innerText=(Math.sqrt(t5_A.value*t5_A.value+t5_B.value*t5_B.value)).toFixed(2);
        results[9].innerText=(t5_A.value*t5_B.value).toFixed(2);
    }
    else{
        results[8].innerText="-";
        results[9].innerText="-";
    }
    if(t6_A.value>0&&t6_B.value>0){
        results[10].innerText=(Math.sqrt(t6_A.value*t6_A.value+t6_B.value*t6_B.value)).toFixed(2);
        results[11].innerText=(Math.atan(t6_A.value/t6_B.value)*180/Math.PI).toFixed(2);
        results[12].innerText=(Math.atan(t6_B.value/t6_A.value)*180/Math.PI).toFixed(2);
        results[13].innerText=90;
        results[14].innerText=(t6_A.value*t6_B.value/2).toFixed(2);
        results[15].innerText=(+results[14].innerText/+results[10].innerText).toFixed(2);
    }
    else{        
        results[10].innerText="-";
        results[11].innerText="-";
        results[12].innerText="-";
        results[13].innerText="-";
        results[14].innerText="-";
        results[15].innerText="-";        
    }
}
