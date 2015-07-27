function has(r0, r1){//function(int,[int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9)
               var r5 = r1.length;//lengthof %5 = %1 : [int]
               if(WyJS.gt(r2, r5, true)){
                  control_flow_pc = 2150;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = r1.getValue(r2);
               if(WyJS.equals(r0, r6, false)){
                  var r8 = new WyJS.Integer(1);
                  var r9 = r2.add(r8);//add %9 = %2, %8 : int
                  r2 = r9;//assign %2 = %9  : int
                  continue;
               }
               var r7 = true;
               return r7;//return %7 : bool
            }
         case 2150:
            var r10 = false;
            return r10;//return %10 : bool
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
            var r2 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            r1 = r2.clone();//assign %1 = %2  : [int+]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(108);
            var r3 = has(r4, r0);//invoke %3 = (%4, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r5 = true;
            if(r3 === r5){
               control_flow_pc = 2152;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2152:
            var r7 = new WyJS.Integer(101);
            var r6 = has(r7, r0);//invoke %6 = (%7, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r8 = true;
            if(r6 === r8){
               control_flow_pc = 2153;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2153:
            var r10 = new WyJS.Integer(104);
            var r9 = has(r10, r0);//invoke %9 = (%10, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r11 = false;
            if(r9 === r11){
               control_flow_pc = 2154;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2154:
            var r13 = new WyJS.Integer(122);
            var r12 = has(r13, r0);//invoke %12 = (%13, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r14 = false;
            if(r12 === r14){
               control_flow_pc = 2155;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2155:
            var r16 = new WyJS.Integer(72);
            var r15 = has(r16, r0);//invoke %15 = (%16, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r17 = true;
            if(r15 === r17){
               control_flow_pc = 2156;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2156:
      }
   }
}

