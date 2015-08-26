function f$_9bFaL1e$$I$Z5$n0$S$k3$_0VQ$R5$o0$P$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFVY0t1z(r0){//function([int]) -> ListLength_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : [int]
            return r1;//return %1 : int
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
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
            var r0 = f$_9bFaL1e$$I$Z5$n0$S$k3$_0VQ$R5$o0$P$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFVY0t1z(r4);//invoke %0 = (%4) ListLength_Valid_1:f : function([int]) -> ListLength_Valid_1:nat
            var r5 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 889;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 889:
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r6 = f$_9bFaL1e$$I$Z5$n0$S$k3$_0VQ$R5$o0$P$w4$L0FN$k5$d0$O$w4$lB$s5$W0$SFVY0t1z(r7);//invoke %6 = (%7) ListLength_Valid_1:f : function([int]) -> ListLength_Valid_1:nat
            var r8 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 890;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 890:
            return;
      }
   }
}

