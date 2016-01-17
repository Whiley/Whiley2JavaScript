function f$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 995;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 995:
            return r0;//return %0 : int[]
            return;
      }
   }
}

function g$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            var r2 = new WyJS.Integer(0);
            if(WyJS.gt(r1, r2, false)){
               control_flow_pc = 997;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 997:
            return r0;//return %0 : int[]
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
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Array([r1, r2, r3], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = f$Z9bF1D527RWz(r4);//invoke %0 = (%4) ConstrainedList_Valid_7:f : function(int[]) -> int[]
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Array([r5, r6, r7], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 998;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 998:
            var r10 = new WyJS.Integer(0);
            var r11 = new WyJS.Array([r10], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r9 = g$Z9bF1D527RWz(r11);//invoke %9 = (%11) ConstrainedList_Valid_7:g : function(int[]) -> int[]
            var r12 = new WyJS.Integer(0);
            var r13 = new WyJS.Array([r12], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r13, true)){
               control_flow_pc = 999;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 999:
            var r15 = new WyJS.Integer(0);
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(2);
            var r18 = new WyJS.Array([r15, r16, r17], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r14 = g$Z9bF1D527RWz(r18);//invoke %14 = (%18) ConstrainedList_Valid_7:g : function(int[]) -> int[]
            var r19 = new WyJS.Integer(0);
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Array([r19, r20, r21], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r14, r22, true)){
               control_flow_pc = 1000;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1000:
            return;
      }
   }
}

