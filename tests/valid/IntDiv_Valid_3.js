function f$Z9dFXd_V6$Z3$i0$S$F3$d0VS$w4$L0FN$k5$d0$O$w4$nB$s5$W0$SFs1E(r0, r1){//function(IntDiv_Valid_3:nat,int) -> IntDiv_Valid_3:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = 2317;
            control_flow_repeat = true;
            continue outer;//goto label2317
            control_flow_pc = 2318;
            control_flow_repeat = true;
            continue outer;//goto label2318
         case 2317:
            var r4 = r0.div(r1);//div %4 = %0, %1 : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 2319;
            control_flow_repeat = true;
            continue outer;//goto label2319
         case 2318:
            var r5 = r1.div(r0);//div %5 = %1, %0 : int
            var r2 = r5;//assign %2 = %5  : int
         case 2319:
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
               control_flow_pc = 2320;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2320:
      }
   }
}

