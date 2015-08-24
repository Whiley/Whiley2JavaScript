function abs$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;//goto label5
         case 4:
            return r0;//return %0 : int
         case 5:
      }
   }
}

function abs$Y9bF1B1Fs2(r0){//function(real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Real(0.0);
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 10;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = r0.neg();//neg %2 = %0 : real
            return r2;//return %2 : real
            control_flow_pc = 11;
            control_flow_repeat = true;
            continue outer;//goto label11
         case 10:
            return r0;//return %0 : real
         case 11:
      }
   }
}

function max$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 16;
            control_flow_repeat = true;
            continue outer;//goto label16
         case 15:
            return r0;//return %0 : int
         case 16:
      }
   }
}

function max$Y9dFX$Y$31(r0, r1){//function(real,real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.gt(r0, r1, true)){
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : real
            control_flow_pc = 21;
            control_flow_repeat = true;
            continue outer;//goto label21
         case 20:
            return r0;//return %0 : real
         case 21:
      }
   }
}

function min$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 25;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 26;
            control_flow_repeat = true;
            continue outer;//goto label26
         case 25:
            return r0;//return %0 : int
         case 26:
      }
   }
}

function min$Y9dFX$Y$31(r0, r1){//function(real,real) -> real
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 30;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : real
            control_flow_pc = 31;
            control_flow_repeat = true;
            continue outer;//goto label31
         case 30:
            return r0;//return %0 : real
         case 31:
      }
   }
}

function pow$Y9dFXs1Fs2(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(1);
            var r4 = r5;//assign %4 = %5  : int
            var r2 = r4;//assign %2 = %4  : int
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r3 = r6;//assign %3 = %6  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            if(WyJS.gt(r3, r1, true)){
               control_flow_pc = 33;
               control_flow_repeat = true;
               continue outer;
            }
            var r8 = r2.mul(r0);//mul %8 = %2, %0 : int
            var r2 = r8;//assign %2 = %8  : int
            var r9 = new WyJS.Integer(1);
            var r10 = r3.add(r9);//add %10 = %3, %9 : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 33:
            return r2;//return %2 : int
      }
   }
}

