function max(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 1524;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 1525;
            control_flow_repeat = true;
            continue outer;//goto label1525
         case 1524:
            return r0;//return %0 : int
         case 1525:
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
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 1527;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = r0.sub(r1);//sub %4 = %0, %1 : int
            r2 = r4;//assign %2 = %4  : int
            control_flow_pc = 1528;
            control_flow_repeat = true;
            continue outer;//goto label1528
         case 1527:
            var r5 = r1.sub(r0);//sub %5 = %1, %0 : int
            r2 = r5;//assign %2 = %5  : int
         case 1528:
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
            var r3 = new WyJS.Integer(0);
            r2 = r3;//assign %2 = %3  : int
            r0 = r2;//assign %0 = %2  : int
            while(true){//loop (%0, %1, %4, %5, %6, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23)
               var r4 = new WyJS.Integer(20);
               if(WyJS.gt(r0, r4, true)){
                  control_flow_pc = 1529;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r6 = new WyJS.Integer(0);
               r5 = r6;//assign %5 = %6  : int
               r1 = r5;//assign %1 = %5  : int
               while(true){//loop (%1, %7, %8, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21)
                  var r7 = new WyJS.Integer(20);
                  if(WyJS.gt(r1, r7, true)){
                     control_flow_pc = 1530;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r20 = new WyJS.Integer(1);
                  var r21 = r1.add(r20);//add %21 = %1, %20 : int
                  r1 = r21;//assign %1 = %21  : int
               }
            }
         case 1529:
      }
   }
}

