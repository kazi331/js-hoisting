/*************

What is hoisting in javascript ?
 
hoisting means to lift up something.
 In javascript, hoisting is a process javascript interpreter appers to hoist/lift 
    the declarations of svariables (declared with var), regular functions or even
    classes to the top of their scope.
    
 For the hoisting charateristics, functons or variables can be used before 
    their actual declaration. 
 
***************/


   // variable hoisting --------
   // initialization and declaration ( initializations are not hoisted )
   /* console.log(x);                                
   x = 'Mr. X'
   var x; */

   // variables inside of function
   // console.log(me)
   /* function callMe(){
      b = 'someone'
      console.log(b);
      console.log(me)
      var me = "Sayem";
      var b;
   }
   callMe(); */

   // let, const (let and const are hoisted, but...)
   // console.log(name1)
   // let name1 = 'My name is john'
   // const name2 = 'Hello John'



   // function hoisting
   /* age();
   function age(){
      console.log(23)
   } */

   // function expression (expression doesn't hoisted)
 /*   sayHello();
   let sayHello = function(){
      console.log("Hello Bangladesh!!")
   } */

   // important note: 
   /* hoisting is not available in c, c++, java, python.
   we should avaoid using it as it might cause, undesirable problems */