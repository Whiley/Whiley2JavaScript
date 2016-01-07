function sum_1$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 185;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 186;
            control_flow_repeat = true;
            continue outer;//goto label186
         case 185:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 187;
            control_flow_repeat = true;
            continue outer;//goto label187
         case 186:
            var r2 = r0.fieldLoad("data");//fieldload %2 = %0 data : X<{int data,X|null next}>
            var r4 = r0.fieldLoad("next");//fieldload %4 = %0 next : X<{int data,X|null next}>
            var r3 = sum_1$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r4);//invoke %3 = (%4) IfElse_Valid_4:sum_1 : function(IfElse_Valid_4:LinkedList) -> int
            var r5 = r2.add(r3);//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 187:
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
               control_flow_pc = 188;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 189;
            control_flow_repeat = true;
            continue outer;//goto label189
         case 188:
            var r1 = new WyJS.Integer(0);
            return r1;//return %1 : int
            control_flow_pc = 190;
            control_flow_repeat = true;
            continue outer;//goto label190
         case 189:
            var r2 = r0.fieldLoad("data");//fieldload %2 = %0 data : X<{int data,X|null next}>
            var r4 = r0.fieldLoad("next");//fieldload %4 = %0 next : X<{int data,X|null next}>
            var r3 = sum_2$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r4);//invoke %3 = (%4) IfElse_Valid_4:sum_2 : function(IfElse_Valid_4:LinkedList) -> int
            var r5 = r2.add(r3);//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 190:
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
               control_flow_pc = 191;
               control_flow_repeat = true;
               continue outer;
            }
            var r1 = r0.fieldLoad("data");//fieldload %1 = %0 data : X<{int data,X|null next}>
            var r3 = r0.fieldLoad("next");//fieldload %3 = %0 next : X<{int data,X|null next}>
            var r2 = sum_3$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r3);//invoke %2 = (%3) IfElse_Valid_4:sum_3 : function(IfElse_Valid_4:LinkedList) -> int
            var r4 = r1.add(r2);//add %4 = %1, %2 : int
            return r4;//return %4 : int
            control_flow_pc = 192;
            control_flow_repeat = true;
            continue outer;//goto label192
         case 191:
            var r5 = new WyJS.Integer(0);
            return r5;//return %5 : int
         case 192:
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
               control_flow_pc = 193;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 193:
            var r11 = sum_2$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %11 = (%0) IfElse_Valid_4:sum_2 : function(IfElse_Valid_4:LinkedList) -> int
            var r12 = new WyJS.Integer(6);
            if(WyJS.equals(r11, r12, true)){
               control_flow_pc = 194;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 194:
            var r13 = sum_3$Z9bFaA$WL1T$FH$N5$40$Q$B6$_0kM$N4$W0$Q$Z5$Z0kM$FY5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %13 = (%0) IfElse_Valid_4:sum_3 : function(IfElse_Valid_4:LinkedList) -> int
            var r14 = new WyJS.Integer(6);
            if(WyJS.equals(r13, r14, true)){
               control_flow_pc = 195;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 195:
            return;
      }
   }
}

