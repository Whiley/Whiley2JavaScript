function f$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0.getValue(r4);
            var r3 = r5;//assign %3 = %5  : int
            var r1 = r3;//assign %1 = %3  : int
            var r7 = new WyJS.Integer(1);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r12 = r0.length();//lengthof %12 = %0 : int[]
            if(WyJS.gt(r2, r12, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = r0.getValue(r2);
            var r1 = r13;//assign %1 = %13  : int
            var r14 = new WyJS.Integer(1);
            var r15 = r2.add(r14);//add %15 = %2, %14 : int
            var r2 = r15;//assign %2 = %15  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 4:
            return r1;//return %1 : int
            return;
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(8);
            var r9 = new WyJS.Integer(9);
            var r10 = new WyJS.Integer(10);
            var r11 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7, r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$Z9bFaA$0D5Wz(r11);//invoke %0 = (%11) While_Valid_23:f : function(int[]) -> int
            var r12 = new WyJS.Integer(10);
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            return;
      }
   }
}

