function max(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  >=  r1){//ifge %0, %1 goto label1548 : int
               control_flow_pc = 1548;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 1549;
            control_flow_repeat = true;
            continue outer;//goto label1549
         case 1548:
            return r0;//return %0 : int
         case 1549:
      }
   }
}

function diff(r0, r1){//function(int,int) -> Complex_Valid_6:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  <=  r1){//ifle %0, %1 goto label1551 : int
               control_flow_pc = 1551;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0 - r1;//sub %4 = %0, %1 : int
            var r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 1552;
            control_flow_repeat = true;
            continue outer;//goto label1552
         case 1551:
            var r5 = r1 - r0;//sub %5 = %1, %0 : int
            var r2 = r5;//assign %2 = %5  : int
         case 1552:
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
            var r3 = 0;//const %3 = 0 : int
            var r2 = r3;//assign %2 = %3  : int
            var r0 = r2;//assign %0 = %2  : int
            while(true){//loop (%0, %1, %4, %5, %6, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23)
               var r4 = 20;//const %4 = 20 : int
               if(r0  >=  r4){//ifge %0, %4 goto label1553 : int
                  control_flow_pc = 1553;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = 0;//const %6 = 0 : int
               var r5 = r6;//assign %5 = %6  : int
               var r1 = r5;//assign %1 = %5  : int
               while(true){//loop (%1, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21)
                  var r7 = 20;//const %7 = 20 : int
                  if(r1  >=  r7){//ifge %1, %7 goto label1554 : int
                     control_flow_pc = 1554;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r20 = 1;//const %20 = 1 : int
                  var r21 = r1 + r20;//add %21 = %1, %20 : int
                  var r1 = r21;//assign %1 = %21  : int
               }
               var r22 = 1;//const %22 = 1 : int
               var r23 = r0 + r22;//add %23 = %0, %22 : int
               var r0 = r23;//assign %0 = %23  : int
            }
         case 1553:
      }
   }
}

test();
