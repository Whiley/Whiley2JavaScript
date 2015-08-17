function max$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1539;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 1540;
            control_flow_repeat = true;
            continue outer;//goto label1540
         case 1539:
            return r0;//return %0 : int
         case 1540:
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
               control_flow_pc = 1542;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.sub(r1);//sub %4 = %0, %1 : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 1543;
            control_flow_repeat = true;
            continue outer;//goto label1543
         case 1542:
            var r5 = r1.sub(r0);//sub %5 = %1, %0 : int
            var r2 = r5;//assign %2 = %5  : int
         case 1543:
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
            var r3 = new WyJS.Integer(0);
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            while(true){//loop (%0, %1, %4, %5, %6, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23)
               var r4 = new WyJS.Integer(20);
               var r6 = new WyJS.Integer(0);
               var r5 = r6;//assign %5 = %6  : int
               var r1 = r5;//assign %1 = %5  : int
               var r22 = new WyJS.Integer(1);
               var r23 = r0.add(r22);//add %23 = %0, %22 : int
               var r0 = r23;//assign %0 = %23  : int
            }
         case 1544:
      }
   }
}

