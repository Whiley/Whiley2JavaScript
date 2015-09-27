function update$_9bF1D527klVRWE(r0){//function(int[][]) -> int[][]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(10);
            r0.getValue(r3).setValue(r2, r4);
            return r0;//return %0 : int[][]
            return;
      }
   }
}

function f$a9bF5C9n$0D53D5_A$(r0){//function(int[][]) -> (int[][],int[][])
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = update$_9bF1D527klVRWE(r0);//invoke %3 = (%0) ListAssign_Valid_3:update : function(int[][]) -> int[][]
            var r2 = r3.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %2 = %3  : int[][]
            var r1 = r2.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %2  : int[][]
            var r4 = new WyJS.Tuple([r0, r1], new WyJS.Type.Tuple([new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())), new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int()))]));
            return r4;//return %4 : (int[][],int[][])
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(4);
            var r8 = new WyJS.List([r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = new WyJS.List([r8], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r3 = r9.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %3 = %9  : int[][]
            var r1 = r3.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %3  : int[][]
            var r10 = f$a9bF5C9n$0D53D5_A$(r1);//invoke %10 = (%1) ListAssign_Valid_3:f : function(int[][]) -> (int[][],int[][])
            var r1 = r10.tupleLoad(0);
            var r0 = r10.tupleLoad(1);
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.Integer(3);
            var r14 = new WyJS.Integer(4);
            var r15 = new WyJS.List([r11, r12, r13, r14], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = new WyJS.List([r15], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            if(WyJS.equals(r1, r16, true)){
               control_flow_pc = 2504;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2504:
            var r17 = new WyJS.Integer(10);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.Integer(4);
            var r21 = new WyJS.List([r17, r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Int()));
            var r22 = new WyJS.List([r21], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            if(WyJS.equals(r0, r22, true)){
               control_flow_pc = 2505;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2505:
            return;
      }
   }
}

