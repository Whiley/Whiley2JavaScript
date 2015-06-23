function sum(r0, r1){//function(int,int) -> Range_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r6 = 0;//const %6 = 0 : int
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            var r8 =             var r7 = r8;//assign %7 = %8  : [int]
            var r3 = r7;//assign %3 = %7  : [int]
            var r10 = 0;//const %10 = 0 : int
            var r9 = r10;//assign %9 = %10  : int
            var r4 = r9;//assign %4 = %9  : int
            while(true){//loop (%2, %4, %11, %12, %13, %14, %15, %16)
               var r12 = r3.length;//lengthof %12 = %3 : [int]
               if(r4  >=  r12){//ifge %4, %12 goto label1608 : int
                  control_flow_pc = 1608;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r13 = 1;//const %13 = 1 : int
               var r14 = r2 + r13;//add %14 = %2, %13 : int
               var r2 = r14;//assign %2 = %14  : int
               var r15 = 1;//const %15 = 1 : int
               var r16 = r4 + r15;//add %16 = %4, %15 : int
               var r4 = r16;//assign %4 = %16  : int
            }
         case 1608:
            return r2;//return %2 : int
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
            var r1 = 0;//const %1 = 0 : int
            var r2 = 10;//const %2 = 10 : int
            var r0 = sum(r1, r2);//invoke %0 = (%1, %2) Range_Valid_1:sum : function(int,int) -> Range_Valid_1:nat
            var r3 = 10;//const %3 = 10 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label1609 : int
               control_flow_pc = 1609;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1609:
            var r5 = 10;//const %5 = 10 : int
            var r6 = 13;//const %6 = 13 : int
            var r4 = sum(r5, r6);//invoke %4 = (%5, %6) Range_Valid_1:sum : function(int,int) -> Range_Valid_1:nat
            var r7 = 3;//const %7 = 3 : int
            if(r4  ==  r7){//ifeq %4, %7 goto label1610 : int
               control_flow_pc = 1610;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1610:
      }
   }
}

test();
