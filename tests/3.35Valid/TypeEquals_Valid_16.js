function f(r0){//function(TypeEquals_Valid_16:src) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.List())){
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f(r2);//invoke %0 = (%2) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r3 = true;
            if(r0 === r3){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r5 = new WyJS.Integer(1);
            var r6 = new WyJS.List([r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r4 = f(r7);//invoke %4 = (%7) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r8 = true;
            if(r4 === r8){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r10 = new WyJS.Integer(1);
            var r11 = new WyJS.List([r10], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = new WyJS.List([r11], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r13 = new WyJS.List([r12], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int()))));
            var r9 = f(r13);//invoke %9 = (%13) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r14 = true;
            if(r9 === r14){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            var r16 = new WyJS.Integer(1);
            var r15 = f(r16);//invoke %15 = (%16) TypeEquals_Valid_16:f : function(TypeEquals_Valid_16:src) -> bool
            var r17 = false;
            if(r15 === r17){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
      }
   }
}

