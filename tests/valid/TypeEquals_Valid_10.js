function f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$B5$H0$S$Z6$k0FO$B6(r0){//function(TypeEquals_Valid_10:Rtypes) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]))){
               control_flow_pc = 937;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 938;
            control_flow_repeat = true;
            continue outer;//goto label938
         case 937:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 939;
            control_flow_repeat = true;
            continue outer;//goto label939
         case 938:
            var r2 = false;
            return r2;//return %2 : bool
         case 939:
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
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["x", "y"], [r1, r2], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$B5$H0$S$Z6$k0FO$B6(r3);//invoke %0 = (%3) TypeEquals_Valid_10:f : function(TypeEquals_Valid_10:Rtypes) -> bool
            var r4 = true;
            if(r0 === r4){
               control_flow_pc = 940;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 940:
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["x", "z"], [r6, r7], new WyJS.Type.Record(["x", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r5 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$$B5$H0$S$Z6$k0FO$B6(r8);//invoke %5 = (%8) TypeEquals_Valid_10:f : function(TypeEquals_Valid_10:Rtypes) -> bool
            var r9 = false;
            if(r5 === r9){
               control_flow_pc = 941;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 941:
            return;
      }
   }
}

