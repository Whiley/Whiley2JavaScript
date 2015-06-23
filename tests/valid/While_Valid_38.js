function isSorted(r0){//function([int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = 1;//const %3 = 1 : int
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            while(true){//loop (%1, %4, %5, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20)
               var r13 = r0.length;//lengthof %13 = %0 : [int]
               if(r1  >=  r13){//ifge %1, %13 goto label795 : int
                  control_flow_pc = 795;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r14 = 1;//const %14 = 1 : int
               var r15 = r1 - r14;//sub %15 = %1, %14 : int
               var r16 = r0[r15];
               var r17 = r0[r1];
               if(r16  <=  r17){
                  var r19 = 1;//const %19 = 1 : int
                  var r20 = r1 + r19;//add %20 = %1, %19 : int
                  var r1 = r20;//assign %1 = %20  : int
                  continue;
               }
               var r18 = false;//const %18 = false : bool
               return r18;//return %18 : bool
               var r19 = 1;//const %19 = 1 : int
               var r20 = r1 + r19;//add %20 = %1, %19 : int
               var r1 = r20;//assign %1 = %20  : int
            }
         case 795:
            var r21 = true;//const %21 = true : bool
            return r21;//return %21 : bool
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
            var r1 = 1;//const %1 = 1 : int
            var r2 = 2;//const %2 = 2 : int
            var r3 = 3;//const %3 = 3 : int
            var r4 = 4;//const %4 = 4 : int
            var r5 = [r1, r2, r3, r4];
            var r0 = isSorted(r5);//invoke %0 = (%5) While_Valid_38:isSorted : function([int]) -> bool
            var r6 = true;//const %6 = true : bool
            if(r0  ==  r6){//ifeq %0, %6 goto label797 : bool
               control_flow_pc = 797;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 797:
            var r8 = 1;//const %8 = 1 : int
            var r9 = 2;//const %9 = 2 : int
            var r10 = 4;//const %10 = 4 : int
            var r11 = 3;//const %11 = 3 : int
            var r12 = [r8, r9, r10, r11];
            var r7 = isSorted(r12);//invoke %7 = (%12) While_Valid_38:isSorted : function([int]) -> bool
            var r13 = true;//const %13 = true : bool
            if(r7  ==  r13){//ifeq %7, %13 goto label798 : bool
               control_flow_pc = 798;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 799;
            control_flow_repeat = true;
            continue outer;//goto label799
         case 798:
            throw {name: 'Assert Failed', message: 'fail'}
         case 799:
            var r15 = 4;//const %15 = 4 : int
            var r16 = 2;//const %16 = 2 : int
            var r17 = 3;//const %17 = 3 : int
            var r18 = 5;//const %18 = 5 : int
            var r19 = [r15, r16, r17, r18];
            var r14 = isSorted(r19);//invoke %14 = (%19) While_Valid_38:isSorted : function([int]) -> bool
            var r20 = true;//const %20 = true : bool
            if(r14  ==  r20){//ifeq %14, %20 goto label800 : bool
               control_flow_pc = 800;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 801;
            control_flow_repeat = true;
            continue outer;//goto label801
         case 800:
            throw {name: 'Assert Failed', message: 'fail'}
         case 801:
            var r22 = [];
            var r21 = isSorted(r22);//invoke %21 = (%22) While_Valid_38:isSorted : function([int]) -> bool
            var r23 = true;//const %23 = true : bool
            if(r21  ==  r23){//ifeq %21, %23 goto label802 : bool
               control_flow_pc = 802;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 802:
      }
   }
}

test();
