function sum$Z9bFaA$WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$FBP$$I$Z5$i0kP$J5$Z0$I$Z5$n0$SE(r0){//function(RecursiveType_Valid_21:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 250;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 251;
            control_flow_repeat = true;
            continue outer;//goto label251
         case 250:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 252;
            control_flow_repeat = true;
            continue outer;//goto label252
         case 251:
            var r2 = r0.fieldLoad("data");//fieldload %2 = %0 data : X<{int data,X|null next}>
            var r4 = r0.fieldLoad("next");//fieldload %4 = %0 next : X<{int data,X|null next}>
            var r3 = sum$Z9bFaA$WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$FBP$$I$Z5$i0kP$J5$Z0$I$Z5$n0$SE(r4);//invoke %3 = (%4) RecursiveType_Valid_21:sum : function(RecursiveType_Valid_21:LinkedList) -> int
            var r5 = r2.add(r3);//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 252:
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
            var r4 = new WyJS.Integer(1);
            var r5 = null;
            var r6 = new WyJS.Record(["data", "next"], [r4, r5], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()]));
            var r3 = r6.clone();//assign %3 = %6  : {int data,null next}
            var r0 = r3;//assign %0 = %3  : X<null|{int data,X next}>
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Record(["data", "next"], [r8, r0], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()])]));
            var r7 = r9.clone();//assign %7 = %9  : {int data,{int data,null next} next}
            var r1 = r7;//assign %1 = %7  : X<null|{int data,X next}>
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.Record(["data", "next"], [r11, r1], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()])])]));
            var r10 = r12.clone();//assign %10 = %12  : {int data,{int data,{int data,null next} next} next}
            var r2 = r10;//assign %2 = %10  : X<null|{int data,X next}>
            var r13 = sum$Z9bFaA$WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$FBP$$I$Z5$i0kP$J5$Z0$I$Z5$n0$SE(r0);//invoke %13 = (%0) RecursiveType_Valid_21:sum : function(RecursiveType_Valid_21:LinkedList) -> int
            var r14 = new WyJS.Integer(1);
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 253;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 253:
            var r15 = sum$Z9bFaA$WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$FBP$$I$Z5$i0kP$J5$Z0$I$Z5$n0$SE(r1);//invoke %15 = (%1) RecursiveType_Valid_21:sum : function(RecursiveType_Valid_21:LinkedList) -> int
            var r16 = new WyJS.Integer(3);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 254;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 254:
            var r17 = sum$Z9bFaA$WL1i$VJ$J5$Y0FS$76$n0FP$N6$_0$K$Z6$k0FO$w4$L0FN$k5$d0$O$w4$m$FBP$$I$Z5$i0kP$J5$Z0$I$Z5$n0$SE(r2);//invoke %17 = (%2) RecursiveType_Valid_21:sum : function(RecursiveType_Valid_21:LinkedList) -> int
            var r18 = new WyJS.Integer(6);
            if(WyJS.equals(r17, r18, true)){
               control_flow_pc = 255;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 255:
            return;
      }
   }
}

