function isSorted(r0){//function([int]) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(1);
            r2 = r3;//assign %2 = %3  : int
            r1 = r2;//assign %1 = %2  : int
            while(true){//loop (%1, %4, %5, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20)
               var r13 = r0.length;//lengthof %13 = %0 : [int]
               if(WyJS.gt(r1, r13, true)){
                  control_flow_pc = 771;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r14 = new WyJS.Integer(1);
               var r15 = r1.sub(r14);//sub %15 = %1, %14 : int
               var r16 = r0.getValue(r15);
               var r17 = r0.getValue(r1);
               if(WyJS.lt(r16, r17, true)){
                  var r19 = new WyJS.Integer(1);
                  var r20 = r1.add(r19);//add %20 = %1, %19 : int
                  r1 = r20;//assign %1 = %20  : int
                  continue;
               }
               var r18 = false;
               return r18;//return %18 : bool
            }
         case 771:
            var r21 = true;
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.List([r1, r2, r3, r4], new WyJS.List('int'));
            var r0 = isSorted(r5);//invoke %0 = (%5) While_Valid_38:isSorted : function([int]) -> bool
            var r6 = true;
            if(r0 === r6){
               control_flow_pc = 773;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 773:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(4);
            var r11 = new WyJS.Integer(3);
            var r12 = new WyJS.List([r8, r9, r10, r11], new WyJS.List('int'));
            var r7 = isSorted(r12);//invoke %7 = (%12) While_Valid_38:isSorted : function([int]) -> bool
            var r13 = true;
            if(r7 === r13){
               control_flow_pc = 774;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 775;
            control_flow_repeat = true;
            continue outer;//goto label775
         case 774:
            throw {name: 'Assert Failed', message: 'fail'}
         case 775:
            var r15 = new WyJS.Integer(4);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = new WyJS.Integer(5);
            var r19 = new WyJS.List([r15, r16, r17, r18], new WyJS.List('int'));
            var r14 = isSorted(r19);//invoke %14 = (%19) While_Valid_38:isSorted : function([int]) -> bool
            var r20 = true;
            if(r14 === r20){
               control_flow_pc = 776;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 777;
            control_flow_repeat = true;
            continue outer;//goto label777
         case 776:
            throw {name: 'Assert Failed', message: 'fail'}
         case 777:
            var r22 = new WyJS.List([];
, new WyJS.List('void'));
            var r21 = isSorted(r22);//invoke %21 = (%22) While_Valid_38:isSorted : function([int]) -> bool
            var r23 = true;
            if(r21 === r23){
               control_flow_pc = 778;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 778:
      }
   }
}

