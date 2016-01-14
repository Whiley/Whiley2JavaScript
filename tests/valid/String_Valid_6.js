function append$Z9dFXVYl$1Ms(r0, r1){//function(int[],int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = r0.length();//lengthof %7 = %0 : int[]
            var r8 = r1.length();//lengthof %8 = %1 : int[]
            var r9 = r7.add(r8);//add %9 = %7, %8 : int
            var r6 = r9;//assign %6 = %9  : int
            var r2 = r6;//assign %2 = %6  : int
            var r11 = new WyJS.Integer(0);
            var r12 = WyJS.ArrayGen(r11, r2, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r10 = r12.clone(new WyJS.Type.Int());//assign %10 = %12  : int[]
            var r3 = r10.clone(new WyJS.Type.Int());//assign %3 = %10  : int[]
            var r14 = new WyJS.Integer(0);
            var r13 = r14;//assign %13 = %14  : int
            var r4 = r13;//assign %4 = %13  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r21 = r0.length();//lengthof %21 = %0 : int[]
            if(WyJS.gt(r4, r21, true)){
               control_flow_pc = 1166;
               control_flow_repeat = true;
               continue outer;
            }
            var r22 = r0.getValue(r4);
            var r23 = r0.getValue(r4);
            r3.setValue(r4, r23);
            var r24 = new WyJS.Integer(1);
            var r25 = r4.add(r24);//add %25 = %4, %24 : int
            var r4 = r25;//assign %4 = %25  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1166:
            var r27 = new WyJS.Integer(0);
            var r26 = r27;//assign %26 = %27  : int
            var r5 = r26;//assign %5 = %26  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r33 = r1.length();//lengthof %33 = %1 : int[]
            if(WyJS.gt(r5, r33, true)){
               control_flow_pc = 1169;
               control_flow_repeat = true;
               continue outer;
            }
            var r34 = r1.getValue(r5);
            var r35 = r5.add(r4);//add %35 = %5, %4 : int
            var r36 = r1.getValue(r5);
            r3.setValue(r35, r36);
            var r37 = new WyJS.Integer(1);
            var r38 = r5.add(r37);//add %38 = %5, %37 : int
            var r5 = r38;//assign %5 = %38  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 1169:
            return r3;//return %3 : int[]
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
            var r1 = new WyJS.Array([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r2 = new WyJS.Array([new WyJS.Integer(49), new WyJS.Integer(50), new WyJS.Integer(50)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = append$Z9dFXVYl$1Ms(r1, r2);//invoke %0 = (%1, %2) String_Valid_6:append : function(int[],int[]) -> int[]
            var r3 = new WyJS.Array([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(49), new WyJS.Integer(50), new WyJS.Integer(50)], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1170;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1170:
            return;
      }
   }
}

