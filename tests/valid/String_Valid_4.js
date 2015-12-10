function repl$Z9fFa8sNBVk4y2(r0, r1, r2){//function(int,int,int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r3 = r4;//assign %3 = %4  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r7 = r2.length();//lengthof %7 = %2 : int[]
            if(WyJS.gt(r3, r7, true)){
               control_flow_pc = 1082;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r2.getValue(r3);
            if(WyJS.equals(r8, r0, false)){
               control_flow_pc = 1083;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            r2.setValue(r3, r1);
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1083:
            var r9 = new WyJS.Integer(1);
            var r10 = r3.add(r9);//add %10 = %3, %9 : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1082:
            return r2;//return %2 : int[]
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
            var r2 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r4 = new WyJS.Integer(108);
            var r5 = new WyJS.Integer(49);
            var r3 = repl$Z9fFa8sNBVk4y2(r4, r5, r0);//invoke %3 = (%4, %5, %0) String_Valid_4:repl : function(int,int,int[]) -> int[]
            var r6 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(49), new WyJS.Integer(49), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(49), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 1084;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1084:
            return;
      }
   }
}

