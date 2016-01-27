function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(1);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            return r2;//return %2 : int
            return;
      }
   }
}

function g$Z9dFaGYmBFs1(r0, r1){//function(int,int) -> (int,int)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Tuple([r0, r1], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r2;//return %2 : (int,int)
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
            var r6 = new WyJS.Integer(1);
            var r5 = f$Y9bFXA$W(r6);//invoke %5 = (%6) Requires_Valid_1:f : function(int) -> int
            var r3 = g$Z9dFaGYmBFs1(r4, r5);//invoke %3 = (%4, %5) Requires_Valid_1:g : function(int,int) -> (int,int)
            var r2 = r3;//assign %2 = %3  : (int,int)
            var r7 = r2.tupleLoad(0);
            var r0 = r7;//assign %0 = %7  : int
            var r8 = r2.tupleLoad(1);
            var r1 = r8;//assign %1 = %8  : int
            var r9 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 686:
            var r10 = new WyJS.Integer(2);
            if(WyJS.equals(r1, r10, true)){
               control_flow_pc = 687;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 687:
            return;
      }
   }
}

