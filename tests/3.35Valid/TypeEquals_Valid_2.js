function f(r0){//function(TypeEquals_Valid_2:expr) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]))){
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 7;
            control_flow_repeat = true;
            continue outer;//goto label7
         case 6:
            var r1 = r0.fieldLoad("err");//fieldload %1 = %0 err : {[int] err}
            var r2 = r1.length();//lengthof %2 = %1 : [int]
            return r2;//return %2 : int
            control_flow_pc = 8;
            control_flow_repeat = true;
            continue outer;//goto label8
         case 7:
            var r3 = new WyJS.Integer(1);
            var r4 = r3.neg();//neg %4 = %3 : int
            return r4;//return %4 : int
         case 8:
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
            var r3 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r4 = new WyJS.Record(["err"], [r3], new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r2 = f(r4);//invoke %2 = (%4) TypeEquals_Valid_2:f : function(TypeEquals_Valid_2:expr) -> int
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r5 = new WyJS.Integer(11);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            var r7 = new WyJS.List([71,111,116,99,104,97]);
            var r8 = new WyJS.Record(["err"], [r7], new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.Record(["op", "lhs"], [r8, r9], new WyJS.Type.Record(["op", "lhs"], [new WyJS.Type.Int(), new WyJS.Type.Record(["err"], [new WyJS.Type.List(new WyJS.Type.Int())])]));
            var r6 = f(r10);//invoke %6 = (%10) TypeEquals_Valid_2:f : function(TypeEquals_Valid_2:expr) -> int
            r0 = r6;//assign %0 = %6  : int
            var r11 = new WyJS.Integer(1);
            var r12 = r11.neg();//neg %12 = %11 : int
            if(WyJS.equals(r0, r12, true)){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 10:
      }
   }
}

