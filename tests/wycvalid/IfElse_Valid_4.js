function sum_1(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;
         case 0:
            var r1 = 0;//const %1 = 0 : int
            return r1;//return %1 : int
            control_flow_pc = 2;
            control_flow_repeat = true;
            continue outer;
         case 1:
            var r2 = r0.data;
            var r4 = r0.next;
            var r3 = sum_1(r4);
            var r5 = r2 + r3;//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 2:
      }
   }
}

function sum_2(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            control_flow_pc = 4;
            control_flow_repeat = true;
            continue outer;
         case 3:
            var r1 = 0;//const %1 = 0 : int
            return r1;//return %1 : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;
         case 4:
            var r2 = r0.data;
            var r4 = r0.next;
            var r3 = sum_2(r4);
            var r5 = r2 + r3;//add %5 = %2, %3 : int
            return r5;//return %5 : int
         case 5:
      }
   }
}

function sum_3(r0){//function(IfElse_Valid_4:LinkedList) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.data;
            var r3 = r0.next;
            var r2 = sum_3(r3);
            var r4 = r1 + r2;//add %4 = %1, %2 : int
            return r4;//return %4 : int
            control_flow_pc = 7;
            control_flow_repeat = true;
            continue outer;
         case 6:
            var r5 = 0;//const %5 = 0 : int
            return r5;//return %5 : int
         case 7:
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = null;//const %3 = null : null
            var r4 = {next: r2, data: r3};
            var r1 = r4;//assign %1 = %4  : {int data,null next}
            var r0 = r1;//assign %0 = %1  : X<null|{int data,X next}>
            var r5 = 2;//const %5 = 2 : int
            var r6 = {next: r5, data: r0};
            var r0 = r6;//assign %0 = %6  : {int data,{int data,null next} next}
            var r7 = 3;//const %7 = 3 : int
            var r8 = {next: r7, data: r0};
            var r0 = r8;//assign %0 = %8  : {int data,{int data,{int data,null next} next} next}
            var r9 = sum_1(r0);
            var r10 = 6;//const %10 = 6 : int
            if(r9  ==  r10){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 8:
            var r11 = sum_2(r0);
            var r12 = 6;//const %12 = 6 : int
            if(r11  ==  r12){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 9:
            var r13 = sum_3(r0);
            var r14 = 6;//const %14 = 6 : int
            if(r13  ==  r14){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 10:
      }
   }
}

test();
