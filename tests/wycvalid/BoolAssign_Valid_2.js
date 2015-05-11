function test(){//method() -> void
   var r3 = true;//const %3 = true : bool
   var r2 = r3;//assign %2 = %3  : bool
   var r0 = r2;//assign %0 = %2  : bool
   var r5 = false;//const %5 = false : bool
   var r4 = r5;//assign %4 = %5  : bool
   var r1 = r4;//assign %1 = %4  : bool
   var r6 = true;//const %6 = true : bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(r0  !=  r6){
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
         case 16:
            var r7 = true;//const %7 = true : bool
            if(r0  !=  r7){
            }
            var r8 = false;//const %8 = false : bool
            control_flow_pc = 19;
            control_flow_repeat = true;
            continue outer;
         }
      case 18:
         var r8 = true;//const %8 = true : bool
      case 19:
         var r9 = true;//const %9 = true : bool
         if(r8  !=  r9){
            throw {name: 'Assert Failed', message: 'fail'}
         }
         var r10 = true;//const %10 = true : bool
         if(r0  !=  r10){
            control_flow_pc = 22;
            control_flow_repeat = true;
            continue outer;
         }
      }
      var r11 = true;//const %11 = true : bool
      if(r1  !=  r11){
      }
   }
   var r12 = false;//const %12 = false : bool
   control_flow_pc = 24;
   control_flow_repeat = true;
   continue outer;
}
case 23:
var r12 = true;//const %12 = true : bool
case 24:
var r13 = false;//const %13 = false : bool
if(r12  !=  r13){
   throw {name: 'Assert Failed', message: 'fail'}
}
var r14 = true;//const %14 = true : bool
if(r1  !=  r14){
   control_flow_pc = 27;
   control_flow_repeat = true;
   continue outer;
}
}
var r15 = true;//const %15 = true : bool
if(r0  !=  r15){
}
}
var r16 = false;//const %16 = false : bool
control_flow_pc = 29;
control_flow_repeat = true;
continue outer;
}
case 28:
var r16 = true;//const %16 = true : bool
case 29:
var r17 = false;//const %17 = false : bool
if(r16  !=  r17){
throw {name: 'Assert Failed', message: 'fail'}
}
var r18 = true;//const %18 = true : bool
if(r1  !=  r18){
control_flow_pc = 32;
control_flow_repeat = true;
continue outer;
}
}
var r19 = true;//const %19 = true : bool
if(r1  !=  r19){
}
}
var r20 = false;//const %20 = false : bool
control_flow_pc = 34;
control_flow_repeat = true;
continue outer;
}
case 33:
var r20 = true;//const %20 = true : bool
case 34:
var r21 = false;//const %21 = false : bool
if(r20  !=  r21){
throw {name: 'Assert Failed', message: 'fail'}
}
var r22 = true;//const %22 = true : bool
if(r1  !=  r22){
control_flow_pc = 37;
control_flow_repeat = true;
continue outer;
}
}
throw {name: 'Assert Failed', message: 'fail'}
}
case 37:
var r23 = true;//const %23 = true : bool
if(r0  !=  r23){
control_flow_pc = 39;
control_flow_repeat = true;
continue outer;
}
control_flow_pc = 40;
control_flow_repeat = true;
continue outer;
}
case 39:
throw {name: 'Assert Failed', message: 'fail'}
case 40:
}
}
}

test();
