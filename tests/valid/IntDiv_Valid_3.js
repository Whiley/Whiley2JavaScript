function f$Z9dFXd_V6$Z3$i0$S$F3$d0VS$w4$L0FN$k5$d0$O$w4$nB$s5$W0$SFs1E(r0, r1){//function(IntDiv_Valid_3:nat,int) -> IntDiv_Valid_3:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = 2328;
            control_flow_repeat = true;
            continue outer;//goto label2328
            control_flow_pc = 2329;
            control_flow_repeat = true;
            continue outer;//goto label2329
         case 2328:
            var r4 = r0.div(r1);//div %4 = %0, %1 : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 2330;
            control_flow_repeat = true;
            continue outer;//goto label2330
         case 2329:
            var r5 = r1.div(r0);//div %5 = %1, %0 : int
            var r2 = r5;//assign %2 = %5  : int
         case 2330:
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(2);
            var r0 = f$Z9dFXd_V6$Z3$i0$S$F3$d0VS$w4$L0FN$k5$d0$O$w4$nB$s5$W0$SFs1E(r1, r2);//invoke %0 = (%1, %2) IntDiv_Valid_3:f : function(IntDiv_Valid_3:nat,int) -> IntDiv_Valid_3:nat
            var r3 = new WyJS.Integer(5);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2331;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2331:
      }
   }
}

