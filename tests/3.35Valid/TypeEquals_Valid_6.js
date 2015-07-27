function f(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r3, true)){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            var r5 = new WyJS.Record(["input"], [r4], new WyJS.Type.Record(["input"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            r1 = r5;//assign %1 = %5  : {[int+] input}
            control_flow_pc = 23;
            control_flow_repeat = true;
            continue outer;//goto label23
         case 22:
            var r7 = new WyJS.List([112,114,111,98,108,101,109]);
            var r6 = syntaxError(r7);//invoke %6 = (%7) TypeEquals_Valid_6:syntaxError : function([int]) -> TypeEquals_Valid_6:SyntaxError
            r1 = r6;//assign %1 = %6  : {[int] msg}
         case 23:
            if(WyJS.is(r1, new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]))){
               control_flow_pc = 24;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 25;
            control_flow_repeat = true;
            continue outer;//goto label25
         case 24:
            var r8 = true;
            return r8;//return %8 : bool
            control_flow_pc = 26;
            control_flow_repeat = true;
            continue outer;//goto label26
         case 25:
            var r9 = false;
            return r9;//return %9 : bool
         case 26:
      }
   }
}

function syntaxError(r0){//function([int]) -> TypeEquals_Valid_6:SyntaxError
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Record(["msg"], [r0], new WyJS.Type.Record(["msg"], [new WyJS.Type.List(new WyJS.Type.Int())]));
            return r1;//return %1 : {[int] msg}
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
            var r1 = new WyJS.Integer(0);
            var r0 = f(r1);//invoke %0 = (%1) TypeEquals_Valid_6:f : function(int) -> bool
            var r2 = true;
            if(r0 === r2){
               control_flow_pc = 27;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 27:
            var r4 = new WyJS.Integer(1);
            var r3 = f(r4);//invoke %3 = (%4) TypeEquals_Valid_6:f : function(int) -> bool
            var r5 = false;
            if(r3 === r5){
               control_flow_pc = 28;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 28:
      }
   }
}

