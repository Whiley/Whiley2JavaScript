function f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FB5$H0$S$Z6$k0FO$B6(r0){//function(TypeEquals_Valid_11:Rtypes) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["x", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int()]))){
               control_flow_pc = 900;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 901;
            control_flow_repeat = true;
            continue outer;//goto label901
         case 900:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 902;
            control_flow_repeat = true;
            continue outer;//goto label902
         case 901:
            var r2 = false;
            return r2;//return %2 : bool
         case 902:
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
            var r1 = new WyJS.Real(1.2);
            var r2 = new WyJS.Real(1.2);
            var r3 = new WyJS.Record(["x", "y"], [r1, r2], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            var r0 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FB5$H0$S$Z6$k0FO$B6(r3);//invoke %0 = (%3) TypeEquals_Valid_11:f : function(TypeEquals_Valid_11:Rtypes) -> bool
            var r4 = false;
            if(r0 === r4){
               control_flow_pc = 903;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 903:
            var r6 = new WyJS.Real(1.0);
            var r7 = new WyJS.Real(1.0);
            var r8 = new WyJS.Record(["x", "y"], [r6, r7], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Real(), new WyJS.Type.Real()]));
            var r5 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FB5$H0$S$Z6$k0FO$B6(r8);//invoke %5 = (%8) TypeEquals_Valid_11:f : function(TypeEquals_Valid_11:Rtypes) -> bool
            var r9 = false;
            if(r5 === r9){
               control_flow_pc = 904;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 904:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Record(["x", "z"], [r11, r12], new WyJS.Type.Record(["x", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r10 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$FB5$H0$S$Z6$k0FO$B6(r13);//invoke %10 = (%13) TypeEquals_Valid_11:f : function(TypeEquals_Valid_11:Rtypes) -> bool
            var r14 = true;
            if(r10 === r14){
               control_flow_pc = 905;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 905:
      }
   }
}

