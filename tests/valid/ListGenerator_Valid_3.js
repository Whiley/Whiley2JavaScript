function f$_9bFaA$0D53D5WE(r0){//function(int[][]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            var r3 = r2.length();//lengthof %3 = %2 : int[]
            var r4 = new WyJS.Integer(2);
            if(WyJS.lt(r3, r4, true)){
               control_flow_pc = 709;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = new WyJS.Integer(0);
            var r6 = r0.getValue(r5);
            var r7 = new WyJS.Integer(1);
            var r8 = r6.getValue(r7);
            return r8;//return %8 : int
            control_flow_pc = 710;
            control_flow_repeat = true;
            continue outer;//goto label710
         case 709:
            var r9 = new WyJS.Integer(0);
            return r9;//return %9 : int
         case 710:
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
            var r5 = new WyJS.Array([r2, r3, r4], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Array([r6], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r8 = new WyJS.Array([r5, r7], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())));
            var r1 = r8.clone(new WyJS.Type.Array(new WyJS.Type.Int()));//assign %1 = %8  : int[][]
            var r0 = r1.clone(new WyJS.Type.Array(new WyJS.Type.Int()));//assign %0 = %1  : int[][]
            var r9 = f$_9bFaA$0D53D5WE(r0);//invoke %9 = (%0) ListGenerator_Valid_3:f : function(int[][]) -> int
            var r10 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 711;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 711:
            return;
      }
   }
}

