function indexOf$Z9dFas1FVYGs(r0, r1){//function(int[],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.getValue(r1);
            return r2;//return %2 : int
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
            var r3 = new WyJS.Integer(5);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(6);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(8);
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = r11.clone(new WyJS.Type.Int());//assign %2 = %11  : int[]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : int[]
            var r13 = new WyJS.Integer(0);
            var r12 = r13;//assign %12 = %13  : int
            var r1 = r12;//assign %1 = %12  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r14 = r0.length();//lengthof %14 = %0 : int[]
            if(WyJS.gt(r1, r14, true)){
               control_flow_pc = 208;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = indexOf$Z9dFas1FVYGs(r0, r1);//invoke %15 = (%0, %1) ConstrainedList_Valid_25:indexOf : function(int[],int) -> int
            var r16 = r0.getValue(r1);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 209;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 209:
            var r17 = new WyJS.Integer(1);
            var r18 = r1.add(r17);//add %18 = %1, %17 : int
            var r1 = r18;//assign %1 = %18  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 208:
            return;
      }
   }
}

