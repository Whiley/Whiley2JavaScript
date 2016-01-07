function f$Z9bFaL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$lJ$s5$g0FP$B6$o0WA$(r0){//function(int) -> UnionType_Valid_21:nlist
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.gt(r0, r1, false)){
               control_flow_pc = 277;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(0);
            return r2;//return %2 : int|int[]
            control_flow_pc = 278;
            control_flow_repeat = true;
            continue outer;//goto label278
         case 277:
            var r4 = new WyJS.Integer(1);
            var r5 = r0.sub(r4);//sub %5 = %0, %4 : int
            var r3 = f$Z9bFaL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$lJ$s5$g0FP$B6$o0WA$(r5);//invoke %3 = (%5) UnionType_Valid_21:f : function(int) -> UnionType_Valid_21:nlist
            return r3;//return %3 : int|int[]
         case 278:
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
            var r3 = new WyJS.Integer(2);
            var r2 = f$Z9bFaL1e$FK$s5$d0kQ$s5$J0FT$$6$_0kM$N4$W0$Q$Z5$Z0kM$72$lJ$s5$g0FP$B6$o0WA$(r3);//invoke %2 = (%3) UnionType_Valid_21:f : function(int) -> UnionType_Valid_21:nlist
            var r1 = r2;//assign %1 = %2  : int|int[]
            var r0 = r1;//assign %0 = %1  : int|int[]
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 279;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 279:
            return;
      }
   }
}

