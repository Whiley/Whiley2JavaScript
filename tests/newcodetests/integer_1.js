function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            var r5 = new WyJS.Integer(2);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r6 = r0.add(r1);//add %6 = %0, %1 : int
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 0:
            var r8 = r1.sub(r0);//sub %8 = %1, %0 : int
            var r9 = new WyJS.Integer(1);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1:
            var r10 = r1.div(r0);//div %10 = %1, %0 : int
            var r11 = new WyJS.Integer(2);
            if(WyJS.equals(r10, r11, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r12 = r1.mul(r0);//mul %12 = %1, %0 : int
            var r13 = new WyJS.Integer(2);
            if(WyJS.equals(r12, r13, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(2);
            var r16 = r14.rem(r15);//rem %16 = %14, %15 : int
            var r17 = new WyJS.Integer(1);
            if(WyJS.equals(r16, r17, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            if(WyJS.gt(r1, r0, false)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
            if(WyJS.gt(r1, r0, true)){
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 7:
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 8:
      }
   }
}

