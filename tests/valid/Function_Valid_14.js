function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
            return;
      }
   }
}

function f$Z9bFaA$0B1E(r0){//function(real) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            return r1;//return %1 : int
            return;
      }
   }
}

function f$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(3);
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
            var r1 = new WyJS.Integer(1);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Function_Valid_14:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 230;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 230:
            var r4 = new WyJS.Real(1.234);
            var r3 = f$Z9bFaA$0B1E(r4);//invoke %3 = (%4) Function_Valid_14:f : function(real) -> int
            var r5 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 231;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 231:
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.Array([r7, r8, r9], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = f$Z9bFaA$0D5Wz(r10);//invoke %6 = (%10) Function_Valid_14:f : function(int[]) -> int
            var r11 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r11, true)){
               control_flow_pc = 232;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 232:
            return;
      }
   }
}

