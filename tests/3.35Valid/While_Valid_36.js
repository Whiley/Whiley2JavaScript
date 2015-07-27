function lastIndexOf(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            r4 = r5;//assign %4 = %5  : int
            r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.Integer(1);
            var r8 = r7.neg();//neg %8 = %7 : int
            r6 = r8;//assign %6 = %8  : int
            r3 = r6;//assign %3 = %6  : int
            while(true){//loop (%2, %3, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18)
               var r15 = r0.length;//lengthof %15 = %0 : [int]
               if(WyJS.gt(r2, r15, true)){
                  control_flow_pc = 738;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r16 = r0.getValue(r2);
               if(WyJS.equals(r16, r1, false)){
                  var r17 = new WyJS.Integer(1);
                  var r18 = r2.add(r17);//add %18 = %2, %17 : int
                  r2 = r18;//assign %2 = %18  : int
                  continue;
               }
               r3 = r2;//assign %3 = %2  : int
            }
         case 738:
            return r3;//return %3 : int
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.List([r2, r3, r4, r5, r6, r7], new WyJS.List('int'));
            r1 = r8.clone();//assign %1 = %8  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r10 = new WyJS.Integer(0);
            var r9 = lastIndexOf(r0, r10);//invoke %9 = (%0, %10) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r11 = new WyJS.Integer(1);
            var r12 = r11.neg();//neg %12 = %11 : int
            if(WyJS.equals(r9, r12, true)){
               control_flow_pc = 740;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 740:
            var r14 = new WyJS.Integer(1);
            var r13 = lastIndexOf(r0, r14);//invoke %13 = (%0, %14) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r15 = new WyJS.Integer(4);
            if(WyJS.equals(r13, r15, true)){
               control_flow_pc = 741;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 741:
            var r17 = new WyJS.Integer(2);
            var r16 = lastIndexOf(r0, r17);//invoke %16 = (%0, %17) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r18 = new WyJS.Integer(5);
            if(WyJS.equals(r16, r18, true)){
               control_flow_pc = 742;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 742:
            var r20 = new WyJS.Integer(3);
            var r19 = lastIndexOf(r0, r20);//invoke %19 = (%0, %20) While_Valid_36:lastIndexOf : function([int],int) -> int
            var r21 = new WyJS.Integer(3);
            if(WyJS.equals(r19, r21, true)){
               control_flow_pc = 743;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 743:
      }
   }
}

