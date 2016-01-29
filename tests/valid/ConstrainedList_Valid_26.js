function f$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 142;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int[]
            control_flow_pc = 143;
            control_flow_repeat = true;
            continue outer;//goto label143
         case 142:
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = WyJS.ArrayGen(r3, r4, new WyJS.Type.Array(new WyJS.Type.Int()));
            return r5;//return %5 : int[]
         case 143:
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
            var r2 = new WyJS.Integer(5);
            var r3 = new WyJS.Integer(4);
            var r4 = new WyJS.Integer(6);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(7);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(8);
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Array([r2, r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r10.clone(new WyJS.Type.Int());//assign %1 = %10  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r11 = f$Z9bF1D527RWz(r0);//invoke %11 = (%0) ConstrainedList_Valid_26:f : function(int[]) -> int[]
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Integer(0);
            var r14 = WyJS.ArrayGen(r12, r13, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r11, r14, true)){
               control_flow_pc = 144;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 144:
            var r16 = new WyJS.Integer(0);
            var r17 = new WyJS.Integer(0);
            var r18 = WyJS.ArrayGen(r16, r17, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r15 = f$Z9bF1D527RWz(r18);//invoke %15 = (%18) ConstrainedList_Valid_26:f : function(int[]) -> int[]
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(0);
            var r21 = WyJS.ArrayGen(r19, r20, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r15, r21, true)){
               control_flow_pc = 145;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 145:
            return;
      }
   }
}

