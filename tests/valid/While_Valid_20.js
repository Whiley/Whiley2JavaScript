function sum$Z9bFaA$WL1T$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0VB$$Y5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0){//function(While_Valid_20:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 321;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.fieldLoad("data");//fieldload %4 = %0 data : X<{int data,X|null next}>
            var r5 = r1.add(r4);//add %5 = %1, %4 : int
            var r1 = r5;//assign %1 = %5  : int
            var r6 = r0.fieldLoad("next");//fieldload %6 = %0 next : X<{int data,X|null next}>
            var r0 = r6;//assign %0 = %6  : X<null|{int data,X next}>
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 321:
            return r1;//return %1 : int
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
            var r2 = null;
            var r1 = r2;//assign %1 = %2  : null
            var r0 = r1;//assign %0 = %1  : X<null|{int data,X next}>
            var r3 = sum$Z9bFaA$WL1T$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0VB$$Y5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %3 = (%0) While_Valid_20:sum : function(While_Valid_20:LinkedList) -> int
            var r4 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r4, true)){
               control_flow_pc = 322;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 322:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Record(["data", "next"], [r5, r0], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()]));
            var r0 = r6.clone();//assign %0 = %6  : {int data,null next}
            var r7 = sum$Z9bFaA$WL1T$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0VB$$Y5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %7 = (%0) While_Valid_20:sum : function(While_Valid_20:LinkedList) -> int
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 323;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 323:
            var r9 = new WyJS.Integer(2324);
            var r10 = new WyJS.Record(["data", "next"], [r9, r0], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()])]));
            var r0 = r10.clone();//assign %0 = %10  : {int data,{int data,null next} next}
            var r11 = sum$Z9bFaA$WL1T$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0VB$$Y5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %11 = (%0) While_Valid_20:sum : function(While_Valid_20:LinkedList) -> int
            var r12 = new WyJS.Integer(2325);
            if(WyJS.equals(r11, r12, true)){
               control_flow_pc = 324;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 324:
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Record(["data", "next"], [r13, r0], new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Record(["data", "next"], [new WyJS.Type.Int(), new WyJS.Type.Null()])])]));
            var r0 = r14.clone();//assign %0 = %14  : {int data,{int data,{int data,null next} next} next}
            var r15 = sum$Z9bFaA$WL1T$kK$V5$d0$Q$J5$U0VK$35$g0FP$F5$U0VB$$Y5$k3$d0VQ$g5$_0$O$k3$d0kR$Fr2(r0);//invoke %15 = (%0) While_Valid_20:sum : function(While_Valid_20:LinkedList) -> int
            var r16 = new WyJS.Integer(2327);
            if(WyJS.equals(r15, r16, true)){
               control_flow_pc = 325;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 325:
            return;
      }
   }
}

