function getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$lc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0){//function(OpenRecord_Valid_1:OpenRecord) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("field");//fieldload %1 = %0 field : {int field,...}
            return r1;//return %1 : int
            return;
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Record(["field"], [r2], new WyJS.Type.Record(["field"], [new WyJS.Type.Int()]));
            var r1 = r3;//assign %1 = %3  : {int field}
            var r0 = r1;//assign %0 = %1  : {int field,...}
            var r4 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$lc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %4 = (%0) OpenRecord_Valid_1:getField : function(OpenRecord_Valid_1:OpenRecord) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r5, true)){
               control_flow_pc = 1877;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1877:
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.List([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = new WyJS.Record(["field", "x"], [r6, r7], new WyJS.Type.Record(["field", "x"], [new WyJS.Type.Int(), new WyJS.Type.List(new WyJS.Type.Int())]));
            var r0 = r8;//assign %0 = %8  : {int field,[int+] x}
            var r9 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$lc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %9 = (%0) OpenRecord_Valid_1:getField : function(OpenRecord_Valid_1:OpenRecord) -> int
            var r10 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 1878;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1878:
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Record(["field", "x", "y"], [r11, r12, r13], new WyJS.Type.Record(["field", "x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = r14;//assign %0 = %14  : {int field,int x,int y}
            var r15 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$lc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %15 = (%0) OpenRecord_Valid_1:getField : function(OpenRecord_Valid_1:OpenRecord) -> int
            var r16 = new WyJS.Integer(3);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 1879;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1879:
            return;
      }
   }
}

