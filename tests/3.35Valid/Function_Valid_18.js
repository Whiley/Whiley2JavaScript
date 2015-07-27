function abs(r0){//function(int) -> Function_Valid_18:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 273;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 274;
            control_flow_repeat = true;
            continue outer;//goto label274
         case 273:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 274:
      }
   }
}

function nop(r0){//function(Function_Valid_18:nat) -> Function_Valid_18:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = abs(r0);//invoke %1 = (%0) Function_Valid_18:abs : function(int) -> Function_Valid_18:nat
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
            var r3 = new WyJS.Integer(123);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r2 = abs(r4);//invoke %2 = (%4) Function_Valid_18:abs : function(int) -> Function_Valid_18:nat
            r1 = r2;//assign %1 = %2  : int
            r0 = r1;//assign %0 = %1  : int
            var r5 = new WyJS.Integer(123);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 276;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 276:
            var r7 = new WyJS.Integer(1);
            var r6 = nop(r7);//invoke %6 = (%7) Function_Valid_18:nop : function(Function_Valid_18:nat) -> Function_Valid_18:nat
            r0 = r6;//assign %0 = %6  : int
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 277;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 277:
      }
   }
}

