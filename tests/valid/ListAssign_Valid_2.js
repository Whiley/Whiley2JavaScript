function f$_9bFa7$0D5ZL1e$$I$Z5$n0$S$33$n0kR$Z5$b0VQ$w4$L0FN$k5$d0$O$w4$mR$Z5$i0$S$k5$d0kR$FrE(r0){//function(ListAssign_Valid_2:intlist[]) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : any
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
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            if(WyJS.equals(r2, r3, false)){
               control_flow_pc = 1433;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Array([r4, r5, r6], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r0 = r7.clone(new WyJS.Type.Int());//assign %0 = %7  : int[]
            control_flow_pc = 1434;
            control_flow_repeat = true;
            continue outer;//goto label1434
         case 1433:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Array([r8], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Array([r10, r11], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r13 = new WyJS.Integer(5);
            var r14 = new WyJS.Array([r13], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r15 = new WyJS.Array([r9, r12, r14], new WyJS.Type.Array(new WyJS.Type.Array(new WyJS.Type.Int())));
            var r0 = r15.clone(new WyJS.Type.Array(new WyJS.Type.Int()));//assign %0 = %15  : int[][]
         case 1434:
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(0);
            var r18 = new WyJS.Integer(1);
            r0.setValue(r17, r18);
            var r19 = f$_9bFa7$0D5ZL1e$$I$Z5$n0$S$33$n0kR$Z5$b0VQ$w4$L0FN$k5$d0$O$w4$mR$Z5$i0$S$k5$d0kR$FrE(r0);//invoke %19 = (%0) ListAssign_Valid_2:f : function(ListAssign_Valid_2:intlist[]) -> any
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(2);
            var r22 = new WyJS.Integer(3);
            var r23 = new WyJS.Array([r20, r21, r22], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r19, r23, true)){
               control_flow_pc = 1435;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1435:
            return;
      }
   }
}

