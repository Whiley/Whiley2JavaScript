function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Real(5.0);
            var r1 = r2;//assign %1 = %2  : real
            var r0 = r1;//assign %0 = %1  : real
            var r3 = new WyJS.Real(5.0);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1896;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1896:
            var r4 = new WyJS.Real(3.234);
            var r0 = r4;//assign %0 = %4  : real
            var r5 = new WyJS.Real(3.234);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1897;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1897:
            var r6 = new WyJS.Real(5.242325252);
            var r0 = r6;//assign %0 = %6  : real
            var r7 = new WyJS.Real(5.242325252);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1898;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1898:
            var r8 = new WyJS.Real(-1.0);
            var r0 = r8;//assign %0 = %8  : real
            var r9 = new WyJS.Real(-1.0);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1899;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1899:
            var r10 = new WyJS.Real(-1.232);
            var r0 = r10;//assign %0 = %10  : real
            var r11 = new WyJS.Real(-1.232);
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 1900;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1900:
            return;
      }
   }
}

