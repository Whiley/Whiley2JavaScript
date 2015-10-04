function doit$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r8 = r0.length();//lengthof %8 = %0 : int[]
            var r9 = WyJS.ListGen(r7, r8, new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = r9.clone(new WyJS.Type.Int());//assign %6 = %9  : int[]
            var r2 = r6.clone(new WyJS.Type.Int());//assign %2 = %6  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r13 = r0.length();//lengthof %13 = %0 : int[]
            if(WyJS.gt(r1, r13, true)){
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = r0.length();//lengthof %15 = %0 : int[]
            var r16 = r15.sub(r1);//sub %16 = %15, %1 : int
            var r17 = r0.getValue(r16);
            var r14 = r17;//assign %14 = %17  : int
            var r3 = r14;//assign %3 = %14  : int
            var r18 = new WyJS.Integer(1);
            var r19 = r1.sub(r18);//sub %19 = %1, %18 : int
            var r1 = r19;//assign %1 = %19  : int
            var r20 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r20, false)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r21 = new WyJS.Integer(3);
            var r22 = new WyJS.Integer(3);
            r2.setValue(r1, r22);
            control_flow_pc = 4;
            control_flow_repeat = true;
            continue outer;//goto label4
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 3:
            var r23 = new WyJS.Integer(5);
            var r3 = r23;//assign %3 = %23  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 4:
            var r24 = new WyJS.Integer(5);
            if(WyJS.equals(r3, r24, false)){
               control_flow_pc = 5;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -4;
               control_flow_repeat = true;
               break;
            }
         case -4:
            var r3 = r1;//assign %3 = %1  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 5:
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 2:
            return r2;//return %2 : int[]
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.List([r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = doit$Z9bF1D527RWz(r8);//invoke %2 = (%8) while_valid_01:doit : function(int[]) -> int[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.Integer(4);
            var r14 = new WyJS.List([r9, r10, r11, r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r14, true)){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
            return;
      }
   }
}

