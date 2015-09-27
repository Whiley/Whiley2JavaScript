function extract$Z9bF1D527RWz(r0){//function(int[]) -> int[]
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
            var r7 = r0.length();//lengthof %7 = %0 : int[]
            var r8 = new WyJS.Integer(1);
            var r9 = r7.add(r8);//add %9 = %7, %8 : int
            var r10 = WyJS.ListGen(r6, r9, new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = r10.clone(new WyJS.Type.Int());//assign %5 = %10  : int[]
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r16 = r0.length();//lengthof %16 = %0 : int[]
            if(WyJS.gt(r1, r16, true)){
               control_flow_pc = 1208;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(1);
            r2.setValue(r1, r18);
            var r19 = new WyJS.Integer(1);
            var r20 = r1.add(r19);//add %20 = %1, %19 : int
            var r1 = r20;//assign %1 = %20  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1208:
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
            var r8 = new WyJS.Integer(6);
            var r9 = new WyJS.Integer(7);
            var r10 = new WyJS.List([r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = extract$Z9bF1D527RWz(r10);//invoke %2 = (%10) While_Valid_9:extract : function(int[]) -> int[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(0);
            var r19 = new WyJS.List([r11, r12, r13, r14, r15, r16, r17, r18], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r19, true)){
               control_flow_pc = 1209;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1209:
            var r21 = new WyJS.Integer(0);
            var r22 = new WyJS.Integer(0);
            var r23 = WyJS.ListGen(r21, r22, new WyJS.Type.List(new WyJS.Type.Int()));
            var r20 = extract$Z9bF1D527RWz(r23);//invoke %20 = (%23) While_Valid_9:extract : function(int[]) -> int[]
            var r0 = r20.clone(new WyJS.Type.Int());//assign %0 = %20  : int[]
            var r24 = new WyJS.Integer(0);
            var r25 = new WyJS.List([r24], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r25, true)){
               control_flow_pc = 1210;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1210:
            return;
      }
   }
}

