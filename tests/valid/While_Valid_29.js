function find(r0, r1){//function([int],int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9, %10, %11, %12)
               var r7 = r0.length;//lengthof %7 = %0 : [int]
               if(WyJS.gt(r2, r7, true)){
                  control_flow_pc = 677;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r8 = r0[r2];
               if(r8  !=  r1){
                  var r11 = new WyJS.Integer(1);
                  var r12 = r2.add(r11);//add %12 = %2, %11 : int
                  var r2 = r12;//assign %2 = %12  : int
                  continue;
               }
               control_flow_pc = 677;
               control_flow_repeat = true;
               continue outer;//goto label677
               var r11 = new WyJS.Integer(1);
               var r12 = r2.add(r11);//add %12 = %2, %11 : int
               var r2 = r12;//assign %2 = %12  : int
            }
         case 677:
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = [r1, r2, r3];
            var r5 = new WyJS.Integer(1);
            var r0 = find(r4, r5);//invoke %0 = (%4, %5) While_Valid_29:find : function([int],int) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 681;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 681:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = [r8, r9, r10];
            var r12 = new WyJS.Integer(2);
            var r7 = find(r11, r12);//invoke %7 = (%11, %12) While_Valid_29:find : function([int],int) -> int
            var r13 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r13, true)){
               control_flow_pc = 682;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 682:
            var r15 = new WyJS.Integer(1);
            var r16 = new WyJS.Integer(2);
            var r17 = new WyJS.Integer(3);
            var r18 = [r15, r16, r17];
            var r19 = new WyJS.Integer(3);
            var r14 = find(r18, r19);//invoke %14 = (%18, %19) While_Valid_29:find : function([int],int) -> int
            var r20 = new WyJS.Integer(2);
            if(WyJS.equals(r14, r20, true)){
               control_flow_pc = 683;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 683:
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Integer(2);
            var r24 = new WyJS.Integer(3);
            var r25 = [r22, r23, r24];
            var r26 = new WyJS.Integer(1);
            var r27 = r26.neg();//neg %27 = %26 : int
            var r21 = find(r25, r27);//invoke %21 = (%25, %27) While_Valid_29:find : function([int],int) -> int
            var r28 = new WyJS.Integer(3);
            if(WyJS.equals(r21, r28, true)){
               control_flow_pc = 684;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 684:
      }
   }
}

