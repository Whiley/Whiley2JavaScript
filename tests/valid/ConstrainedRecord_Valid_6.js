function parseWhiteSpace$Y9bFXL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VC4$n0$S$35$o0FOF7(r0){//function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("pos");//fieldload %1 = %0 pos : {int[] input,int pos}
            var r2 = r0.fieldLoad("input");//fieldload %2 = %0 input : {int[] input,int pos}
            var r3 = r2.length();//lengthof %3 = %2 : int[]
            if(WyJS.gt(r1, r3, true)){
               control_flow_pc = 1286;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.fieldLoad("input");//fieldload %4 = %0 input : {int[] input,int pos}
            var r5 = r0.fieldLoad("pos");//fieldload %5 = %0 pos : {int[] input,int pos}
            var r6 = r4.getValue(r5);
            var r7 = new WyJS.Integer(32);
            if(WyJS.equals(r6, r7, false)){
               control_flow_pc = 1286;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.fieldLoad("input");//fieldload %9 = %0 input : {int[] input,int pos}
            var r10 = r0.fieldLoad("pos");//fieldload %10 = %0 pos : {int[] input,int pos}
            var r11 = new WyJS.Integer(1);
            var r12 = r10.add(r11);//add %12 = %10, %11 : int
            var r13 = new WyJS.Record(["input", "pos"], [r9, r12], new WyJS.Type.Record(["input", "pos"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r8 = parseWhiteSpace$Y9bFXL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VC4$n0$S$35$o0FOF7(r13);//invoke %8 = (%13) ConstrainedRecord_Valid_6:parseWhiteSpace : function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
            return r8;//return %8 : {int[] input,int pos}
            control_flow_pc = 1287;
            control_flow_repeat = true;
            continue outer;//goto label1287
         case 1286:
            return r0;//return %0 : {int[] input,int pos}
         case 1287:
            return;
      }
   }
}

function parseTerm$Y9bFXL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VC4$n0$S$35$o0FOF7(r0){//function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = parseWhiteSpace$Y9bFXL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VC4$n0$S$35$o0FOF7(r0);//invoke %1 = (%0) ConstrainedRecord_Valid_6:parseWhiteSpace : function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
            var r0 = r1.clone();//assign %0 = %1  : {int[] input,int pos}
            return r0;//return %0 : {int[] input,int pos}
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
            var r2 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = new WyJS.Integer(0);
            var r4 = new WyJS.Record(["input", "pos"], [r2, r3], new WyJS.Type.Record(["input", "pos"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            var r1 = r4.clone();//assign %1 = %4  : {int[] input,int pos}
            var r0 = r1.clone();//assign %0 = %1  : {int[] input,int pos}
            var r5 = parseTerm$Y9bFXL1t$kF$w5$i0kR$F6$m0FN$Z5$i0FO$F5$H0FO$B5$j0VR$F5$U0VK$35$g0FP$F5$U0VC4$n0$S$35$o0FOF7(r0);//invoke %5 = (%0) ConstrainedRecord_Valid_6:parseTerm : function(ConstrainedRecord_Valid_6:state) -> ConstrainedRecord_Valid_6:state
            var r6 = new WyJS.Integer(32);
            var r7 = new WyJS.Integer(32);
            var r8 = new WyJS.Integer(72);
            var r9 = new WyJS.Integer(101);
            var r10 = new WyJS.Integer(108);
            var r11 = new WyJS.Integer(108);
            var r12 = new WyJS.Integer(111);
            var r13 = new WyJS.List([r6, r7, r8, r9, r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Record(["input", "pos"], [r13, r14], new WyJS.Type.Record(["input", "pos"], [new WyJS.Type.List(new WyJS.Type.Int()), new WyJS.Type.Int()]));
            if(WyJS.equals(r5, r15, true)){
               control_flow_pc = 1288;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1288:
            return;
      }
   }
}

