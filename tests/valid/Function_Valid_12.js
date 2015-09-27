function f$Z9bFaA$WL1d$VG$J6$i0kN$F6$d0kQ$s5$U0VK$35$g0FP$F5$U0FB$7n$FQ$B6$b0(r0){//function(Function_Valid_12:msg) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("op");//fieldload %1 = %0 op : {int op,int s}
            var r2 = r0.fieldLoad("s");//fieldload %2 = %0 s : {int op,int s}
            var r3 = r1.add(r2);//add %3 = %1, %2 : int
            return r3;//return %3 : int
            return;
      }
   }
}

function f$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int[]
            return;
      }
   }
}

function f$Z9bF1D527VGs(r0){//function(real[]) -> real[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : real[]
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f$Z9bF1D527RWz(r4);//invoke %0 = (%4) Function_Valid_12:f : function(int[]) -> int[]
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 294;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 294:
            var r10 = new WyJS.Real(1.2);
            var r11 = new WyJS.Real(2.2);
            var r12 = new WyJS.Real(3.3);
            var r13 = new WyJS.List([r10, r11, r12], new WyJS.Type.List(new WyJS.Type.Real()));
            var r9 = f$Z9bF1D527VGs(r13);//invoke %9 = (%13) Function_Valid_12:f : function(real[]) -> real[]
            var r14 = new WyJS.Real(1.2);
            var r15 = new WyJS.Real(2.2);
            var r16 = new WyJS.Real(3.3);
            var r17 = new WyJS.List([r14, r15, r16], new WyJS.Type.List(new WyJS.Type.Real()));
            if(WyJS.equals(r9, r17, true)){
               control_flow_pc = 295;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 295:
            return;
      }
   }
}

