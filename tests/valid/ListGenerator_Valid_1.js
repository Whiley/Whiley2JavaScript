function f(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.length;//lengthof %3 = %0 : [int]
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            var r4 = new WyJS.Integer(1);
            var r5 = r1.sub(r4);//sub %5 = %1, %4 : int
            var r6 = r0.getValue(r5);
            return r6;//return %6 : int
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
            var r5 = new WyJS.List([r2, r3, r4]);
            var r1 = r5.clone();//assign %1 = %5  : [int]
            var r0 = r1.clone();//assign %0 = %1  : [int]
            var r6 = f(r0);//invoke %6 = (%0) ListGenerator_Valid_1:f : function([int]) -> int
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 1179;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1179:
      }
   }
}

