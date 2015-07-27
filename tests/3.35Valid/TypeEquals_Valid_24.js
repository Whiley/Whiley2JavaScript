function f(r0){//function(TypeEquals_Valid_24:T) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List(new WyJS.Type.Int()))){
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 0:
            var r1 = r0.length();//lengthof %1 = %0 : [int]
            return r1;//return %1 : int
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;//goto label2
         case 1:
            return r0;//return %0 : int
         case 2:
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.List([r1, r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f(r5);//invoke %0 = (%5) TypeEquals_Valid_24:f : function(TypeEquals_Valid_24:T) -> int
            var r6 = new WyJS.Integer(4);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r8 = new WyJS.Integer(123);
            var r7 = f(r8);//invoke %7 = (%8) TypeEquals_Valid_24:f : function(TypeEquals_Valid_24:T) -> int
            var r9 = new WyJS.Integer(123);
            if(WyJS.equals(r7, r9, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
      }
   }
}

