function f(r0){//function(TypeEquals_Valid_12:expr) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Int())){
               control_flow_pc = 60;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 61;
            control_flow_repeat = true;
            continue outer;//goto label61
         case 60:
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 62;
            control_flow_repeat = true;
            continue outer;//goto label62
         case 61:
            var r2 = false;
            return r2;//return %2 : bool
         case 62:
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
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int|{int x,int y}
            var r3 = f(r0);//invoke %3 = (%0) TypeEquals_Valid_12:f : function(TypeEquals_Valid_12:expr) -> bool
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 63;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 63:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Record(["x", "y"], [r5, r6], new WyJS.Type.Record(["x", "y"], [new WyJS.Type.Int(), new WyJS.Type.Int()]));
            r0 = r7;//assign %0 = %7  : {int x,int y}
            var r8 = f(r0);//invoke %8 = (%0) TypeEquals_Valid_12:f : function(TypeEquals_Valid_12:expr) -> bool
            var r9 = false;
            if(r8 === r9){
               control_flow_pc = 64;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 64:
      }
   }
}

