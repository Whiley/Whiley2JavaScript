function g(r0){//function({Function_Valid_9:fr6nat}) -> {Function_Valid_9:fr6nat}
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r4;//assign %3 = %4  : {void}
            var r1 = r3;//assign %1 = %3  : {int}
            var control_flow_repeat0 = true;
            var control_flow_pc0 = -1;
            outer0:
            while(control_flow_repeat0){
               while(true){
                  control_flow_repeat0 = false
                  switch(control_flow_pc0){
                     case -1 :
                        var r5 = 1;//const %5 = 1 : int
                        if(r2  <=  r5){
                           control_flow_pc0 = 137;
                           control_flow_0 = true;
                           continue outer0;
                        }
                        var r1 = r7;//assign %1 = %7  : {int}
                     case 137:
                  }
               }
            }
            return r1;//return %1 : {int}
      }
   }
}

function f(r0){//function({int}) -> {int}
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : {int}
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = 12309812;//const %2 = 12309812 : int
            var r3 = -r2;
            var r4 = 1;//const %4 = 1 : int
            var r5 = 2;//const %5 = 2 : int
            var r6 = 2987;//const %6 = 2987 : int
            var r7 = 2349872;//const %7 = 2349872 : int
            var r8 = 234987234987;//const %8 = 234987234987 : int
            var r9 = 234987234987234;//const %9 = 234987234987234 : int
            var r1 = r10;//assign %1 = %10  : {int}
            var r0 = r1;//assign %0 = %1  : {int}
            var r12 = g(r0);
            var r11 = f(r12);
            var r13 = 2;//const %13 = 2 : int
            var r14 = 2987;//const %14 = 2987 : int
            var r15 = 2349872;//const %15 = 2349872 : int
            var r16 = 234987234987;//const %16 = 234987234987 : int
            var r17 = 234987234987234;//const %17 = 234987234987234 : int
            if(r11  ==  r18){
               control_flow_pc = 138;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 138:
      }
   }
}

test();
