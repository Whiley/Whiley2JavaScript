function f(r0){//function(RecordAssign_Valid_5:tac2ta) -> RecordAssign_Valid_5:tac2tb
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.f1;//fieldload %1 = %0 f1 : {int f1,int f2}
            var r2 = 1;//const %2 = 1 : int
            var r3 = r1 - r2;//sub %3 = %1, %2 : int
            var r4 = r0.f2;//fieldload %4 = %0 f2 : {int f1,int f2}
            var r5 = {f1: r3, f2: r4};//newrecord %5 = (%3, %4) : {int f1,int f2}
            return r5;//return %5 : {int f1,int f2}
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
            var r3 = 2;//const %3 = 2 : int
            var r4 = 3;//const %4 = 3 : int
            var r5 = {f1: r3, f2: r4};//newrecord %5 = (%3, %4) : {int f1,int f2}
            var r2 = r5;//assign %2 = %5  : {int f1,int f2}
            var r0 = r2;//assign %0 = %2  : {int f1,int f2}
            var r6 = 2;//const %6 = 2 : int
            var r7 = 3;//const %7 = 3 : int
            var r8 = {f1: r6, f2: r7};//newrecord %8 = (%6, %7) : {int f1,int f2}
            if(r0.f1 ==  r8.f1 && JSON.stringify(r0) ==  JSON.stringify(r8)){//ifeq %0, %8 goto label1231 : {int f1,int f2}
               control_flow_pc = 1231;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1231:
            var r9 = 1;//const %9 = 1 : int
            var r10 = 1;//const %10 = 1 : int
            r0.f1 = r10;//update %0.f1 = %10 : {int f1,int f2} -> {int f1,int f2}
            var r12 = f(r0);//invoke %12 = (%0) RecordAssign_Valid_5:f : function(RecordAssign_Valid_5:tac2ta) -> RecordAssign_Valid_5:tac2tb
            var r11 = r12;//assign %11 = %12  : {int f1,int f2}
            var r1 = r11;//assign %1 = %11  : {int f1,int f2}
            var r13 = 0;//const %13 = 0 : int
            var r14 = 3;//const %14 = 3 : int
            var r15 = {f1: r13, f2: r14};//newrecord %15 = (%13, %14) : {int f1,int f2}
            if(r1.f1 ==  r15.f1 && JSON.stringify(r1) ==  JSON.stringify(r15)){//ifeq %1, %15 goto label1232 : {int f1,int f2}
               control_flow_pc = 1232;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1232:
      }
   }
}

test();
