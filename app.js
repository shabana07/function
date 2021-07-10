// chapter 38-42
//Q:1


// function getNumber(a,b){
//     return Math.pow(a, b);
// }
// document.getElementById('pow').innerText = 'a = 3, '+'b = 4 , '+'a raised to b = '+ getNumber(3,4);

// Q: 2 

// var years = prompt('Enter a year');
// function leapYear(){
//         switch (years%2){
//             case 0:
//                 document.write('The year is a leap year')
//             break;
//             default:
//                 document.write('The year is not a leap year')
//         }

//     }
// leapYear()

// Q: 3 

// var a = 5;
// var b = 4;
// var c = 7;
// function firstFun(){
//     var s = ( a + b + c ) / 2;
//     return s ;
// }
// var first= firstFun();
// function secondFun(s){
//     document.write('a = '+a +'<br />b = '+b +'<br />c = '+c +
//     '<br />The area of a triangle is ' +s*((s-a)*(s-b)*(s-c)));
// }
// secondFun(first)

// Q: 4 

// var english = +prompt('Enter English marks here.');
// var maths = +prompt('Enter Maths marks here.');
// var urdu = +prompt('Enter Urdu marks here.');

// function average(){
//     var average = Math.round((english + maths + urdu)/3);
//     return average
// }
// var subjectsAver = average();
// function percent(){
//     var percent =Math.round(((english+maths+urdu)*100)/300);
//     return percent;
// }
// var subjectPercent = percent();
//  function mainFunction(average,percent){

//      document.write('Average is ' +subjectsAver+'<br />Percentage is '+subjectPercent);
//  }
//  mainFunction();

// Q: 5

// var str = " You have learned the function indexOf...";
// function index(){
//    document.write(str +'<br />Index of (f) is ' +str.indexOf('f'))
// }
// index()

// Q: 6 

// var str = 'delete all vowels sentence';
// function vowel() {
//     for (var i = 0; i < str.length; i++) {
//             var a = str.replace(/a/g, '');
//                var e = a.replace(/e/g, '');
//                var i = e.replace(/i/g, '');
//                var o = i.replace(/o/g, '');
//                var u = o.replace(/u/g, '');
//             document.write('main sentence: '+str);
//             document.write('<br />deleting vowels: '+u)
//             break;
//         }
// }
// vowel()


// Q: 7 

//  var str = 'Pleases read this application and give me gratuity';
//  function occur(){
//      var b = str.match(/ea/g);
//      document.write('Main STRING : '+str+
//      '<br/> Occurrence of "ea" : '+b.length);
//  }
//  occur()

// Q :8. .

// var distance = +prompt('Enter distance in kilometer');
// function calculate(){
// var kmTometer = distance*1000;
// var kmFeet = distance*3280.8;
// var kmInch = distance*39370.1;
// var kmCm = distance*100000;

// document.write(distance +' km' +'<br />Kilometer to meter : '+kmTometer+
// '<br />Kilometer to feet : '+kmFeet+
// '<br />Kilometer to inches : '+kmInch+
// '<br />Kilometer to centimeter : '+kmCm)
// }
// calculate();

//Q: 9 

// var workingHour = +prompt('Enter hours working')
// function calculate(){
//     if(workingHour > 40){
//         document.write('Overtime :'+(workingHour-40)+ 'hours' +'<br />Overtime payment: ' +'$'+(workingHour-40)*12)
//     }else{
//         document.write('No over time')
//     }
// }
// calculate()

//Q: 10. 

// var currency = prompt('Enter amount in hundred');
// switch(currency.length){
//     case !3:
//         alert('Enter amount in hundred');
//     default:
//         calculate();
// }
// function calculate(){
//     document.write('You have '+currency[0]+' hundred notes ');
//     document.write(1+' fifty note ');
//     document.write(currency[1]-5+' ten notes');
// }

// chapter 43-48
//Q: 3

// var item1 = document.getElementById('item1')
// function delItem1(){
// item1.remove()
// }
// var item2 = document.getElementById('item2')
// function delItem2(){
// item2.remove()
// }
// var item3 = document.getElementById('item3')
// function delItem3(){
// item3.remove()
// }
// var item4 = document.getElementById('item4')
// function delItem4(){
// item4.remove()
// }
// var item5 = document.getElementById('item5')
// function delItem5(){
// item5.remove()
// }
// var item6 = document.getElementById('item6')
// function delItem6(){
// item6.remove()
// }
// var item7 = document.getElementById('item7')
// function delItem7(){
// item7.remove()
// }
// var item8 = document.getElementById('item8')
// function delItem8(){
// item8.remove()
// }
// var item9 = document.getElementById('item9')
// function delItem9(){
// item9.remove()
// }
// var item10 = document.getElementById('item10')
// function delItem10(){
// item10.remove()
// }

// Q: 5
// var count = 0;
// var counter = document.getElementById('counter')
// function increase(){
// count++ 
// counter.innerText = count
// }
// function decrease(){
// count--
// counter.innerText = count
// }