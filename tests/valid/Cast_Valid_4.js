function f$a9bF5J7J0WL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$o7$74$noHV2$51Vk$ND$c2Vj$k9$12$q$7C$72Vj$V50$d$7aL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$o7$74$mB(r0){//function(Cast_Valid_4:R3) -> Cast_Valid_4:R1|Cast_Valid_4:R2
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = WyJS.cast(new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Int()]), r0);
            return r1;//return %1 : {int x,real y}|{real x,int y}
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
            var r1 = new WyJS.Integer(123542);
            var r2 = new WyJS.Integer(123);
            var r3 = new WyJS.Record(["x", "y"], [r1, r2], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = f$a9bF5J7J0WL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$o7$74$noHV2$51Vk$ND$c2Vj$k9$12$q$7C$72Vj$V50$d$7aL1R$kF$35$n0$S$w4$L0FN$k5$d0$O$w4$o7$74$mB(r3);//invoke %0 = (%3) Cast_Valid_4:f : function(Cast_Valid_4:R3) -> Cast_Valid_4:R1|Cast_Valid_4:R2
            var r4 = new WyJS.Real(123542.0);
            var r5 = new WyJS.Integer(123);
            var r6 = new WyJS.Record(["x", "y"], [r4, r5], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 1142;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1142:
            return;
      }
   }
}

