function f(r0){//function(TypeEquals_Valid_21:expr) -> bool
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
            var r1 = true;
            return r1;//return %1 : bool
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;//goto label2
         case 1:
            var r2 = false;
            return r2;//return %2 : bool
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
            var r2 = true;
            r1 = r2;//assign %1 = %2  : bool
            r0 = r1;//assign %0 = %1  : bool|[int]
            var r3 = f(r0);//invoke %3 = (%0) TypeEquals_Valid_21:f : function(TypeEquals_Valid_21:expr) -> bool
            var r4 = false;
            if(r3 === r4){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.Integer(2);
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r5, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            r0 = r9.clone();//assign %0 = %9  : [int]
            var r10 = f(r0);//invoke %10 = (%0) TypeEquals_Valid_21:f : function(TypeEquals_Valid_21:expr) -> bool
            var r11 = true;
            if(r10 === r11){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
      }
   }
}

