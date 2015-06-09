function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = 1;//const %5 = 1 : int
            var r6 = {x: r5};//newrecord %6 = (%5) : {int x}
            var r4 = r6;//assign %4 = %6  : {int x}
            var r0 = r4;//assign %0 = %4  : {int x}
            var r8 = 1;//const %8 = 1 : int
            var r9 = {x: r8};//newrecord %9 = (%8) : {int x}
            var r7 = r9;//assign %7 = %9  : {int x}
            var r1 = r7;//assign %1 = %7  : {int x}
            var r11 = {y: r0};//newrecord %11 = (%0) : {{int x} y}
            var r10 = r11;//assign %10 = %11  : {{int x} y}
            var r2 = r10;//assign %2 = %10  : {{int x} y}
            var r13 = {y: r1};//newrecord %13 = (%1) : {{int x} y}
            var r12 = r13;//assign %12 = %13  : {{int x} y}
            var r3 = r12;//assign %3 = %12  : {{int x} y}
            if(JSON.stringify(r2) ==  JSON.stringify(r3)){//ifeq %2, %3 goto label0 : {{int x} y}
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
      }
   }
}

test();
