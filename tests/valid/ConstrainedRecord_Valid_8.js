function EmptyBoard$Y9_FP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$sc0$40FQ$$6$o0FT$73$j0FN$76$Z0W(){//function() -> ConstrainedRecord_Valid_8:EmptyBoard
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(0);
            var r1 = new WyJS.Integer(0);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.Integer(0);
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = new WyJS.Integer(0);
            var r10 = new WyJS.Array([r1, r2, r3, r4, r5, r6, r7, r8, r9], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r11 = new WyJS.Record(["move", "pieces"], [r0, r10], new WyJS.Type.Record(["move", "pieces"], [new WyJS.Type.Int(), new WyJS.Type.Array(new WyJS.Type.Int())]));
            return r11;//return %11 : {int move,int[] pieces}
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
            var r2 = EmptyBoard$Y9_FP8Z2$20kQ$s5$n0$S$76$W0FP$s5$_0$O$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$sc0$40FQ$$6$o0FT$73$j0FN$76$Z0W();//invoke %2 = () ConstrainedRecord_Valid_8:EmptyBoard : function() -> ConstrainedRecord_Valid_8:EmptyBoard
            var r1 = r2.clone();//assign %1 = %2  : {int move,int[] pieces}
            var r0 = r1.clone();//assign %0 = %1  : {int move,int[] pieces}
            var r3 = r0.fieldLoad("pieces");//fieldload %3 = %0 pieces : {int move,int[] pieces}
            var r4 = new WyJS.Integer(0);
            var r5 = r3.getValue(r4);
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 833;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 833:
            var r7 = r0.fieldLoad("pieces");//fieldload %7 = %0 pieces : {int move,int[] pieces}
            var r8 = new WyJS.Integer(1);
            var r9 = r7.getValue(r8);
            var r10 = new WyJS.Integer(0);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 834;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 834:
            var r11 = r0.fieldLoad("pieces");//fieldload %11 = %0 pieces : {int move,int[] pieces}
            var r12 = new WyJS.Integer(8);
            var r13 = r11.getValue(r12);
            var r14 = new WyJS.Integer(0);
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 835;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 835:
            return;
      }
   }
}

