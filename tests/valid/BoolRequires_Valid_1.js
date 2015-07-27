function f(r0){//function([bool]) -> [bool]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [bool]
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
            var r1 = true;
            var r2 = new WyJS.List([r1]);
            var r0 = f(r2);//invoke %0 = (%2) BoolRequires_Valid_1:f : function([bool]) -> [bool]
            var r3 = true;
            var r4 = new WyJS.List([r3]);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 1366;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1366:
            var r6 = true;
            var r7 = false;
            var r8 = new WyJS.List([r6, r7]);
            var r5 = f(r8);//invoke %5 = (%8) BoolRequires_Valid_1:f : function([bool]) -> [bool]
            var r9 = true;
            var r10 = false;
            var r11 = new WyJS.List([r9, r10]);
            if(WyJS.equals(r5, r11, true)){
               control_flow_pc = 1367;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1367:
            var r13 = true;
            var r14 = false;
            var r15 = true;
            var r16 = new WyJS.List([r13, r14, r15]);
            var r12 = f(r16);//invoke %12 = (%16) BoolRequires_Valid_1:f : function([bool]) -> [bool]
            var r17 = true;
            var r18 = false;
            var r19 = true;
            var r20 = new WyJS.List([r17, r18, r19]);
            if(WyJS.equals(r12, r20, true)){
               control_flow_pc = 1368;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1368:
      }
   }
}

