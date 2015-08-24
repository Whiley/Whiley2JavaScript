function f$Z9bFaA$WL1f$$I$Z5$n0$S$33$k0$R$J5$i0$O$w4$L0FN$k5$d0$O$w4$l$kB6$k0$Q$Z5$n0$S$N6$q$(r0){//function(ListAppend_Valid_13:plistv6) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : [int]
            return r1;//return %1 : int
      }
   }
}

function g$Z9dFat1Fc_k9$k3$d0kR$F6$00$R$$6$_0VQ$F5$U0VK$35$g0FP$F5$U0FB$Bn0$R$k5$d0kR$F6$q0VCE(r0, r1){//function(ListAppend_Valid_13:plistv6,ListAppend_Valid_13:plistv6) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.append(r1);
            var r2 = f$Z9bFaA$WL1f$$I$Z5$n0$S$33$k0$R$J5$i0$O$w4$L0FN$k5$d0$O$w4$l$kB6$k0$Q$Z5$n0$S$N6$q$(r3);//invoke %2 = (%3) ListAppend_Valid_13:f : function(ListAppend_Valid_13:plistv6) -> int
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.Integer(6);
            var r8 = new WyJS.Integer(7);
            var r9 = new WyJS.Integer(8);
            var r10 = new WyJS.List([r7, r8, r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = g$Z9dFat1Fc_k9$k3$d0kR$F6$00$R$$6$_0VQ$F5$U0VK$35$g0FP$F5$U0FB$Bn0$R$k5$d0kR$F6$q0VCE(r6, r10);//invoke %2 = (%6, %10) ListAppend_Valid_13:g : function(ListAppend_Valid_13:plistv6,ListAppend_Valid_13:plistv6) -> int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r11 = new WyJS.Integer(6);
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 1962;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1962:
      }
   }
}

