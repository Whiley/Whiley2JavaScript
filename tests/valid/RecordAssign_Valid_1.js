function f$Y9_FP8k1$H0FO$B5$j0VR$F5$00kR$B6$d0kO$s5$U0VK$35$g0FP$F5$U0FB6$o0FN$B5$l$$S$J6$k0WE(){//function() -> RecordAssign_Valid_1:tac1tup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = new WyJS.Integer(2);
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Record(["f1", "f2"], [r0, r1], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r2;//return %2 : {int f1,int f2}
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
            var r2 = f$Y9_FP8k1$H0FO$B5$j0VR$F5$00kR$B6$d0kO$s5$U0VK$35$g0FP$F5$U0FB6$o0FN$B5$l$$S$J6$k0WE();//invoke %2 = () RecordAssign_Valid_1:f : function() -> RecordAssign_Valid_1:tac1tup
            var r1 = r2.clone();//assign %1 = %2  : {int f1,int f2}
            var r0 = r1.clone();//assign %0 = %1  : {int f1,int f2}
            var r3 = r0.fieldLoad("f2");//fieldload %3 = %0 f2 : {int f1,int f2}
            var r4 = new WyJS.Integer(2);
            var r5 = r3.sub(r4);//sub %5 = %3, %4 : int
            var r6 = r0.fieldLoad("f2");//fieldload %6 = %0 f2 : {int f1,int f2}
            var r7 = new WyJS.Integer(2);
            var r8 = r6.sub(r7);//sub %8 = %6, %7 : int
            r0.setValue("f1", r8);
            var r9 = r0.fieldLoad("f1");//fieldload %9 = %0 f1 : {int f1,int f2}
            var r10 = r0.fieldLoad("f2");//fieldload %10 = %0 f2 : {int f1,int f2}
            if(WyJS.equals(r9, r10, false)){
               control_flow_pc = 1268;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1268:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(3);
            var r13 = new WyJS.Record(["f1", "f2"], [r11, r12], new WyJS.Type.Record(["f1", "f2"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1269;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1269:
            return;
      }
   }
}

