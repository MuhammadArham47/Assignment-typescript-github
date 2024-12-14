console.log("HELLOW SIR!"); 
 
var dateofBirth: number = 2003;
var currentYear: number = 2024;
var myAge = currentYear - dateofBirth;
console.log("My Age is:" ,myAge);

var lengthofRectangle: number = 15;
var widthodRectangle: number = 15;
var areaofRactangle = lengthofRectangle * widthodRectangle;
console.log("AreaofRectangle =", areaofRactangle);

var radiousofCircle: number = 4.3;
var areaofCircle = 3.14 * radiousofCircle * radiousofCircle;
console.log("The area of circle with radious 4.3 is:", areaofCircle);

var edge:number = 2;
var areaofCube = 6 * edge * edge;
console.log("The area of cube is:", areaofCube);

var fahrenheit:number = 64.4;
var celsius = (fahrenheit - 32) * 5/9;
console.log("64.4F to celsius", celsius);

var totalSeconds: number = 120;
var minutes: number = (totalSeconds / 60);
var seconds:number = (totalSeconds % 60);
console.log("625 seconds is equal to", minutes,"minutes and",seconds,"seconds");

var a:number = 2;
var b:number = ++a *2;
console.log(b);

var x:number = 5;
var y:number = x-- +2;
console.log(y);

var w:number = 3;
var z:number = ++w + w++ + ++w;
console.log(z);

var m:number = 2;
var n:number = ++m * m++ * --m;
console.log(n);

var c:number = 3;
var d:number = 5;
var letResult:number = ++c + d-- - c++ + --d;
console.log(letResult);

var o:number = 2;
var p:number = 4;
var letQ:number = o++ + ++p - --o + p--;
console.log(o,p,letQ);

var e:number = 5;
var f:number = 3;
var g:number = 2;
var h:number = 7;
var letResultAll:number = ++e * (f-- + g)/ --h;
console.log(e,f,g,h,letResultAll);

var q:number = 2;
var r:number = 3;
var s:number = 4;
var result:number = q++ *(--r + q)/(s-- - r);
console.log(q,s,r,result);