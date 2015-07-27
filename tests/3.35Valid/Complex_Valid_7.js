function max3(r0, r1, r2){//function(int,int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1536;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.gt(r0, r2, true)){
               control_flow_pc = 1537;
               control_flow_repeat = true;
               continue outer;
            }
         case 1536:
            var r6 = false;
            control_flow_pc = 1538;
            control_flow_repeat = true;
            continue outer;//goto label1538
         case 1537:
            var r6 = true;
         case 1538:
            r5 = r6;//assign %5 = %6  : bool
            r3 = r5;//assign %3 = %5  : bool
            if(WyJS.lt(r1, r0, false)){
               control_flow_pc = 1539;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.gt(r1, r2, true)){
               control_flow_pc = 1540;
               control_flow_repeat = true;
               continue outer;
            }
         case 1539:
            var r8 = false;
            control_flow_pc = 1541;
            control_flow_repeat = true;
            continue outer;//goto label1541
         case 1540:
            var r8 = true;
         case 1541:
            r7 = r8;//assign %7 = %8  : bool
            r4 = r7;//assign %4 = %7  : bool
            var r9 = true;
            if(r3 === r9){
               control_flow_pc = 1542;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1543;
            control_flow_repeat = true;
            continue outer;//goto label1543
         case 1542:
            return r0;//return %0 : int
            control_flow_pc = 1544;
            control_flow_repeat = true;
            continue outer;//goto label1544
         case 1543:
            var r10 = true;
            if(r4 === r10){
               control_flow_pc = 1545;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1546;
            control_flow_repeat = true;
            continue outer;//goto label1546
         case 1545:
            return r1;//return %1 : int
            control_flow_pc = 1544;
            control_flow_repeat = true;
            continue outer;//goto label1544
         case 1546:
            return r2;//return %2 : int
         case 1544:
      }
   }
}

function fn(r0){//method([int]) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r8 = new WyJS.Integer(0);
            r7 = r8;//assign %7 = %8  : int
            r1 = r7;//assign %1 = %7  : int
            while(true){//loop (%1, %2, %3, %4, %5, %6, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33)
               var r10 = r0.length;//lengthof %10 = %0 : [int]
               if(WyJS.gt(r1, r10, true)){
                  control_flow_pc = 1548;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r12 = r0.getValue(r1);
               r11 = r12;//assign %11 = %12  : int
               r2 = r11;//assign %2 = %11  : int
               var r14 = new WyJS.Integer(0);
               r13 = r14;//assign %13 = %14  : int
               r3 = r13;//assign %3 = %13  : int
               while(true){//loop (%3, %4, %5, %6, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31)
                  var r16 = r0.length;//lengthof %16 = %0 : [int]
                  if(WyJS.gt(r3, r16, true)){
                     control_flow_pc = 1550;
                     control_flow_repeat = true;
                     continue outer;
                  }
                  var r18 = r0.getValue(r3);
                  r17 = r18;//assign %17 = %18  : int
                  r4 = r17;//assign %4 = %17  : int
                  var r20 = new WyJS.Integer(0);
                  r19 = r20;//assign %19 = %20  : int
                  r5 = r19;//assign %5 = %19  : int
                  while(true){//loop (%5, %6, %21, %22, %23, %24, %25, %26, %27, %28, %29)
                     var r22 = r0.length;//lengthof %22 = %0 : [int]
                     if(WyJS.gt(r5, r22, true)){
                        control_flow_pc = 1552;
                        control_flow_repeat = true;
                        continue outer;
                     }
                     var r24 = r0.getValue(r5);
                     r23 = r24;//assign %23 = %24  : int
                     r6 = r23;//assign %6 = %23  : int
                     var r28 = new WyJS.Integer(1);
                     var r29 = r5.add(r28);//add %29 = %5, %28 : int
                     r5 = r29;//assign %5 = %29  : int
                  }
               }
            }
         case 1548:
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
            var r0 = new WyJS.Integer(1);
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(4);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.Integer(6);
            var r6 = new WyJS.Integer(7);
            var r7 = new WyJS.Integer(8);
            var r8 = new WyJS.List([r0, r1, r2, r3, r4, r5, r6, r7], new WyJS.List('int'));
            fn(r8);//invoke %(%8) Complex_Valid_7:fn : method([int]) -> void
      }
   }
}

