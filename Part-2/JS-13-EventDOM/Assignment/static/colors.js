function changeColor1(){
  /*   //alert("Test Case 123")
    let ref=document.getElementById('btn1')
    console.log(ref)
    //ref.innerHTML="GM"
    ref.style.backgroundColor="Yellow"; */
    document.getElementById('btn1').style.backgroundColor="Yellow"
}
function changeColor2(){
    document.getElementsByTagName('button')[1].style.backgroundColor="blue"
}

function changeColor3(){
  document.querySelector('.btn3').style.backgroundColor="Yellow"
  /* //alert("Test Case 124")
  let ref=document.querySelector('.btn3')
  console.log(ref)
  //.style.backgroundColor="yellow" */
}
function changeColor4(){
  document.getElementsByClassName('btn4')[0].style.backgroundColor="green"
}

function changeColor5(){
  //alert("Tst case 123")
  document.getElementById('frm1').style.backgroundColor="yellow"
}
/* function changeCase(){
  //alert("Test 444")
  let name=document.getElementById('frm2').value;
  //document.getElementById('frm2').value="Rajni Kanth;"
  document.getElementById('frm2').value=name.toUpperCase();
} */

function changeCase(){
  let name=document.getElementById('frm2').value;
  document.getElementById('frm2').value=name.toUpperCase();
}