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
            var r8 = WyJS.ListGen(r6, r7, new WyJS.Type.List(new WyJS.Type.Int()));
            var r5 = r8.clone(new WyJS.Type.Int());//assign %5 = %8  : int[]
            var r2 = r5.clone(new WyJS.Type.Int());//assign %2 = %5  : int[]
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r10 = r2.length();//lengthof %10 = %2 : int[]
            if(WyJS.gt(r1, r10, true)){
               control_flow_pc = 479;
               control_flow_repeat = true;
               continue outer;
            }
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(1);
            r2.setValue(r1, r12);
            var r13 = new WyJS.Integer(1);
            var r14 = r1.add(r13);//add %14 = %1, %13 : int
            var r1 = r14;//assign %1 = %14  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 479:
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
            var r2 = extract$Z9bF1D527RWz(r10);//invoke %2 = (%10) While_Valid_10:extract : function(int[]) -> int[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(1);
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.List([r11, r12, r13, r14, r15, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r18, true)){
               control_flow_pc = 480;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 480:
            var r20 = new WyJS.Integer(0);
            var r21 = new WyJS.Integer(0);
            var r22 = WyJS.ListGen(r20, r21, new WyJS.Type.List(new WyJS.Type.Int()));
            var r19 = extract$Z9bF1D527RWz(r22);//invoke %19 = (%22) While_Valid_10:extract : function(int[]) -> int[]
            var r0 = r19.clone(new WyJS.Type.Int());//assign %0 = %19  : int[]
            var r23 = new WyJS.Integer(0);
            var r24 = new WyJS.Integer(0);
            var r25 = WyJS.ListGen(r23, r24, new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r25, true)){
               control_flow_pc = 481;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 481:
            return;
      }
   }
}

