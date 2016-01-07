function max$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 832;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 833;
            control_flow_repeat = true;
            continue outer;//goto label833
         case 832:
            return r0;//return %0 : int
         case 833:
            return;
      }
   }
}

function diff$Z9dFad_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0VC2$i0FN$F63ik2(r0, r1){//function(int,int) -> Complex_Valid_6:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 835;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.sub(r1);//sub %4 = %0, %1 : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 836;
            control_flow_repeat = true;
            continue outer;//goto label836
         case 835:
            var r5 = r1.sub(r0);//sub %5 = %1, %0 : int
            var r2 = r5;//assign %2 = %5  : int
         case 836:
            return r2;//return %2 : int
            return;
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
            var r3 = new WyJS.Integer(0);
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r4 = new WyJS.Integer(20);
            if(WyJS.gt(r0, r4, true)){
               control_flow_pc = 837;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = new WyJS.Integer(0);
            var r5 = r6;//assign %5 = %6  : int
            var r1 = r5;//assign %1 = %5  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            var r7 = new WyJS.Integer(20);
            if(WyJS.gt(r1, r7, true)){
               control_flow_pc = 838;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 839;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.Integer(10);
            var r10 = r0.sub(r9);//sub %10 = %0, %9 : int
            var r11 = new WyJS.Integer(10);
            var r12 = r1.sub(r11);//sub %12 = %1, %11 : int
            var r8 = diff$Z9dFad_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0VC2$i0FN$F63ik2(r10, r12);//invoke %8 = (%10, %12) Complex_Valid_6:diff : function(int,int) -> Complex_Valid_6:nat
            var r13 = r0.sub(r1);//sub %13 = %0, %1 : int
            if(WyJS.equals(r8, r13, true)){
               control_flow_pc = 839;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 839:
            if(WyJS.gt(r0, r1, false)){
               control_flow_pc = 840;
               control_flow_repeat = true;
               continue outer;
            }
            var r15 = new WyJS.Integer(10);
            var r16 = r0.sub(r15);//sub %16 = %0, %15 : int
            var r17 = new WyJS.Integer(10);
            var r18 = r1.sub(r17);//sub %18 = %1, %17 : int
            var r14 = diff$Z9dFad_k6$B3$j0FQ$$6$g0FO$V6$U0VK$35$g0FP$F5$U0VC2$i0FN$F63ik2(r16, r18);//invoke %14 = (%16, %18) Complex_Valid_6:diff : function(int,int) -> Complex_Valid_6:nat
            var r19 = r1.sub(r0);//sub %19 = %1, %0 : int
            if(WyJS.equals(r14, r19, true)){
               control_flow_pc = 840;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 840:
            var r20 = new WyJS.Integer(1);
            var r21 = r1.add(r20);//add %21 = %1, %20 : int
            var r1 = r21;//assign %1 = %21  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 838:
            var r22 = new WyJS.Integer(1);
            var r23 = r0.add(r22);//add %23 = %0, %22 : int
            var r0 = r23;//assign %0 = %23  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 837:
            return;
      }
   }
}

