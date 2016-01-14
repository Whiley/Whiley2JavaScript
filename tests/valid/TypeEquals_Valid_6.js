function f$Z9bF59$WA$(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r3, true)){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Array([new WyJS.Integer(72), new WyJS.Integer(101), new WyJS.Integer(108), new WyJS.Integer(108), new WyJS.Integer(111), new WyJS.Integer(32), new WyJS.Integer(87), new WyJS.Integer(111), new WyJS.Integer(114), new WyJS.Integer(108), new WyJS.Integer(100)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r5 = new WyJS.Record(["input"], [r4], new WyJS.Type.Record(["input"], [new WyJS.Type.Array(new WyJS.Type.Int())]));
            var r1 = r5.clone();//assign %1 = %5  : {int[] input}
            control_flow_pc = 18;
            control_flow_repeat = true;
            continue outer;//goto label18
         case 17:
            var r7 = new WyJS.Array([new WyJS.Integer(112), new WyJS.Integer(114), new WyJS.Integer(111), new WyJS.Integer(98), new WyJS.Integer(108), new WyJS.Integer(101), new WyJS.Integer(109)], new WyJS.Type.Array(new WyJS.Type.Int()));
            var r6 = syntaxError$_9bFaL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$qg0$I0FT$s5$o0FN$V6$40VR$76$j0VRFVY0t12(r7);//invoke %6 = (%7) TypeEquals_Valid_6:syntaxError : function(int[]) -> TypeEquals_Valid_6:SyntaxError
            var r1 = r6.clone();//assign %1 = %6  : {int[] msg}
         case 18:
            if(WyJS.is(r1, new WyJS.Type.Record(["msg"], [new WyJS.Type.Array(new WyJS.Type.Int())]))){
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 20;
            control_flow_repeat = true;
            continue outer;//goto label20
         case 19:
            var r8 = true;
            return r8;//return %8 : bool
            control_flow_pc = 21;
            control_flow_repeat = true;
            continue outer;//goto label21
         case 20:
            var r9 = false;
            return r9;//return %9 : bool
         case 21:
            return;
      }
   }
}

function syntaxError$_9bFaL1e$$K$Z6$k0FO$J3$l0FS$35$g0kR$w4$L0FN$k5$d0$O$w4$qg0$I0FT$s5$o0FN$V6$40VR$76$j0VRFVY0t12(r0){//function(int[]) -> TypeEquals_Valid_6:SyntaxError
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Record(["msg"], [r0], new WyJS.Type.Record(["msg"], [new WyJS.Type.Array(new WyJS.Type.Int())]));
            return r1;//return %1 : {int[] msg}
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
            var r1 = new WyJS.Integer(0);
            var r0 = f$Z9bF59$WA$(r1);//invoke %0 = (%1) TypeEquals_Valid_6:f : function(int) -> bool
            var r2 = true;
            if(r0 === r2){
               control_flow_pc = 22;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 22:
            var r4 = new WyJS.Integer(1);
            var r3 = f$Z9bF59$WA$(r4);//invoke %3 = (%4) TypeEquals_Valid_6:f : function(int) -> bool
            var r5 = false;
            if(r3 === r5){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 23:
            return;
      }
   }
}

