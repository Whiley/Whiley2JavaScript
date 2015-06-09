function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = 1;//const %3 = 1 : int
            var r4 = 2;//const %4 = 2 : int
            var r5 = {x: r3, y: r4};
            var r2 = r5;//assign %2 = %5  : {int x,int y}
            var r0 = r2;//assign %0 = %2  : {int x,int y}
            var r7 = 1;//const %7 = 1 : int
            var r8 = 2;//const %8 = 2 : int
            var r9 = {x: r7, y: r8};
            var r6 = r9;//assign %6 = %9  : {int x,int y}
            var r1 = r6;//assign %1 = %6  : {int x,int y}
            if(r0.x ==  r1.x && r0.y ==  r1.y){//ifeq %0, %1 goto label64 : {int x,int y}
               control_flow_pc = 64;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 64:
      }
   }
}

test();
