function f(){//function() -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = 1;//const %0 = 1 : int
            var r1 = 2;//const %1 = 2 : int
            var r2 = [r0, r1];
            return r2;//return %2 : [int]
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
            var r3 = f();//invoke %3 = () ListAssign_Valid_9:f : function() -> [int]
            var r2 = r3;//assign %2 = %3  : [int]
            var r0 = r2;//assign %0 = %2  : [int]
            var r5 = f();//invoke %5 = () ListAssign_Valid_9:f : function() -> [int]
            var r4 = r5;//assign %4 = %5  : [int]
            var r1 = r4;//assign %1 = %4  : [int]
            var r6 = 0;//const %6 = 0 : int
            var r7 = 0;//const %7 = 0 : int
            var r8 = 0;//const %8 = 0 : int
            r1[r7] = r8;//update %1[%7] = %8 : [int] -> [int]
            var r9 = 0;//const %9 = 0 : int
            var r10 = r0[r9];
            var r11 = 1;//const %11 = 1 : int
            if(r10  ==  r11){//ifeq %10, %11 goto label2451 : int
               control_flow_pc = 2451;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2451:
            var r12 = 1;//const %12 = 1 : int
            var r13 = r0[r12];
            var r14 = 2;//const %14 = 2 : int
            if(r13  ==  r14){//ifeq %13, %14 goto label2452 : int
               control_flow_pc = 2452;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2452:
            var r15 = 0;//const %15 = 0 : int
            var r16 = r1[r15];
            var r17 = 0;//const %17 = 0 : int
            if(r16  ==  r17){//ifeq %16, %17 goto label2453 : int
               control_flow_pc = 2453;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2453:
            var r18 = 1;//const %18 = 1 : int
            var r19 = r1[r18];
            var r20 = 2;//const %20 = 2 : int
            if(r19  ==  r20){//ifeq %19, %20 goto label2454 : int
               control_flow_pc = 2454;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2454:
      }
   }
}

test();
