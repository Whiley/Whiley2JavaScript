function f$Z9bF5C9n$WAw(r0){//function(int) -> (int,int)
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(2);
            var r2 = r0.add(r1);//add %2 = %0, %1 : int
            var r3 = new WyJS.Tuple([r0, r2], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            return r3;//return %3 : (int,int)
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
            var r3 = f$Z9bF5C9n$WAw(r4);//invoke %3 = (%4) TupleType_Valid_3:f : function(int) -> (int,int)
            var r2 = r3;//assign %2 = %3  : (int,int)
            var r5 = r2.tupleLoad(0);
            var r0 = r5;//assign %0 = %5  : int
            var r6 = r2.tupleLoad(1);
            var r1 = r6;//assign %1 = %6  : int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 56;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 56:
            var r8 = new WyJS.Integer(3);
            if(WyJS.equals(r1, r8, true)){
               control_flow_pc = 57;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 57:
            return;
      }
   }
}

