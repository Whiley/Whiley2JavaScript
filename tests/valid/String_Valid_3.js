function has(r0, r1){//function(int,[int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = 0;//const %4 = 0 : int
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9)
               var r5 = r1.length;//lengthof %5 = %1 : [int]
               if(r2  >=  r5){//ifge %2, %5 goto label2203 : int
                  control_flow_pc = 2203;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = r1[r2];
               if(r0  !=  r6){
                  var r8 = 1;//const %8 = 1 : int
                  var r9 = r2 + r8;//add %9 = %2, %8 : int
                  var r2 = r9;//assign %2 = %9  : int
                  continue;
               }
               var r7 = true;//const %7 = true : bool
               return r7;//return %7 : bool
               var r8 = 1;//const %8 = 1 : int
               var r9 = r2 + r8;//add %9 = %2, %8 : int
               var r2 = r9;//assign %2 = %9  : int
            }
         case 2203:
            var r10 = false;//const %10 = false : bool
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
            var r2 = [72,101,108,108,111,32,87,111,114,108,100];//const %2 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r1 = r2;//assign %1 = %2  : [int+]
            var r0 = r1;//assign %0 = %1  : [int]
            var r4 = 108;//const %4 = 108 : int
            var r3 = has(r4, r0);//invoke %3 = (%4, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r5 = true;//const %5 = true : bool
            if(r3  ==  r5){//ifeq %3, %5 goto label2205 : bool
               control_flow_pc = 2205;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2205:
            var r7 = 101;//const %7 = 101 : int
            var r6 = has(r7, r0);//invoke %6 = (%7, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r8 = true;//const %8 = true : bool
            if(r6  ==  r8){//ifeq %6, %8 goto label2206 : bool
               control_flow_pc = 2206;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2206:
            var r10 = 104;//const %10 = 104 : int
            var r9 = has(r10, r0);//invoke %9 = (%10, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r11 = false;//const %11 = false : bool
            if(r9  ==  r11){//ifeq %9, %11 goto label2207 : bool
               control_flow_pc = 2207;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2207:
            var r13 = 122;//const %13 = 122 : int
            var r12 = has(r13, r0);//invoke %12 = (%13, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r14 = false;//const %14 = false : bool
            if(r12  ==  r14){//ifeq %12, %14 goto label2208 : bool
               control_flow_pc = 2208;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2208:
            var r16 = 72;//const %16 = 72 : int
            var r15 = has(r16, r0);//invoke %15 = (%16, %0) String_Valid_3:has : function(int,[int]) -> bool
            var r17 = true;//const %17 = true : bool
            if(r15  ==  r17){//ifeq %15, %17 goto label2209 : bool
               control_flow_pc = 2209;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2209:
      }
   }
}

test();
