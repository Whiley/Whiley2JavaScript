function f(r0){//function(TypeEquals_Valid_15:src) -> bool
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
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.List([r1, r2, r3], new WyJS.Type.List(new WyJS.Type.Int()));
            var r0 = f(r4);//invoke %0 = (%4) TypeEquals_Valid_15:f : function(TypeEquals_Valid_15:src) -> bool
            var r5 = true;
            if(r0 === r5){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.List([r7], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.List([r9], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = new WyJS.List([r8, r10], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r6 = f(r11);//invoke %6 = (%11) TypeEquals_Valid_15:f : function(TypeEquals_Valid_15:src) -> bool
            var r12 = true;
            if(r6 === r12){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r14 = new WyJS.Integer(1);
            var r13 = f(r14);//invoke %13 = (%14) TypeEquals_Valid_15:f : function(TypeEquals_Valid_15:src) -> bool
            var r15 = false;
            if(r13 === r15){
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
      }
   }
}

