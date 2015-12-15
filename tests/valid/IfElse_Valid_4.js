function sum_1$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 506;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 507;
            control_flow_repeat = true;
            continue outer;//goto label507
         case 506:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 508;
            control_flow_repeat = true;
            continue outer;//goto label508
         case 507:
            var r2 = r0.fieldLoad("data");//fieldload %2 = %0 data : X<{int data,X|null next}>
            var r4 = r0.fieldLoad("next");//fieldload %4 = %0 next : X<{int data,X|null next}>
            var r3 = sum_1$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r4);//invoke %3 = (%4) IfElse_Valid_4:sum_1 : function(IfElse_Valid_4:LinkedList) -> int
            var r5 = r2.add(r3);//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 508:
            return;
      }
   }
}

function sum_2$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 509;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 510;
            control_flow_repeat = true;
            continue outer;//goto label510
         case 509:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 511;
            control_flow_repeat = true;
            continue outer;//goto label511
         case 510:
            var r2 = r0.fieldLoad("data");//fieldload %2 = %0 data : X<{int data,X|null next}>
            var r4 = r0.fieldLoad("next");//fieldload %4 = %0 next : X<{int data,X|null next}>
            var r3 = sum_2$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r4);//invoke %3 = (%4) IfElse_Valid_4:sum_2 : function(IfElse_Valid_4:LinkedList) -> int
            var r5 = r2.add(r3);//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 511:
            return;
      }
   }
}

function sum_3$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 512;
               control_flow_repeat = true;
               continue outer;
            }
            var r1 = r0.fieldLoad("data");//fieldload %1 = %0 data : X<{int data,X|null next}>
            var r3 = r0.fieldLoad("next");//fieldload %3 = %0 next : X<{int data,X|null next}>
            var r2 = sum_3$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r3);//invoke %2 = (%3) IfElse_Valid_4:sum_3 : function(IfElse_Valid_4:LinkedList) -> int
            var r4 = r1.add(r2);//add %4 = %1, %2 : int
            return r4;//return %4 : int
            control_flow_pc = 513;
            control_flow_repeat = true;
            continue outer;//goto label513
         case 512:
            var r5 = new WyJS.Integer(0);
            return r5;//return %5 : int
         case 513:
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
            var r3 = null;
            var r4 = new WyJS.Record(["data", "next"], [r2, r3], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()]));
            var r1 = r4.clone();//assign %1 = %4  : {int data,null next}
            var r0 = r1;//assign %0 = %1  : X<null|{int data,X next}>
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Record(["data", "next"], [r5, r0], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()])]));
            var r0 = r6.clone();//assign %0 = %6  : {int data,{int data,null next} next}
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Record(["data", "next"], [r7, r0], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()])])]));
            var r0 = r8.clone();//assign %0 = %8  : {int data,{int data,{int data,null next} next} next}
            var r9 = sum_1$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %9 = (%0) IfElse_Valid_4:sum_1 : function(IfElse_Valid_4:LinkedList) -> int
            var r10 = new WyJS.Integer(6);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 514;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 514:
            var r11 = sum_2$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %11 = (%0) IfElse_Valid_4:sum_2 : function(IfElse_Valid_4:LinkedList) -> int
            var r12 = new WyJS.Integer(6);
            if(WyJS.equals(r11, r12, true)){
               control_flow_pc = 515;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 515:
            var r13 = sum_3$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %13 = (%0) IfElse_Valid_4:sum_3 : function(IfElse_Valid_4:LinkedList) -> int
            var r14 = new WyJS.Integer(6);
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 516;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 516:
            return;
      }
   }
}

