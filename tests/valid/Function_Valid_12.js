function f(r0){//function(Function_Valid_12:msg) -> int
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
      }
   }
}

function f(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
      }
   }
}

function f(r0){//function([real]) -> [real]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [real]
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
            var r4 = new WyJS.List([r1, r2, r3]);
            var r0 = f(r4);//invoke %0 = (%4) Function_Valid_12:f : function([int]) -> [int]
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.List([r5, r6, r7]);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 265;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 265:
            var r10 = new WyJS.Real(1.2);
            var r11 = new WyJS.Real(2.2);
            var r12 = new WyJS.Real(3.3);
            var r13 = new WyJS.List([r10, r11, r12]);
            var r9 = f(r13);//invoke %9 = (%13) Function_Valid_12:f : function([real]) -> [real]
            var r14 = new WyJS.Real(1.2);
            var r15 = new WyJS.Real(2.2);
            var r16 = new WyJS.Real(3.3);
            var r17 = new WyJS.List([r14, r15, r16]);
            if(WyJS.equals(r9, r17, true)){
               control_flow_pc = 266;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 266:
      }
   }
}

