function f(r0){//function([int]) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r5 = r0[r4];
            var r3 = r5;//assign %3 = %5  : int
            var r1 = r3;//assign %1 = %3  : int
            var r7 = new WyJS.Integer(0);
            var r8 = r0[r7];
            var r6 = r8;//assign %6 = %8  : int
            var r2 = r6;//assign %2 = %6  : int
            if(WyJS.equals(r1, r2, true)){
               control_flow_pc = 1634;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1634:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = [r2, r3, r4];
            var r1 = r5;//assign %1 = %5  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            f(r0);//invoke %(%0) ListAccess_Valid_1:f : function([int]) -> void
            var r6 = new WyJS.Integer(0);
            var r7 = r0[r6];
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 1635;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1635:
      }
   }
}

