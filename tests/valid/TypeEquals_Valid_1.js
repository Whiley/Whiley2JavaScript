function f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$lF$J5$s0$R$76(r0){//function(TypeEquals_Valid_1:expr) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 1;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;//goto label2
         case 1:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 3;
            control_flow_repeat = true;
            continue outer;//goto label3
         case 2:
            var r2 = false;
            return r2;//return %2 : bool
         case 3:
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
            var r2 = new WyJS.Integer(1);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int|{int x,int y}
            var r3 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$lF$J5$s0$R$76(r0);//invoke %3 = (%0) TypeEquals_Valid_1:f : function(TypeEquals_Valid_1:expr) -> bool
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Record(["x", "y"], [r5, r6], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = r7.clone();//assign %0 = %7  : {int x,int y}
            var r8 = f$Z9bF59$WL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$lF$J5$s0$R$76(r0);//invoke %8 = (%0) TypeEquals_Valid_1:f : function(TypeEquals_Valid_1:expr) -> bool
            var r9 = false;
            if(r8 === r9){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            return;
      }
   }
}

