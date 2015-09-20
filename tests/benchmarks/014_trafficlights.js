function TrafficLights$Y9_FP8Z1$k$FB$F2$U0$S$76$W0VO$N5$d0kN$k5$d0kO$V5$o0kRS$$K$76$W0VO$N5$d0kN$k3$d0kO$V5$o0kRF7(){//function() -> 014_trafficlights:TrafficLights
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

function change$Y9bFXL1d$$B$32$o$kM$F6$m0FN$N5$a0FP$B5$g0FP$R5$c0$S$BM6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y(r0){//function(014_trafficlights:TrafficLights) -> 014_trafficlights:TrafficLights
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

function toString$Z9bFaL1d$kS$V5$d0$Q$J5$t0kA$k5$W0VQ$R5$j$FF$B4$20FH$ZZ0kR$F6$m0FP$s5$b0WL1d$$B$32$o$kM$F6$m0FN$N5$a0FP$B5$g0FP$R5$c0$S$BM6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$Br2(r0){//function(014_trafficlights:TrafficLights) -> whiley/lang/ASCII:string
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
            var r1 = r5.clone(new WyJS.Type.Int());//assign %1 = %5  : [int+]
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;//goto label19
         case 18:
            var r6 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r1 = r6.clone(new WyJS.Type.Int());//assign %1 = %6  : [int+]
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
            var r9 = new WyJS.List([new WyJS.Integer(65), new WyJS.Integer(77), new WyJS.Integer(66), new WyJS.Integer(69), new WyJS.Integer(82), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r10 = r1.append(r9);
            var r1 = r10.clone(new WyJS.Type.Int());//assign %1 = %10  : [int]
            control_flow_pc = 22;
            control_flow_repeat = true;
            continue outer;//goto label22
         case 21:
            var r11 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r12 = r1.append(r11);
            var r1 = r12.clone(new WyJS.Type.Int());//assign %1 = %12  : [int]
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
            var r15 = new WyJS.List([new WyJS.Integer(71), new WyJS.Integer(82), new WyJS.Integer(69), new WyJS.Integer(69), new WyJS.Integer(78), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r16 = r1.append(r15);
            var r1 = r16.clone(new WyJS.Type.Int());//assign %1 = %16  : [int]
            control_flow_pc = 25;
            control_flow_repeat = true;
            continue outer;//goto label25
         case 24:
            var r17 = new WyJS.List([new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32), new WyJS.Integer(32)], new WyJS.Type.List(new WyJS.Type.Int()));
            var r18 = r1.append(r17);
            var r1 = r18.clone(new WyJS.Type.Int());//assign %1 = %18  : [int]
         case 25:
            return r1;//return %1 : [int]
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
            var r2 = TrafficLights$Y9_FP8Z1$k$FB$F2$U0$S$76$W0VO$N5$d0kN$k5$d0kO$V5$o0kRS$$K$76$W0VO$N5$d0kN$k3$d0kO$V5$o0kRF7();//invoke %2 = () 014_trafficlights:TrafficLights : function() -> 014_trafficlights:TrafficLights
            var r1 = r2.clone();//assign %1 = %2  : {bool amber,bool green,bool red}
            var r0 = r1.clone();//assign %0 = %1  : {bool amber,bool green,bool red}
            var r3 = r0.fieldLoad("green");//fieldload %3 = %0 green : {bool amber,bool green,bool red}
            var r4 = true;
            if(r3 === r4){
               control_flow_pc = 26;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 27;
            control_flow_repeat = true;
            continue outer;//goto label27
         case 26:
            throw {name: 'Assert Failed', message: 'fail'}
         case 27:
            var r5 = r0.fieldLoad("amber");//fieldload %5 = %0 amber : {bool amber,bool green,bool red}
            var r6 = true;
            if(r5 === r6){
               control_flow_pc = 28;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 29;
            control_flow_repeat = true;
            continue outer;//goto label29
         case 28:
            throw {name: 'Assert Failed', message: 'fail'}
         case 29:
            var r7 = r0.fieldLoad("red");//fieldload %7 = %0 red : {bool amber,bool green,bool red}
            var r8 = true;
            if(r7 === r8){
               control_flow_pc = 30;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 30:
            var r9 = change$Y9bFXL1d$$B$32$o$kM$F6$m0FN$N5$a0FP$B5$g0FP$R5$c0$S$BM6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y(r0);//invoke %9 = (%0) 014_trafficlights:change : function(014_trafficlights:TrafficLights) -> 014_trafficlights:TrafficLights
            var r0 = r9.clone();//assign %0 = %9  : {bool amber,bool green,bool red}
            var r10 = r0.fieldLoad("green");//fieldload %10 = %0 green : {bool amber,bool green,bool red}
            var r11 = true;
            if(r10 === r11){
               control_flow_pc = 31;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 32;
            control_flow_repeat = true;
            continue outer;//goto label32
         case 31:
            throw {name: 'Assert Failed', message: 'fail'}
         case 32:
            var r12 = r0.fieldLoad("red");//fieldload %12 = %0 red : {bool amber,bool green,bool red}
            var r13 = true;
            if(r12 === r13){
               control_flow_pc = 33;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 33:
            var r14 = r0.fieldLoad("amber");//fieldload %14 = %0 amber : {bool amber,bool green,bool red}
            var r15 = true;
            if(r14 === r15){
               control_flow_pc = 34;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 34:
            var r16 = change$Y9bFXL1d$$B$32$o$kM$F6$m0FN$N5$a0FP$B5$g0FP$R5$c0$S$BM6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y(r0);//invoke %16 = (%0) 014_trafficlights:change : function(014_trafficlights:TrafficLights) -> 014_trafficlights:TrafficLights
            var r0 = r16.clone();//assign %0 = %16  : {bool amber,bool green,bool red}
            var r17 = r0.fieldLoad("green");//fieldload %17 = %0 green : {bool amber,bool green,bool red}
            var r18 = true;
            if(r17 === r18){
               control_flow_pc = 35;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 35:
            var r19 = r0.fieldLoad("red");//fieldload %19 = %0 red : {bool amber,bool green,bool red}
            var r20 = true;
            if(r19 === r20){
               control_flow_pc = 36;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 37;
            control_flow_repeat = true;
            continue outer;//goto label37
         case 36:
            throw {name: 'Assert Failed', message: 'fail'}
         case 37:
            var r21 = r0.fieldLoad("amber");//fieldload %21 = %0 amber : {bool amber,bool green,bool red}
            var r22 = true;
            if(r21 === r22){
               control_flow_pc = 38;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 39;
            control_flow_repeat = true;
            continue outer;//goto label39
         case 38:
            throw {name: 'Assert Failed', message: 'fail'}
         case 39:
            var r23 = change$Y9bFXL1d$$B$32$o$kM$F6$m0FN$N5$a0FP$B5$g0FP$R5$c0$S$BM6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y(r0);//invoke %23 = (%0) 014_trafficlights:change : function(014_trafficlights:TrafficLights) -> 014_trafficlights:TrafficLights
            var r0 = r23.clone();//assign %0 = %23  : {bool amber,bool green,bool red}
            var r24 = r0.fieldLoad("green");//fieldload %24 = %0 green : {bool amber,bool green,bool red}
            var r25 = true;
            if(r24 === r25){
               control_flow_pc = 40;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 41;
            control_flow_repeat = true;
            continue outer;//goto label41
         case 40:
            throw {name: 'Assert Failed', message: 'fail'}
         case 41:
            var r26 = r0.fieldLoad("red");//fieldload %26 = %0 red : {bool amber,bool green,bool red}
            var r27 = true;
            if(r26 === r27){
               control_flow_pc = 42;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 43;
            control_flow_repeat = true;
            continue outer;//goto label43
         case 42:
            throw {name: 'Assert Failed', message: 'fail'}
         case 43:
            var r28 = r0.fieldLoad("amber");//fieldload %28 = %0 amber : {bool amber,bool green,bool red}
            var r29 = true;
            if(r28 === r29){
               control_flow_pc = 44;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 44:
            var r30 = change$Y9bFXL1d$$B$32$o$kM$F6$m0FN$N5$a0FP$B5$g0FP$R5$c0$S$BM6$F4$m0FN$N5$a0FP$B5$B0FP$R5$c0$S$B63y(r0);//invoke %30 = (%0) 014_trafficlights:change : function(014_trafficlights:TrafficLights) -> 014_trafficlights:TrafficLights
            var r0 = r30.clone();//assign %0 = %30  : {bool amber,bool green,bool red}
            var r31 = r0.fieldLoad("green");//fieldload %31 = %0 green : {bool amber,bool green,bool red}
            var r32 = true;
            if(r31 === r32){
               control_flow_pc = 45;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 46;
            control_flow_repeat = true;
            continue outer;//goto label46
         case 45:
            throw {name: 'Assert Failed', message: 'fail'}
         case 46:
            var r33 = r0.fieldLoad("red");//fieldload %33 = %0 red : {bool amber,bool green,bool red}
            var r34 = true;
            if(r33 === r34){
               control_flow_pc = 47;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 47:
            var r35 = r0.fieldLoad("amber");//fieldload %35 = %0 amber : {bool amber,bool green,bool red}
            var r36 = true;
            if(r35 === r36){
               control_flow_pc = 48;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 49;
            control_flow_repeat = true;
            continue outer;//goto label49
         case 48:
            throw {name: 'Assert Failed', message: 'fail'}
         case 49:
            return;
      }
   }
}

