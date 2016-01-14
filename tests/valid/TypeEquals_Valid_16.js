function f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$VC2$n0VR$B5(r0){//function(TypeEquals_Valid_16:src) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Any();))){
               control_flow_pc = 911;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 912;
            control_flow_repeat = true;
            continue outer;//goto label912
         case 911:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 913;
            control_flow_repeat = true;
            continue outer;//goto label913
         case 912:
            var r2 = false;
            return r2;//return %2 : bool
         case 913:
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
            var r2 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$VC2$n0VR$B5(r2);//invoke %0 = (%2) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r3 = true;
            if(r0 === r3){
               control_flow_pc = 914;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 914:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.List([r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r4 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$VC2$n0VR$B5(r7);//invoke %4 = (%7) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r8 = true;
            if(r4 === r8){
               control_flow_pc = 915;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 915:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r13 = new WyJS.List([r12], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int()))));
            var r9 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$VC2$n0VR$B5(r13);//invoke %9 = (%13) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r14 = true;
            if(r9 === r14){
               control_flow_pc = 916;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 916:
            var r16 = new WyJS.Integer(1);
            var r15 = f$Z9bF59$WL1f$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$l$VC2$n0VR$B5(r16);//invoke %15 = (%16) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r17 = false;
            if(r15 === r17){
               control_flow_pc = 917;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 917:
            return;
      }
   }
}

