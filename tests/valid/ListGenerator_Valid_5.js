function f$Z9bFaA$0D5Wz(r0){//function(int[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : int[]
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
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(0);
            var r4 = WyJS.ArrayGen(r2, r3, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r1 = r4.clone(new WyJS.Type.Int());//assign %1 = %4  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r5 = f$Z9bFaA$0D5Wz(r0);//invoke %5 = (%0) ListGenerator_Valid_5:f : function(int[]) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 712;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 712:
            return;
      }
   }
}

