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
               control_flow_pc = 137;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
            control_flow_pc = 138;
            control_flow_repeat = true;
            continue outer;//goto label138
         case 137:
            return r0;//return %0 : int
         case 138:
            return;
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
               control_flow_pc = 143;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = r0.neg();//neg %2 = %0 : real
            return r2;//return %2 : real
            control_flow_pc = 144;
            control_flow_repeat = true;
            continue outer;//goto label144
         case 143:
            return r0;//return %0 : real
         case 144:
            return;
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
               control_flow_pc = 148;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 149;
            control_flow_repeat = true;
            continue outer;//goto label149
         case 148:
            return r0;//return %0 : int
         case 149:
            return;
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
               control_flow_pc = 153;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : real
            control_flow_pc = 154;
            control_flow_repeat = true;
            continue outer;//goto label154
         case 153:
            return r0;//return %0 : real
         case 154:
            return;
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
               control_flow_pc = 158;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : int
            control_flow_pc = 159;
            control_flow_repeat = true;
            continue outer;//goto label159
         case 158:
            return r0;//return %0 : int
         case 159:
            return;
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
               control_flow_pc = 163;
               control_flow_repeat = true;
               continue outer;
            }
            return r1;//return %1 : real
            control_flow_pc = 164;
            control_flow_repeat = true;
            continue outer;//goto label164
         case 163:
            return r0;//return %0 : real
         case 164:
            return;
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
               control_flow_pc = 166;
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
         case 166:
            return r2;//return %2 : int
            return;
      }
   }
}

