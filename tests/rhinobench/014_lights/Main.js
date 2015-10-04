function TrafficLights$Y9_FP8F$o3$W0FP$sL6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y(){//function() -> Main:TrafficLights
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = false;
            var r1 = false;
            var r2 = true;
            var r3 = new WyJS.Record(["amber", "green", "red"], [r0, r1, r2], new WyJS.Type.Record(["amber", "green", "red"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r3;//return %3 : {bool amber,bool green,bool red}
            return;
      }
   }
}

function change$Y9bFXL13$C0FN$Z5$ip0$J0VR$35$a0VO$Z5$Y0$I$Z5$b0$P$F6$n0W(r0){//function(Main:TrafficLights) -> Main:TrafficLights
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.fieldLoad("green");//fieldload %1 = %0 green : {bool amber,bool green,bool red}
            var r2 = true;
            if(r1 === r2){
               control_flow_pc = 9;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 10;
            control_flow_repeat = true;
            continue outer;//goto label10
         case 9:
            var r3 = true;
            var r4 = false;
            var r5 = false;
            var r6 = new WyJS.Record(["amber", "green", "red"], [r3, r4, r5], new WyJS.Type.Record(["amber", "green", "red"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r6;//return %6 : {bool amber,bool green,bool red}
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
         case 10:
            var r7 = r0.fieldLoad("red");//fieldload %7 = %0 red : {bool amber,bool green,bool red}
            var r8 = true;
            if(r7 === r8){
               control_flow_pc = 12;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 13;
            control_flow_repeat = true;
            continue outer;//goto label13
         case 12:
            var r9 = r0.fieldLoad("amber");//fieldload %9 = %0 amber : {bool amber,bool green,bool red}
            var r10 = true;
            if(r9 === r10){
               control_flow_pc = 14;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 15;
            control_flow_repeat = true;
            continue outer;//goto label15
         case 14:
            var r11 = false;
            var r12 = true;
            var r13 = false;
            var r14 = new WyJS.Record(["amber", "green", "red"], [r11, r12, r13], new WyJS.Type.Record(["amber", "green", "red"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r14;//return %14 : {bool amber,bool green,bool red}
            control_flow_pc = 16;
            control_flow_repeat = true;
            continue outer;//goto label16
         case 15:
            var r15 = true;
            var r16 = false;
            var r17 = true;
            var r18 = new WyJS.Record(["amber", "green", "red"], [r15, r16, r17], new WyJS.Type.Record(["amber", "green", "red"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r18;//return %18 : {bool amber,bool green,bool red}
         case 16:
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
         case 13:
            var r19 = false;
            var r20 = false;
            var r21 = true;
            var r22 = new WyJS.Record(["amber", "green", "red"], [r19, r20, r21], new WyJS.Type.Record(["amber", "green", "red"], [new WyJS.Type.Bool(), new WyJS.Type.Bool(), new WyJS.Type.Bool()]));
            return r22;//return %22 : {bool amber,bool green,bool red}
         case 11:
            return;
      }
   }
}

function toString$Z9bFaL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$b0WL13$C0FN$Z5$ip0$J0VR$35$a0VO$Z5$Y0$I$Z5$b0$P$F6$n0(r0){//function(Main:TrafficLights) -> whiley/lang/ASCII:string
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r3 = r0.fieldLoad("red");//fieldload %3 = %0 red : {bool amber,bool green,bool red}
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 18;
            control_flow_repeat = true;
            continue outer;//goto label18
         case 17:
            var r5 = new WyJS.List([new WyJS.Integer(82), new WyJS.Integer(69), new WyJS.Integer(68), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : int[]
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;//goto label19
         case 18:
            var r6 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : int[]
         case 19:
            var r7 = r0.fieldLoad("amber");//fieldload %7 = %0 amber : {bool amber,bool green,bool red}
            var r8 = true;
            if(r7 === r8){
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 21;
            control_flow_repeat = true;
            continue outer;//goto label21
         case 20:
            var r10 = new WyJS.List([new WyJS.Integer(65), new WyJS.Integer(77), new WyJS.Integer(66), new WyJS.Integer(69), new WyJS.Integer(82), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r9 = append$Z9dFXVYl$1Ms(r1, r10);//invoke %9 = (%1, %10) whiley/lang/Array:append : function(int[],int[]) -> int[]
            var r1 = r9.clone(new WyJS.Type.Int());//assign %1 = %9  : int[]
            control_flow_pc = 22;
            control_flow_repeat = true;
            continue outer;//goto label22
         case 21:
            var r12 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = append$Z9dFXVYl$1Ms(r1, r12);//invoke %11 = (%1, %12) whiley/lang/Array:append : function(int[],int[]) -> int[]
            var r1 = r11.clone(new WyJS.Type.Int());//assign %1 = %11  : int[]
         case 22:
            var r13 = r0.fieldLoad("green");//fieldload %13 = %0 green : {bool amber,bool green,bool red}
            var r14 = true;
            if(r13 === r14){
               control_flow_pc = 23;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 24;
            control_flow_repeat = true;
            continue outer;//goto label24
         case 23:
            var r16 = new WyJS.List([new WyJS.Integer(71), new WyJS.Integer(82), new WyJS.Integer(69), new WyJS.Integer(69), new WyJS.Integer(78), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r15 = append$Z9dFXVYl$1Ms(r1, r16);//invoke %15 = (%1, %16) whiley/lang/Array:append : function(int[],int[]) -> int[]
            var r1 = r15.clone(new WyJS.Type.Int());//assign %1 = %15  : int[]
            control_flow_pc = 25;
            control_flow_repeat = true;
            continue outer;//goto label25
         case 24:
            var r18 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r17 = append$Z9dFXVYl$1Ms(r1, r18);//invoke %17 = (%1, %18) whiley/lang/Array:append : function(int[],int[]) -> int[]
            var r1 = r17.clone(new WyJS.Type.Int());//assign %1 = %17  : int[]
         case 25:
            return r1;//return %1 : int[]
            return;
      }
   }
}