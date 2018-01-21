$(document).ready(function(){
var equation= "";
$('#screen').html(equation);

    $('.1').click(function(){
       equation += 1;
       $('#screen').html(equation);
    });

    $('.2').click(function(){
       equation += 2;
       $('#screen').html(equation);
    });

    $('.3').click(function(){
       equation += 3;
       $('#screen').html(equation);
    });

    $('.4').click(function(){
       equation += 4;
       $('#screen').html(equation);
    });

    $('.5').click(function(){
       equation += 5;
       $('#screen').html(equation);
    });

    $('.6').click(function(){
       equation += 6;
       $('#screen').html(equation);
    });

    $('.7').click(function(){
       equation += 7;
       $('#screen').html(equation);
    });

    $('.8').click(function(){
       equation += 8;
       $('#screen').html(equation);
    });

    $('.9').click(function(){
       equation += 9;
       $('#screen').html(equation);
    });

    $('.zero').click(function(){
       equation += 0;
       $('#screen').html(equation);
    });

    $('.dot').click(function(){
      if(equation[equation.length-1]=="."){}
      else{
       equation += ".";
       $('#screen').html(equation);
      }
    });

    $('.plus').click(function(){
      if(equation[equation.length-1]=="+"
      || equation[equation.length-1]=="-"
      || equation[equation.length-1]=="*"
      || equation[equation.length-1]=="/"
      || equation[equation.length-1]=="."){}
      else{
       equation += "+";
       $('#screen').html(equation);
     }
    });

    $('.minus').click(function(){
      if(equation[equation.length-1]=="+"
      || equation[equation.length-1]=="-"
      || equation[equation.length-1]=="*"
      || equation[equation.length-1]=="/"
      || equation[equation.length-1]=="."){}
      else{
       equation += "-";
       $('#screen').html(equation);
     }
    });

    $('.mul').click(function(){
      if(equation[equation.length-1]=="+"
      || equation[equation.length-1]=="-"
      || equation[equation.length-1]=="*"
      || equation[equation.length-1]=="/"
      || equation[equation.length-1]=="."){}
      else{
       equation += "*";
       $('#screen').html(equation);
     }
    });

    $('.div').click(function(){
      if(equation[equation.length-1]=="+"
      || equation[equation.length-1]=="-"
      || equation[equation.length-1]=="*"
      || equation[equation.length-1]=="/"
      || equation[equation.length-1]=="."){}
      else{
       equation += "/";
       $('#screen').html(equation);
     }
    });

    $('.clear').click(function(){
       equation = "";
       $('#screen').html(equation);
    });

    $('.equal').click(function(){
        equation = eval(equation);
        $('#screen').html(equation);


    });














})
