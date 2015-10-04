function average$Z9bF5B1FVYGs(r0){//function(real[]) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Real(0.0);
            var r3 = r4;//assign %3 = %4  : real
            var r1 = r3;//assign %1 = %3  : real
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r0.length();//lengthof %7 = %0 : real[]
            if(WyJS.gt(r2, r7, true)){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r0.getValue(r2);
            var r9 = r1.add(r8);//add %9 = %1, %8 : real
            var r1 = r9;//assign %1 = %9  : real
            var r10 = new WyJS.Integer(1);
            var r11 = r2.add(r10);//add %11 = %2, %10 : int
            var r2 = r11;//assign %2 = %11  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1:
            var r12 = r0.length();//lengthof %12 = %0 : real[]
            var r13 = WyJS.cast(new WyJS.Type.Real(), r12);
            var r14 = r1.div(r13);//div %14 = %1, %13 : real
            return r14;//return %14 : real
            return;
      }
   }
}
