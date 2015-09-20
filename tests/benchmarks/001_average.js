function average$Z9bF5B1FVYGs(r0){//function([real]) -> real
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
            var r7 = r0.length();//lengthof %7 = %0 : [real]
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
            var r12 = r0.length();//lengthof %12 = %0 : [real]
            var r13 = WyJS.cast(new WyJS.Type.Real(), r12);
            var r14 = r1.div(r13);//div %14 = %1, %13 : real
            return r14;//return %14 : real
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Real(1.0);
            var r2 = new WyJS.Real(2.0);
            var r3 = new WyJS.Real(3.0);
            var r4 = new WyJS.Real(4.0);
            var r5 = new WyJS.Real(5.0);
            var r6 = new WyJS.List([r1, r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Real()));
            var r0 = average$Z9bF5B1FVYGs(r6);//invoke %0 = (%6) 001_average:average : function([real]) -> real
            var r7 = new WyJS.Real(3.0);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2:
            var r9 = new WyJS.Real(0.0);
            var r10 = new WyJS.Real(0.0);
            var r11 = new WyJS.Real(0.0);
            var r12 = new WyJS.Real(0.0);
            var r13 = new WyJS.List([r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Real()));
            var r8 = average$Z9bF5B1FVYGs(r13);//invoke %8 = (%13) 001_average:average : function([real]) -> real
            var r14 = new WyJS.Real(0.0);
            if(WyJS.equals(r8, r14, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r16 = new WyJS.Real(11002003.0);
            var r17 = new WyJS.Real(302901883.0);
            var r18 = new WyJS.Real(8280912.0);
            var r19 = new WyJS.Real(91398.0);
            var r20 = new WyJS.Real(7892379.0);
            var r21 = new WyJS.List([r16, r17, r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Real()));
            var r15 = average$Z9bF5B1FVYGs(r21);//invoke %15 = (%21) 001_average:average : function([real]) -> real
            var r22 = new WyJS.Real(66033715.0);
            if(WyJS.equals(r15, r22, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            return;
      }
   }
}

