function getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$oc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0){//function(OpenRecord_Valid_4:OpenRecord) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["x"], [new WyJS.Type.Int()]))){
               control_flow_pc = 989;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 990;
            control_flow_repeat = true;
            continue outer;//goto label990
         case 989:
            var r1 = r0.fieldLoad("x");//fieldload %1 = %0 x : {int x}
            return r1;//return %1 : int
            control_flow_pc = 991;
            control_flow_repeat = true;
            continue outer;//goto label991
         case 990:
            if(WyJS.is(r0, new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]))){
               control_flow_pc = 992;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 993;
            control_flow_repeat = true;
            continue outer;//goto label993
         case 992:
            var r2 = r0.fieldLoad("x");//fieldload %2 = %0 x : {int x,int y}
            var r3 = r0.fieldLoad("y");//fieldload %3 = %0 y : {int x,int y}
            var r4 = r2.add(r3);//add %4 = %2, %3 : int
            return r4;//return %4 : int
            control_flow_pc = 991;
            control_flow_repeat = true;
            continue outer;//goto label991
         case 993:
            var r5 = r0.fieldLoad("x");//fieldload %5 = %0 x : {int x,...}
            var r6 = r5.neg();//neg %6 = %5 : int
            return r6;//return %6 : int
         case 991:
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
            var r3 = new WyJS.Record(["x"], [r2], new WyJS.Type.Record(["x"], [new WyJS.Type.Int()]));
            var r1 = r3.clone();//assign %1 = %3  : {int x}
            var r0 = r1.clone();//assign %0 = %1  : {int x,...}
            var r4 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$oc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %4 = (%0) OpenRecord_Valid_4:getField : function(OpenRecord_Valid_4:OpenRecord) -> int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r4, r5, true)){
               control_flow_pc = 994;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 994:
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Record(["x", "y"], [r6, r7], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = r8.clone();//assign %0 = %8  : {int x,int y}
            var r9 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$oc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %9 = (%0) OpenRecord_Valid_4:getField : function(OpenRecord_Valid_4:OpenRecord) -> int
            var r10 = new WyJS.Integer(4);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 995;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 995:
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Record(["x", "y", "z"], [r11, r12, r13], new WyJS.Type.Record(["x", "y", "z"], [new WyJS.Type.Int(), new WyJS.Type.Int(), new WyJS.Type.Int()]));
            var r0 = r14.clone();//assign %0 = %14  : {int x,int y,int z}
            var r15 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$oc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %15 = (%0) OpenRecord_Valid_4:getField : function(OpenRecord_Valid_4:OpenRecord) -> int
            var r16 = new WyJS.Integer(3);
            var r17 = r16.neg();//neg %17 = %16 : int
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 996;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 996:
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Array([new WyJS.Integer(104), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r20 = new WyJS.Record(["x", "y"], [r18, r19], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Array(new WyJS.Type.Int())]));
            var r0 = r20.clone();//assign %0 = %20  : {int x,int[] y}
            var r21 = getField$Z9bFaA$WL1e$kI$$6$_0VQ$74$_0kN$w5$m0$O$w4$L0FN$k5$d0$O$w4$oc0$E0$R$J5$i0VJ$J5$Y0kQ$76$Zx(r0);//invoke %21 = (%0) OpenRecord_Valid_4:getField : function(OpenRecord_Valid_4:OpenRecord) -> int
            var r22 = new WyJS.Integer(2);
            var r23 = r22.neg();//neg %23 = %22 : int
            if(WyJS.equals(r21, r23, true)){
               control_flow_pc = 997;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 997:
            return;
      }
   }
}

