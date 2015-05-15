function index(r0, r1){//function(Access_Valid_1:listdict,int) -> any
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r2;//return %2 : any
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
            var r3 = 1;//const %3 = 1 : int
            var r4 = 2;//const %4 = 2 : int
            var r5 = 3;//const %5 = 3 : int
            var r2 = r6;//assign %2 = %6  : [int]
            var r0 = r2;//assign %0 = %2  : [int]
            var r8 = 0;//const %8 = 0 : int
            var r7 = index(r0, r8);
            var r9 = 1;//const %9 = 1 : int
            if(r7  ==  r9){
               control_flow_pc = 39;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 39:
            var r11 = 1;//const %11 = 1 : int
            var r10 = index(r0, r11);
            var r12 = 2;//const %12 = 2 : int
            if(r10  ==  r12){
               control_flow_pc = 40;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 40:
            var r14 = 2;//const %14 = 2 : int
            var r13 = index(r0, r14);
            var r15 = 3;//const %15 = 3 : int
            if(r13  ==  r15){
               control_flow_pc = 41;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 41:
            var r17 = 1;//const %17 = 1 : int
            var r18 = [104,101,108,108,111];//const %18 = [104,101,108,108,111] : [int+]
            var r19 = 2;//const %19 = 2 : int
            var r20 = [99,114,117,101,108];//const %20 = [99,114,117,101,108] : [int+]
            var r21 = 3;//const %21 = 3 : int
            var r22 = [119,111,114,108,100];//const %22 = [119,111,114,108,100] : [int+]
            var r16 = r23;//assign %16 = %23  : {int->[int+]}
            var r1 = r16;//assign %1 = %16  : {int->[int]}
            var r25 = 1;//const %25 = 1 : int
            var r24 = index(r1, r25);
            var r26 = [104,101,108,108,111];//const %26 = [104,101,108,108,111] : [int+]
            if(r24  ==  r26){
               control_flow_pc = 42;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 42:
            var r28 = 2;//const %28 = 2 : int
            var r27 = index(r1, r28);
            var r29 = [99,114,117,101,108];//const %29 = [99,114,117,101,108] : [int+]
            if(r27  ==  r29){
               control_flow_pc = 43;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 43:
            var r31 = 3;//const %31 = 3 : int
            var r30 = index(r1, r31);
            var r32 = [119,111,114,108,100];//const %32 = [119,111,114,108,100] : [int+]
            if(r30  ==  r32){
               control_flow_pc = 44;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 44:
      }
   }
}

test();
