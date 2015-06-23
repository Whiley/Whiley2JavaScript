function append(r0, r1){//function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = [];
            if(WyJS.equals(r0, r2, false)){
               control_flow_pc = 394;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : X<[X]>
            control_flow_pc = 395;
            control_flow_repeat = true;
            continue outer;//goto label395
         case 394:
            var r4 = new WyJS.Integer(0);
            var r5 = r0[r4];
            var r3 = append(r5, r1);//invoke %3 = (%5, %1) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            var r6 = new WyJS.Integer(0);
            var r8 = new WyJS.Integer(0);
            var r9 = r0[r8];
            var r7 = append(r9, r1);//invoke %7 = (%9, %1) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            r0[r6] = r7;//update %0[%6] = %7 : X<[X]> -> X<[X]>
            return r0;//return %0 : X<[X]>
         case 395:
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
            var r4 = [];
            var r3 = r4;//assign %3 = %4  : [void]
            var r0 = r3;//assign %0 = %3  : X<[X]>
            var r7 = [];
            var r8 = [r7];
            var r6 = append(r0, r8);//invoke %6 = (%0, %8) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            var r5 = r6;//assign %5 = %6  : X<[X]>
            var r1 = r5;//assign %1 = %5  : X<[X]>
            var r11 = [];
            var r12 = [r11];
            var r10 = append(r1, r12);//invoke %10 = (%1, %12) RecursiveType_Valid_30:append : function(RecursiveType_Valid_30:Recursive,RecursiveType_Valid_30:Recursive) -> RecursiveType_Valid_30:Recursive
            var r9 = r10;//assign %9 = %10  : X<[X]>
            var r2 = r9;//assign %2 = %9  : X<[X]>
            var r13 = [];
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 396;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 396:
            var r14 = [];
            var r15 = [r14];
            if(WyJS.equals(r1, r15, true)){
               control_flow_pc = 397;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 397:
            var r16 = [];
            var r17 = [r16];
            var r18 = [r17];
            if(WyJS.equals(r2, r18, true)){
               control_flow_pc = 398;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 398:
      }
   }
}

