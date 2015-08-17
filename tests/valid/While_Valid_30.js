function duplicate$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%1, %2, %7, %8, %9, %10, %11, %12)
               if(WyJS.gt(r1, r0, false)){
                  control_flow_pc = 681;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r7 = new WyJS.Integer(2);
               var r8 = r7.mul(r1);//mul %8 = %7, %1 : int
               if(WyJS.equals(r2, r8, true)){
                  control_flow_pc = 682;
                  control_flow_repeat = true;
                  continue outer;
               }
            case 681:
               throw {name: 'Assert Failed', message: 'fail'}
            case 682:
               var r9 = new WyJS.Integer(2);
               var r10 = r2.add(r9);//add %10 = %2, %9 : int
               var r2 = r10;//assign %2 = %10  : int
               var r11 = new WyJS.Integer(1);
               var r12 = r1.add(r11);//add %12 = %1, %11 : int
               var r1 = r12;//assign %1 = %12  : int
            }
         case 683:
            return r2;//return %2 : int
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
            var r1 = new WyJS.Integer(0);
            var r0 = duplicate$Y9bFXA$W(r1);//invoke %0 = (%1) While_Valid_30:duplicate : function(int) -> int
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 684;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 684:
            var r4 = new WyJS.Integer(1);
            var r3 = duplicate$Y9bFXA$W(r4);//invoke %3 = (%4) While_Valid_30:duplicate : function(int) -> int
            var r5 = new WyJS.Integer(2);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 685;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 685:
            var r7 = new WyJS.Integer(2);
            var r6 = duplicate$Y9bFXA$W(r7);//invoke %6 = (%7) While_Valid_30:duplicate : function(int) -> int
            var r8 = new WyJS.Integer(4);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 686;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 686:
            var r10 = new WyJS.Integer(3);
            var r9 = duplicate$Y9bFXA$W(r10);//invoke %9 = (%10) While_Valid_30:duplicate : function(int) -> int
            var r11 = new WyJS.Integer(6);
            if(WyJS.equals(r9, r11, true)){
               control_flow_pc = 687;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 687:
            var r13 = new WyJS.Integer(4);
            var r12 = duplicate$Y9bFXA$W(r13);//invoke %12 = (%13) While_Valid_30:duplicate : function(int) -> int
            var r14 = new WyJS.Integer(8);
            if(WyJS.equals(r12, r14, true)){
               control_flow_pc = 688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 688:
            var r16 = new WyJS.Integer(5);
            var r15 = duplicate$Y9bFXA$W(r16);//invoke %15 = (%16) While_Valid_30:duplicate : function(int) -> int
            var r17 = new WyJS.Integer(10);
            if(WyJS.equals(r15, r17, true)){
               control_flow_pc = 689;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 689:
            var r19 = new WyJS.Integer(6);
            var r18 = duplicate$Y9bFXA$W(r19);//invoke %18 = (%19) While_Valid_30:duplicate : function(int) -> int
            var r20 = new WyJS.Integer(12);
            if(WyJS.equals(r18, r20, true)){
               control_flow_pc = 690;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 690:
            var r22 = new WyJS.Integer(7);
            var r21 = duplicate$Y9bFXA$W(r22);//invoke %21 = (%22) While_Valid_30:duplicate : function(int) -> int
            var r23 = new WyJS.Integer(14);
            if(WyJS.equals(r21, r23, true)){
               control_flow_pc = 691;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 691:
            var r25 = new WyJS.Integer(8);
            var r24 = duplicate$Y9bFXA$W(r25);//invoke %24 = (%25) While_Valid_30:duplicate : function(int) -> int
            var r26 = new WyJS.Integer(16);
            if(WyJS.equals(r24, r26, true)){
               control_flow_pc = 692;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 692:
            var r28 = new WyJS.Integer(9);
            var r27 = duplicate$Y9bFXA$W(r28);//invoke %27 = (%28) While_Valid_30:duplicate : function(int) -> int
            var r29 = new WyJS.Integer(18);
            if(WyJS.equals(r27, r29, true)){
               control_flow_pc = 693;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 693:
      }
   }
}

