function f$_9bFaL1e$$I$Z5$n0$S$k3$_0VQ$R5$o0$P$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFVY0t1z(r0){//function(int[]) -> ListLength_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : int[]
            return r1;//return %1 : int
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$_9bFaL1e$$I$Z5$n0$S$k3$_0VQ$R5$o0$P$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFVY0t1z(r4);//invoke %0 = (%4) ListLength_Valid_1:f : function(int[]) -> ListLength_Valid_1:nat
            var r5 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 539;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 539:
            var r7 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = WyJS.ListGen(r7, r8, new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = f$_9bFaL1e$$I$Z5$n0$S$k3$_0VQ$R5$o0$P$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFVY0t1z(r9);//invoke %6 = (%9) ListLength_Valid_1:f : function(int[]) -> ListLength_Valid_1:nat
            var r10 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 540;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 540:
            return;
      }
   }
}

