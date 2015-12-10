function toInt$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r8 = r0.length();//lengthof %8 = %0 : int[]
            if(WyJS.gt(r2, r8, true)){
               control_flow_pc = 715;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.getValue(r2);
            var r10 = r1.add(r9);//add %10 = %1, %9 : int
            var r1 = r10;//assign %1 = %10  : int
            var r11 = new WyJS.Integer(1);
            var r12 = r2.add(r11);//add %12 = %2, %11 : int
            var r2 = r12;//assign %2 = %12  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 715:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r7 = toInt$Z9bFaA$0D5Wz(r0);//invoke %7 = (%0) Import_Valid_3:toInt : function(int[]) -> int
            var r8 = new WyJS.Integer(10);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 716;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 716:
            return;
      }
   }
}

