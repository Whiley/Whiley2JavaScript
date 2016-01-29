function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(8);
            var r3 = r4;//assign %3 = %4  : int
            var r0 = r3;//assign %0 = %3  : int
            var r6 = new WyJS.Integer(1);
            var r5 = r6;//assign %5 = %6  : int
            var r1 = r5;//assign %1 = %5  : int
            var r8 = r0.mul(r0);//mul %8 = %0, %0 : int
            var r9 = r8.sub(r1);//sub %9 = %8, %1 : int
            var r7 = r9;//assign %7 = %9  : int
            var r2 = r7;//assign %2 = %7  : int
            var r10 = new WyJS.Integer(63);
            if(WyJS.equals(r2, r10, true)){
               control_flow_pc = 1043;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1043:
            var r11 = r0.mul(r0);//mul %11 = %0, %0 : int
            var r12 = r11.sub(r1);//sub %12 = %11, %1 : int
            var r2 = r12;//assign %2 = %12  : int
            var r13 = new WyJS.Integer(63);
            if(WyJS.equals(r2, r13, true)){
               control_flow_pc = 1044;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1044:
            var r14 = r0.sub(r1);//sub %14 = %0, %1 : int
            var r15 = r0.mul(r14);//mul %15 = %0, %14 : int
            var r2 = r15;//assign %2 = %15  : int
            var r16 = new WyJS.Integer(56);
            if(WyJS.equals(r2, r16, true)){
               control_flow_pc = 1045;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1045:
            return;
      }
   }
}

