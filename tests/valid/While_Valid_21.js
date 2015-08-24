function create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r0, r1){//function(While_Valid_21:nat,int) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            r4 = r5.clone();//assign %4 = %5  : [void]
            r2 = r4.clone();//assign %2 = %4  : [int]
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r3, r0, false)){
               control_flow_pc = 589;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r2.length();//lengthof %8 = %2 : [int]
            if(WyJS.equals(r3, r8, true)){
               control_flow_pc = 590;
               control_flow_repeat = true;
               continue outer;
            }
         case 589:
            throw {name: 'Assert Failed', message: 'fail'}
         case 590:
            if(WyJS.gt(r3, r0, true)){
               control_flow_pc = 591;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = r2.append(r9);
            r2 = r10.clone();//assign %2 = %10  : [int]
            var r11 = new WyJS.Integer(1);
            var r12 = r3.add(r11);//add %12 = %3, %11 : int
            var r3 = r12;//assign %3 = %12  : int
         case 591:
            return r2;//return %2 : [int]
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
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Integer(3);
            var r0 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r1, r2);//invoke %0 = (%1, %2) While_Valid_21:create : function(While_Valid_21:nat,int) -> [int]
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.List([r3, r4, r5], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 592;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 592:
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(2);
            var r7 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r8, r9);//invoke %7 = (%8, %9) While_Valid_21:create : function(While_Valid_21:nat,int) -> [int]
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.List([r10, r11], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r12, true)){
               control_flow_pc = 593;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 593:
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(1);
            var r13 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r14, r15);//invoke %13 = (%14, %15) While_Valid_21:create : function(While_Valid_21:nat,int) -> [int]
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.List([r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r13, r18, true)){
               control_flow_pc = 594;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 594:
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(1);
            var r19 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r20, r21);//invoke %19 = (%20, %21) While_Valid_21:create : function(While_Valid_21:nat,int) -> [int]
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.List([r22], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r19, r23, true)){
               control_flow_pc = 595;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 595:
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(0);
            var r24 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r25, r26);//invoke %24 = (%25, %26) While_Valid_21:create : function(While_Valid_21:nat,int) -> [int]
            var r27 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            if(WyJS.equals(r24, r27, true)){
               control_flow_pc = 596;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 596:
      }
   }
}

