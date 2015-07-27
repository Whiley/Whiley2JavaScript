function f(r0, r1){//function(String_Valid_1:nat,[int]) -> null|bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r1.length;//lengthof %3 = %1 : [int]
            if(WyJS.lt(r0, r3, false)){
               control_flow_pc = 2135;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = null;/n            return r4;//return %4 : null|bool
            control_flow_pc = 2136;
            control_flow_repeat = true;
            continue outer;//goto label2136
         case 2135:
            var r6 = r1.getValue(r0);
            var r7 = new WyJS.Integer(79);
            if(WyJS.equals(r6, r7, true)){
               control_flow_pc = 2137;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = false;
            control_flow_pc = 2138;
            control_flow_repeat = true;
            continue outer;//goto label2138
         case 2137:
            var r8 = true;
         case 2138:
            r5 = r8;//assign %5 = %8  : bool
            r2 = r5;//assign %2 = %5  : bool
            return r2;//return %2 : null|bool
         case 2136:
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
            var r2 = new WyJS.List([79,120]);
            var r0 = f(r1, r2);//invoke %0 = (%1, %2) String_Valid_1:f : function(String_Valid_1:nat,[int]) -> null|bool
            var r3 = true;
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2139;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2139:
            var r5 = new WyJS.Integer(0);
            var r6 = new WyJS.List([49,120]);
            var r4 = f(r5, r6);//invoke %4 = (%5, %6) String_Valid_1:f : function(String_Valid_1:nat,[int]) -> null|bool
            var r7 = false;
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 2140;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2140:
            var r9 = new WyJS.Integer(1);
            var r10 = new WyJS.List([79]);
            var r8 = f(r9, r10);//invoke %8 = (%9, %10) String_Valid_1:f : function(String_Valid_1:nat,[int]) -> null|bool
            var r11 = null;/n            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 2141;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2141:
      }
   }
}

