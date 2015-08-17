function lastIndexOf$Z9dFas1FVYGs(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.Integer(1);
            var r8 = r7.neg();//neg %8 = %7 : int
            var r6 = r8;//assign %6 = %8  : int
            var r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %3, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18)
               var r9 = new WyJS.Integer(0);
               if(WyJS.lt(r2, r9, false)){
                  control_flow_pc = 752;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r10 = new WyJS.Integer(1);
               var r11 = r10.neg();//neg %11 = %10 : int
               if(WyJS.lt(r3, r11, false)){
                  control_flow_pc = 752;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r12 = r0.length();//lengthof %12 = %0 : [int]
               if(WyJS.lt(r3, r12, false)){
                  control_flow_pc = 753;
                  control_flow_repeat = true;
                  continue outer;
               }
            case 752:
               throw {name: 'Assert Failed', message: 'fail'}
            case 753:
               var r13 = new WyJS.Integer(0);
               if(WyJS.gt(r3, r13, true)){
                  control_flow_pc = 754;
                  control_flow_repeat = true;
                  continue outer;
               }
               control_flow_pc = 755;
               control_flow_repeat = true;
               continue outer;//goto label755
            case 754:
               var r14 = r0.getValue(r3);
               if(WyJS.equals(r14, r1, true)){
                  control_flow_pc = 755;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 755:
               var r15 = r0.length();//lengthof %15 = %0 : [int]
               var r16 = r0.getValue(r2);
               var r3 = r2;//assign %3 = %2  : int
               var r17 = new WyJS.Integer(1);
               var r18 = r2.add(r17);//add %18 = %2, %17 : int
               var r2 = r18;//assign %2 = %18  : int
            }
         case 756:
            return r3;//return %3 : int
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.List([r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            r1 = r8.clone();//assign %1 = %8  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r10 = new WyJS.Integer(0);
            var r9 = lastIndexOf$Z9dFas1FVYGs(r0, r10);//invoke %9 = (%0, %10) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r11 = new WyJS.Integer(1);
            var r12 = r11.neg();//neg %12 = %11 : int
            if(WyJS.equals(r9, r12, true)){
               control_flow_pc = 758;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 758:
            var r14 = new WyJS.Integer(1);
            var r13 = lastIndexOf$Z9dFas1FVYGs(r0, r14);//invoke %13 = (%0, %14) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 759;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 759:
            var r17 = new WyJS.Integer(2);
            var r16 = lastIndexOf$Z9dFas1FVYGs(r0, r17);//invoke %16 = (%0, %17) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r18 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r18, true)){
               control_flow_pc = 760;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 760:
            var r20 = new WyJS.Integer(3);
            var r19 = lastIndexOf$Z9dFas1FVYGs(r0, r20);//invoke %19 = (%0, %20) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r21 = new WyJS.Integer(3);
            if(WyJS.equals(r19, r21, true)){
               control_flow_pc = 761;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 761:
      }
   }
}

