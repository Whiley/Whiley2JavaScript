function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = 1;//const %3 = 1 : int
            var r4 = {x: r3};
            var r2 = r4;//assign %2 = %4  : {int x}
            var r0 = r2;//assign %0 = %2  : {int x}
            var r6 = 1;//const %6 = 1 : int
            var r7 = {x: r6};
            var r5 = r7;//assign %5 = %7  : {int x}
            var r1 = r5;//assign %1 = %5  : {int x}
            if(r0.x ==  r1.x){//ifeq %0, %1 goto label65 : {int x}
               control_flow_pc = 65;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 65:
      }
   }
}

test();
