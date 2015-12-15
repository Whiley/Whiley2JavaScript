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
            var r3 = new WyJS.Integer(1);
            var r2 = f$Z9bF5C9n$WAw(r3);//invoke %2 = (%3) TupleType_Valid_2:f : function(int) -> (int,int)
            var r1 = r2;//assign %1 = %2  : (int,int)
            var r0 = r1;//assign %0 = %1  : (int,int)
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Tuple([r4, r5], new WyJS.Type.Tuple([new WyJS.Type.Int(), new WyJS.Type.Int()]));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 589;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 589:
            return;
      }
   }
}

