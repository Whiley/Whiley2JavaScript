function f(r0){//function(Function_Valid_12:msg) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.op;
            var r2 = r0.s;
            var r3 = r1 + r2;//add %3 = %1, %2 : int
            return r3;//return %3 : int
      }
   }
}

function f(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
      }
   }
}

function f(r0){//function([real]) -> [real]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [real]
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
            var r1 = 1;//const %1 = 1 : int
            var r2 = 2;//const %2 = 2 : int
            var r3 = 3;//const %3 = 3 : int
            var r4 = [r1, r2, r3];
            var r0 = f(r4);
            var r5 = 1;//const %5 = 1 : int
            var r6 = 2;//const %6 = 2 : int
            var r7 = 3;//const %7 = 3 : int
            var r8 = [r5, r6, r7];
            if(r0.length ==  r8.length){
               var listComp = true;
               for(var i = 0; i<r0.length;i++){
                  if(r0[i]  !=  r8[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 46;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 46:
            var r10 = 1.2;//const %10 = 1.2 : real
            var r11 = 2.2;//const %11 = 2.2 : real
            var r12 = 3.3;//const %12 = 3.3 : real
            var r13 = [r10, r11, r12];
            var r9 = f(r13);
            var r14 = 1.2;//const %14 = 1.2 : real
            var r15 = 2.2;//const %15 = 2.2 : real
            var r16 = 3.3;//const %16 = 3.3 : real
            var r17 = [r14, r15, r16];
            if(r9.length ==  r17.length){
               var listComp = true;
               for(var i = 0; i<r9.length;i++){
                  if(r9[i]  !=  r17[i]){
                     listCompFail = false;
                  }
               }
               if(listComp){
                  control_flow_pc = 47;
                  control_flow_repeat = true;
                  continue outer;
               }
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 47:
      }
   }
}

test();
