function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            if(r0  >=  r1){//ifge %0, %1 goto label15 : int
               control_flow_pc = 15;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 1;//const %2 = 1 : int
            return r2;//return %2 : int
            control_flow_pc = 16;
            control_flow_repeat = true;
            continue outer;//goto label16
         case 15:
            var r3 = 2;//const %3 = 2 : int
            return r3;//return %3 : int
         case 16:
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
            var r1 = 1;//const %1 = 1 : int
            var r0 = f(r1);//invoke %0 = (%1) IfElse_Valid_3:f : function(int) -> int
            var r2 = 1;//const %2 = 1 : int
            if(r0  ==  r2){//ifeq %0, %2 goto label17 : int
               control_flow_pc = 17;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 17:
            var r4 = 10;//const %4 = 10 : int
            var r3 = f(r4);//invoke %3 = (%4) IfElse_Valid_3:f : function(int) -> int
            var r5 = 2;//const %5 = 2 : int
            if(r3  ==  r5){//ifeq %3, %5 goto label18 : int
               control_flow_pc = 18;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 18:
            var r7 = 11;//const %7 = 11 : int
            var r6 = f(r7);//invoke %6 = (%7) IfElse_Valid_3:f : function(int) -> int
            var r8 = 2;//const %8 = 2 : int
            if(r6  ==  r8){//ifeq %6, %8 goto label19 : int
               control_flow_pc = 19;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 19:
            var r10 = 1212;//const %10 = 1212 : int
            var r9 = f(r10);//invoke %9 = (%10) IfElse_Valid_3:f : function(int) -> int
            var r11 = 2;//const %11 = 2 : int
            if(r9  ==  r11){//ifeq %9, %11 goto label20 : int
               control_flow_pc = 20;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 20:
            var r13 = 1212;//const %13 = 1212 : int
            var r14 = -r13;//neg %14 = %13 : int
            var r12 = f(r14);//invoke %12 = (%14) IfElse_Valid_3:f : function(int) -> int
            var r15 = 1;//const %15 = 1 : int
            if(r12  ==  r15){//ifeq %12, %15 goto label21 : int
               control_flow_pc = 21;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 21:
      }
   }
}

test();
