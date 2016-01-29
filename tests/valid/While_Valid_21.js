function create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r0, r1){//function(While_Valid_21:nat,int) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r6 = WyJS.ArrayGen(r5, r0, new WyJS.Type.Array(new WyJS.Type.Int()));
            var r4 = r6.clone(new WyJS.Type.Int());//assign %4 = %6  : int[]
            var r2 = r4.clone(new WyJS.Type.Int());//assign %2 = %4  : int[]
            var r8 = new WyJS.Integer(0);
            var r7 = r8;//assign %7 = %8  : int
            var r3 = r7;//assign %3 = %7  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case -3:
            if(WyJS.gt(r3, r0, true)){
               control_flow_pc = 346;
               control_flow_repeat = true;
               continue outer;
            }
            r2.setValue(r3, r1);
            var r11 = new WyJS.Integer(1);
            var r12 = r3.add(r11);//add %12 = %3, %11 : int
            var r3 = r12;//assign %3 = %12  : int
            control_flow_pc = -3;
            control_flow_repeat = true;
            break;
         case 346:
            return r2;//return %2 : int[]
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
            var r1 = new WyJS.Integer(3);
            var r2 = new WyJS.Integer(3);
            var r0 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r1, r2);//invoke %0 = (%1, %2) While_Valid_21:create : function(While_Valid_21:nat,int) -> int[]
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Array([r3, r4, r5], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r6, true)){
               control_flow_pc = 347;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 347:
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(2);
            var r7 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r8, r9);//invoke %7 = (%8, %9) While_Valid_21:create : function(While_Valid_21:nat,int) -> int[]
            var r10 = new WyJS.Integer(2);
            var r11 = new WyJS.Integer(2);
            var r12 = new WyJS.Array([r10, r11], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r7, r12, true)){
               control_flow_pc = 348;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 348:
            var r14 = new WyJS.Integer(2);
            var r15 = new WyJS.Integer(1);
            var r13 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r14, r15);//invoke %13 = (%14, %15) While_Valid_21:create : function(While_Valid_21:nat,int) -> int[]
            var r16 = new WyJS.Integer(1);
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Array([r16, r17], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r13, r18, true)){
               control_flow_pc = 349;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 349:
            var r20 = new WyJS.Integer(1);
            var r21 = new WyJS.Integer(1);
            var r19 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r20, r21);//invoke %19 = (%20, %21) While_Valid_21:create : function(While_Valid_21:nat,int) -> int[]
            var r22 = new WyJS.Integer(1);
            var r23 = new WyJS.Array([r22], new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r19, r23, true)){
               control_flow_pc = 350;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 350:
            var r25 = new WyJS.Integer(0);
            var r26 = new WyJS.Integer(0);
            var r24 = create$_9dF5XY001h3w$Vf$$C$H2$q$cB$y1$f$7B$N2Vo$VB$y1$O$7a0$r$7B$cv12(r25, r26);//invoke %24 = (%25, %26) While_Valid_21:create : function(While_Valid_21:nat,int) -> int[]
            var r27 = new WyJS.Integer(0);
            var r28 = new WyJS.Integer(0);
            var r29 = WyJS.ArrayGen(r27, r28, new WyJS.Type.Array(new WyJS.Type.Int()));
            if(WyJS.equals(r24, r29, true)){
               control_flow_pc = 351;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 351:
            return;
      }
   }
}

