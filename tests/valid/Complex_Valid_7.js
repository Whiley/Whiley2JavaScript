function max3$Y9fFX7i$31(r0, r1, r2){//function(int,int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1551;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.gt(r0, r2, true)){
               control_flow_pc = 1552;
               control_flow_repeat = true;
               continue outer;
            }
         case 1551:
            var r6 = false;
            control_flow_pc = 1553;
            control_flow_repeat = true;
            continue outer;//goto label1553
         case 1552:
            var r6 = true;
         case 1553:
            var r5 = r6;//assign %5 = %6  : bool
            var r3 = r5;//assign %3 = %5  : bool
            if(WyJS.lt(r1, r0, false)){
               control_flow_pc = 1554;
               control_flow_repeat = true;
               continue outer;
            }
            if(WyJS.gt(r1, r2, true)){
               control_flow_pc = 1555;
               control_flow_repeat = true;
               continue outer;
            }
         case 1554:
            var r8 = false;
            control_flow_pc = 1556;
            control_flow_repeat = true;
            continue outer;//goto label1556
         case 1555:
            var r8 = true;
         case 1556:
            var r7 = r8;//assign %7 = %8  : bool
            var r4 = r7;//assign %4 = %7  : bool
            var r9 = true;
            if(r3 === r9){
               control_flow_pc = 1557;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1558;
            control_flow_repeat = true;
            continue outer;//goto label1558
         case 1557:
            return r0;//return %0 : int
            control_flow_pc = 1559;
            control_flow_repeat = true;
            continue outer;//goto label1559
         case 1558:
            var r10 = true;
            if(r4 === r10){
               control_flow_pc = 1560;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1561;
            control_flow_repeat = true;
            continue outer;//goto label1561
         case 1560:
            return r1;//return %1 : int
            control_flow_pc = 1559;
            control_flow_repeat = true;
            continue outer;//goto label1559
         case 1561:
            return r2;//return %2 : int
         case 1559:
      }
   }
}

function fn$3Ab737klNRWz(r0){//method([int]) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r1 = r7;//assign %1 = %7  : int
            while(true){//loop (%1, %2, %3, %4, %5, %6, %9, %10, %11, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33)
               var r9 = new WyJS.Integer(0);
               if(WyJS.gt(r1, r9, true)){
                  control_flow_pc = 1562;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 1562:
               var r10 = r0.length();//lengthof %10 = %0 : [int]
               var r12 = r0.getValue(r1);
               var r11 = r12;//assign %11 = %12  : int
               var r2 = r11;//assign %2 = %11  : int
               var r14 = new WyJS.Integer(0);
               var r13 = r14;//assign %13 = %14  : int
               var r3 = r13;//assign %3 = %13  : int
               var r32 = new WyJS.Integer(1);
               var r33 = r1.add(r32);//add %33 = %1, %32 : int
               var r1 = r33;//assign %1 = %33  : int
            }
         case 1563:
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
            var r0 = new WyJS.Integer(1);
            var r1 = new WyJS.Integer(2);
            var r2 = new WyJS.Integer(3);
            var r3 = new WyJS.Integer(4);
            var r4 = new WyJS.Integer(5);
            var r5 = new WyJS.Integer(6);
            var r6 = new WyJS.Integer(7);
            var r7 = new WyJS.Integer(8);
            var r8 = new WyJS.List([r0, r1, r2, r3, r4, r5, r6, r7], new WyJS.Type.List(new WyJS.Type.Int()));
            fn$3Ab737klNRWz(r8);//invoke %(%8) Complex_Valid_7:fn : method([int]) -> void
      }
   }
}

