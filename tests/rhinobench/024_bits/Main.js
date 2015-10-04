function value$_9bFaA$0D539w2(r0){//function(bool[]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r1 = r4;//assign %1 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r2 = r6;//assign %2 = %6  : int
            var r9 = new WyJS.Integer(1);
            var r8 = r9;//assign %8 = %9  : int
            var r3 = r8;//assign %3 = %8  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r13 = r0.length();//lengthof %13 = %0 : bool[]
            if(WyJS.gt(r1, r13, true)){
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            var r14 = r0.getValue(r1);
            var r15 = true;
            if(r14 === r15){
               control_flow_pc = 4;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;//goto label5
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 4:
            var r16 = r2.add(r3);//add %16 = %2, %3 : int
            var r2 = r16;//assign %2 = %16  : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            break;
         case 5:
            var r17 = new WyJS.Integer(1);
            var r18 = r1.add(r17);//add %18 = %1, %17 : int
            var r1 = r18;//assign %1 = %18  : int
            var r19 = r3.add(r3);//add %19 = %3, %3 : int
            var r3 = r19;//assign %3 = %19  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 3:
            return r2;//return %2 : int
            return;
      }
   }
}

function increment$Z9bF1D527FWz(r0){//function(bool[]) -> bool[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = new WyJS.Integer(0);
            var r2 = r3;//assign %2 = %3  : int
            var r1 = r2;//assign %1 = %2  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r5 = r0.length();//lengthof %5 = %0 : bool[]
            if(WyJS.gt(r1, r5, true)){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r6 = r0.getValue(r1);
            var r7 = true;
            if(r6 !== r7){
               control_flow_pc = 8;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = false;
            var r9 = false;
            r0.setValue(r1, r9);
            var r10 = new WyJS.Integer(1);
            var r11 = r1.add(r10);//add %11 = %1, %10 : int
            var r1 = r11;//assign %1 = %11  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 8:
            var r12 = r0.length();//lengthof %12 = %0 : bool[]
            if(WyJS.gt(r1, r12, true)){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            var r13 = true;
            var r14 = true;
            r0.setValue(r1, r14);
            return r0;//return %0 : bool[]
            control_flow_pc = 10;
            control_flow_repeat = true;
            continue outer;//goto label10
         case 9:
            var r16 = true;
            var r15 = r0.append(new WyJS.List([r16], new WyJS.Type.List(new WyJS.Type.Bool)));//invoke %15 = (%0, %16) whiley/lang/Array:append : function(bool[],bool) -> bool[]
            return r15;//return %15 : bool[]
         case 10:
            return;
      }
   }
}

function toString$a9dF5e_F9$R6$c0FP$k5$_0FT$w1$g0FN$s5$b0kA$33$I0kF$Z3$8O$B6$o0VR$Z5$i0kOFVYGt1J7(r0, r1){//function(bool[],int) -> whiley/lang/ASCII:string
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.List([], new WyJS.Type.List(new WyJS.Type.Void()));
            var r6 = r7.clone(new WyJS.Type.Void());//assign %6 = %7  : void[]
            var r3 = r6.clone(new WyJS.Type.Int());//assign %3 = %6  : int[]
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case -5:
            if(WyJS.gt(r2, r1, true)){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            var r9 = r0.length();//lengthof %9 = %0 : bool[]
            if(WyJS.gt(r2, r9, true)){
               control_flow_pc = 13;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -6;
               control_flow_repeat = true;
               break;
            }
         case -6:
            var r10 = r0.getValue(r2);
            var r11 = true;
            if(r10 === r11){
               control_flow_pc = 14;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -7;
               control_flow_repeat = true;
               break;
            }
         case -7:
            control_flow_pc = 13;
            control_flow_repeat = true;
            continue outer;//goto label13
            control_flow_pc = 15;
            control_flow_repeat = true;
            break;
         case 14:
            var r13 = new WyJS.Integer(49);
            var r12 = append$Z9dFaVYl$1Ms(r13, r3);//invoke %12 = (%13, %3) whiley/lang/Array:append : function(int,int[]) -> int[]
            var r3 = r12.clone(new WyJS.Type.Int());//assign %3 = %12  : int[]
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;//goto label15
            control_flow_pc = 15;
            control_flow_repeat = true;
            break;
         case 13:
            var r15 = new WyJS.Integer(48);
            var r14 = append$Z9dFaVYl$1Ms(r15, r3);//invoke %14 = (%15, %3) whiley/lang/Array:append : function(int,int[]) -> int[]
            var r3 = r14.clone(new WyJS.Type.Int());//assign %3 = %14  : int[]
            control_flow_pc = 15;
            control_flow_repeat = true;
            break;
         case 15:
            var r16 = new WyJS.Integer(1);
            var r17 = r2.add(r16);//add %17 = %2, %16 : int
            var r2 = r17;//assign %2 = %17  : int
            control_flow_pc = -5;
            control_flow_repeat = true;
            break;
         case 12:
            return r3;//return %3 : int[]
            return;
      }
   }
}