function f$Z9dFaGYmBFs1(r0, r1){//function(int,int) -> (int,int)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(2);
            var r3 = r0.add(r2);//add %3 = %0, %2 : int
            var r0 = r3;//assign %0 = %3  : int
            var r4 = new WyJS.Integer(1);
            var r5 = r1.add(r4);//add %5 = %1, %4 : int
            var r1 = r5;//assign %1 = %5  : int
            var r6 = new WyJS.Integer(2);
            var r7 = r6.mul(r1);//mul %7 = %6, %1 : int
            if(WyJS.equals(r7, r0, true)){
               control_flow_pc = 1351;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1351:
            var r8 = new WyJS.Tuple([r0, r1], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r8;//return %8 : (int,int)
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
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(1);
            var r0 = f$Z9dFaGYmBFs1(r1, r2);//invoke %0 = (%1, %2) IntDiv_Valid_5:f : function(int,int) -> (int,int)
            var r3 = new WyJS.Integer(4);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Tuple([r3, r4], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1352;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1352:
            return;
      }
   }
}

