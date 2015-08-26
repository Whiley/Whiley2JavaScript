function f$Z9dFXWYl$1Ms(r0, r1){//function([int],int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r3 = r0.sublist(r2, r1);
            return r3;//return %3 : [int]
            return;
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(67), new WyJS.Integer(114), new WyJS.Integer(117), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : [int+]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(0);
            var r3 = f$Z9dFXWYl$1Ms(r0, r4);//invoke %3 = (%0, %4) String_Valid_7:f : function([int],int) -> [int]
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 2229;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2229:
            var r7 = new WyJS.Integer(1);
            var r6 = f$Z9dFXWYl$1Ms(r0, r7);//invoke %6 = (%0, %7) String_Valid_7:f : function([int],int) -> [int]
            var r8 = new WyJS.List([new WyJS.Integer(72)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 2230;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2230:
            var r10 = new WyJS.Integer(5);
            var r9 = f$Z9dFXWYl$1Ms(r0, r10);//invoke %9 = (%0, %10) String_Valid_7:f : function([int],int) -> [int]
            var r11 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 2231;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2231:
            var r13 = new WyJS.Integer(10);
            var r12 = f$Z9dFXWYl$1Ms(r0, r13);//invoke %12 = (%0, %13) String_Valid_7:f : function([int],int) -> [int]
            var r14 = new WyJS.List([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(67), new WyJS.Integer(114), new WyJS.Integer(117), new WyJS.Integer(101)], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 2232;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2232:
            return;
      }
   }
}

