function f(r0){//function(TypeEquals_Valid_45:intlist) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 241;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 242;
            control_flow_repeat = true;
            continue outer;//goto label242
         case 241:
            return r0;//return %0 : int
         case 242:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : int
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
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r2 = f(r6);//invoke %2 = (%6) TypeEquals_Valid_45:f : function(TypeEquals_Valid_45:intlist) -> int
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r7 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 243;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 243:
            var r9 = new WyJS.Integer(123);
            var r8 = f(r9);//invoke %8 = (%9) TypeEquals_Valid_45:f : function(TypeEquals_Valid_45:intlist) -> int
            r0 = r8;//assign %0 = %8  : int
            var r10 = new WyJS.Integer(123);
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 244;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 244:
      }
   }
}

