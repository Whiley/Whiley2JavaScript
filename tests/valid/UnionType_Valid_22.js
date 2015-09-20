function f$_9dF5e_V9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$VB4$i0$Q$Z5$n0$SFs1RB12(r0, r1){//function(int,UnionType_Valid_22:nlist[]) -> UnionType_Valid_22:nlist
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r2, false)){
               control_flow_pc = 385;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = r1.length();//lengthof %3 = %1 : int|int[][]
            if(WyJS.lt(r0, r3, false)){
               control_flow_pc = 386;
               control_flow_repeat = true;
               continue outer;
            }
         case 385:
            var r4 = new WyJS.Integer(0);
            return r4;//return %4 : int|int[]
            control_flow_pc = 387;
            control_flow_repeat = true;
            continue outer;//goto label387
         case 386:
            var r5 = r1.getValue(r0);
            return r5;//return %5 : int|int[]
         case 387:
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
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(4);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = f$_9dF5e_V9$J4$i0FP$w5$i0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$VB4$i0$Q$Z5$n0$SFs1RB12(r3, r7);//invoke %2 = (%3, %7) UnionType_Valid_22:f : function(int,UnionType_Valid_22:nlist[]) -> UnionType_Valid_22:nlist
            var r1 = r2;//assign %1 = %2  : int|int[]
            var r0 = r1;//assign %0 = %1  : int|int[]
            var r8 = new WyJS.Integer(4);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 388;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 388:
            return;
      }
   }
}

