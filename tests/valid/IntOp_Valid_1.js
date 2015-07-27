function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(112233445566778899);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = new WyJS.Integer(112233445566778899);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1430;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1430:
            var r4 = new WyJS.Integer(1);
            var r5 = r0.add(r4);//add %5 = %0, %4 : int
            var r0 = r5;//assign %0 = %5  : int
            var r6 = new WyJS.Integer(112233445566778900);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1431;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1431:
            var r7 = new WyJS.Integer(556);
            var r8 = r0.sub(r7);//sub %8 = %0, %7 : int
            var r0 = r8;//assign %0 = %8  : int
            var r9 = new WyJS.Integer(112233445566778344);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1432;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1432:
            var r10 = new WyJS.Integer(123);
            var r11 = r0.mul(r10);//mul %11 = %0, %10 : int
            var r0 = r11;//assign %0 = %11  : int
            var r12 = new WyJS.Integer(13804713804713736312);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 1433;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1433:
            var r13 = new WyJS.Integer(2);
            var r14 = r0.div(r13);//div %14 = %0, %13 : int
            var r0 = r14;//assign %0 = %14  : int
            var r15 = new WyJS.Integer(6902356902356868156);
            if(WyJS.equals(r0, r15, true)){
               control_flow_pc = 1434;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1434:
      }
   }
}

