function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 10;//const %1 = 10 : int
            if(r0  >=  r1){//ifge %0, %1 goto label0 : int
               control_flow_pc = 0;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 1;//const %2 = 1 : int
            var r3 = -r2;//neg %3 = %2 : int
            return r3;//return %3 : int
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 0:
            var r4 = 10;//const %4 = 10 : int
            if(r0  <=  r4){//ifle %0, %4 goto label2 : int
               control_flow_pc = 2;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = 1;//const %5 = 1 : int
            return r5;//return %5 : int
            control_flow_pc = 1;
            control_flow_repeat = true;
            continue outer;//goto label1
         case 2:
            var r6 = 0;//const %6 = 0 : int
            return r6;//return %6 : int
         case 1:
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
            var r0 = f(r1);//invoke %0 = (%1) IfElse_Valid_1:f : function(int) -> int
            var r2 = 1;//const %2 = 1 : int
            var r3 = -r2;//neg %3 = %2 : int
            if(r0  ==  r3){//ifeq %0, %3 goto label3 : int
               control_flow_pc = 3;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 3:
            var r5 = 10;//const %5 = 10 : int
            var r4 = f(r5);//invoke %4 = (%5) IfElse_Valid_1:f : function(int) -> int
            var r6 = 0;//const %6 = 0 : int
            if(r4  ==  r6){//ifeq %4, %6 goto label4 : int
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 4:
            var r8 = 11;//const %8 = 11 : int
            var r7 = f(r8);//invoke %7 = (%8) IfElse_Valid_1:f : function(int) -> int
            var r9 = 1;//const %9 = 1 : int
            if(r7  ==  r9){//ifeq %7, %9 goto label5 : int
               control_flow_pc = 5;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 5:
            var r11 = 1212;//const %11 = 1212 : int
            var r10 = f(r11);//invoke %10 = (%11) IfElse_Valid_1:f : function(int) -> int
            var r12 = 1;//const %12 = 1 : int
            if(r10  ==  r12){//ifeq %10, %12 goto label6 : int
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
            var r14 = 1212;//const %14 = 1212 : int
            var r15 = -r14;//neg %15 = %14 : int
            var r13 = f(r15);//invoke %13 = (%15) IfElse_Valid_1:f : function(int) -> int
            var r16 = 1;//const %16 = 1 : int
            var r17 = -r16;//neg %17 = %16 : int
            if(r13  ==  r17){//ifeq %13, %17 goto label7 : int
               control_flow_pc = 7;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 7:
      }
   }
}

test();
