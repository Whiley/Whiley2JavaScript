function index(r0, r1){//function(Access_Valid_2:liststr,int) -> any
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
               control_flow_pc = 85;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 85:
            var r11 = 1;//const %11 = 1 : int
            var r10 = index(r0, r11);
            var r12 = 2;//const %12 = 2 : int
            if(r10  ==  r12){
               control_flow_pc = 86;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 86:
            var r14 = 2;//const %14 = 2 : int
            var r13 = index(r0, r14);
            var r15 = 3;//const %15 = 3 : int
            if(r13  ==  r15){
               control_flow_pc = 87;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 87:
            var r17 = [72,101,108,108,111,32,87,111,114,108,100];//const %17 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
            var r16 = r17;//assign %16 = %17  : [int+]
            var r1 = r16;//assign %1 = %16  : [int]
            var r19 = 0;//const %19 = 0 : int
            var r18 = index(r1, r19);
            var r20 = 72;//const %20 = 72 : int
            if(r18  ==  r20){
               control_flow_pc = 88;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 88:
            var r22 = 1;//const %22 = 1 : int
            var r21 = index(r1, r22);
            var r23 = 101;//const %23 = 101 : int
            if(r21  ==  r23){
               control_flow_pc = 89;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 89:
            var r25 = 2;//const %25 = 2 : int
            var r24 = index(r1, r25);
            var r26 = 108;//const %26 = 108 : int
            if(r24  ==  r26){
               control_flow_pc = 90;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 90:
      }
   }
}

test();
