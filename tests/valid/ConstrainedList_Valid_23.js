function run$Y9dFXc_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$kB5$C0FN$F6$m0FP$V63y(r0, r1){//function(ConstrainedList_Valid_23:Matrix,ConstrainedList_Valid_23:Matrix) -> ConstrainedList_Valid_23:Matrix
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r9 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r8 = r9.clone();//assign %8 = %9  : [void]
            r2 = r8.clone();//assign %2 = %8  : [[int]]
            var r11 = new WyJS.Integer(0);
            var r10 = r11;//assign %10 = %11  : int
            var r3 = r10;//assign %3 = %10  : int
            while(true){//loop (%2, %3, %4, %5, %6, %7, %12, %13, %14, %15, %16, %17, %18, %19, %20, %21, %22, %23, %24, %25, %26, %27, %28, %29, %30, %31, %32, %33, %34, %35, %36, %37, %38, %39, %40)
               var r12 = r0.length();//lengthof %12 = %0 : [[int]]
               var r14 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
               r13 = r14.clone();//assign %13 = %14  : [void]
               r4 = r13.clone();//assign %4 = %13  : [int]
               var r16 = new WyJS.Integer(0);
               var r15 = r16;//assign %15 = %16  : int
               var r5 = r15;//assign %5 = %15  : int
               var r37 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
               var r38 = r2.append(r37);
               r2 = r38.clone();//assign %2 = %38  : [[int]]
               var r39 = new WyJS.Integer(1);
               var r40 = r3.add(r39);//add %40 = %3, %39 : int
               var r3 = r40;//assign %3 = %40  : int
            }
         case 205:
            return r2;//return %2 : [[int]]
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.List([r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = new WyJS.List([r6, r9], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            r3 = r10.clone();//assign %3 = %10  : [[int]]
            r0 = r3.clone();//assign %0 = %3  : [[int]]
            var r12 = new WyJS.Integer(5);
            var r13 = new WyJS.Integer(6);
            var r14 = new WyJS.List([r12, r13], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = new WyJS.Integer(7);
            var r16 = new WyJS.Integer(8);
            var r17 = new WyJS.List([r15, r16], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = new WyJS.List([r14, r17], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            r11 = r18.clone();//assign %11 = %18  : [[int]]
            r1 = r11.clone();//assign %1 = %11  : [[int]]
            var r20 = run$Y9dFXc_$D$B3$j0VQ$B6$o0VR$35$d0VQ$J5$Z0$I$Z5$n0$S$w4$L0FN$k5$d0$O$w4$m$kB5$C0FN$F6$m0FP$V63y(r0, r1);//invoke %20 = (%0, %1) ConstrainedList_Valid_23:run : function(ConstrainedList_Valid_23:Matrix,ConstrainedList_Valid_23:Matrix) -> ConstrainedList_Valid_23:Matrix
            r19 = r20.clone();//assign %19 = %20  : [[int]]
            r2 = r19.clone();//assign %2 = %19  : [[int]]
            var r21 = new WyJS.Integer(19);
            var r22 = new WyJS.Integer(22);
            var r23 = new WyJS.List([r21, r22], new WyJS.Type.List(new WyJS.Type.Int()));
            var r24 = new WyJS.Integer(43);
            var r25 = new WyJS.Integer(50);
            var r26 = new WyJS.List([r24, r25], new WyJS.Type.List(new WyJS.Type.Int()));
            var r27 = new WyJS.List([r23, r26], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            if(WyJS.equals(r2, r27, true)){
               control_flow_pc = 208;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 208:
      }
   }
}
