function g(r0){//function({Function_Valid_8:fr6nat}) -> {Function_Valid_8:fr6nat}
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r4;//assign %3 = %4  : {void}
            var r1 = r3;//assign %1 = %3  : {int}
            loopBegin0:
            while(true){
               var r5 = 1;//const %5 = 1 : int
               if(r2  <=  r5){
                  control_flow_pc = 190;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r1 = r7;//assign %1 = %7  : {int}
            }
         case 190:
            continue loopBegin0;
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = 2;//const %3 = 2 : int
            var r4 = 3;//const %4 = 3 : int
            var r1 = r5;//assign %1 = %5  : {int}
            var r0 = r1;//assign %0 = %1  : {int}
            var r7 = g(r0);
            var r6 = f(r7);
            var r8 = 2;//const %8 = 2 : int
            var r9 = 3;//const %9 = 3 : int
            if(r6  ==  r10){
               control_flow_pc = 191;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 191:
      }
   }
}

test();
