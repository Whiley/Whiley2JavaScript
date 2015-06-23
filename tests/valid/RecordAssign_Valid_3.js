function f(){//function() -> RecordAssign_Valid_3:tac1tup
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = 2;//const %0 = 2 : int
            var r1 = 3;//const %1 = 3 : int
            var r2 = {f1: r0, f2: r1};//newrecord %2 = (%0, %1) : {int f1,int f2}
            return r2;//return %2 : {int f1,int f2}
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
            var r2 = f();//invoke %2 = () RecordAssign_Valid_3:f : function() -> RecordAssign_Valid_3:tac1tup
            var r1 = r2;//assign %1 = %2  : {int f1,int f2}
            var r0 = r1;//assign %0 = %1  : {int f1,int f2}
            var r3 = r0.f2;//fieldload %3 = %0 f2 : {int f1,int f2}
            var r4 = 2;//const %4 = 2 : int
            var r5 = r3 - r4;//sub %5 = %3, %4 : int
            var r6 = r0.f2;//fieldload %6 = %0 f2 : {int f1,int f2}
            var r7 = 2;//const %7 = 2 : int
            var r8 = r6 - r7;//sub %8 = %6, %7 : int
            r0.f1 = r8;//update %0.f1 = %8 : {int f1,int f2} -> {int f1,int f2}
            var r9 = r0.f1;//fieldload %9 = %0 f1 : {int f1,int f2}
            var r10 = r0.f2;//fieldload %10 = %0 f2 : {int f1,int f2}
            if(r9  !=  r10){//ifne %9, %10 goto label1225 : int
               control_flow_pc = 1225;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1225:
            var r11 = 1;//const %11 = 1 : int
            var r12 = 3;//const %12 = 3 : int
            var r13 = {f1: r11, f2: r12};//newrecord %13 = (%11, %12) : {int f1,int f2}
            if(r0.f1 ==  r13.f1 && JSON.stringify(r0) ==  JSON.stringify(r13)){//ifeq %0, %13 goto label1226 : {int f1,int f2}
               control_flow_pc = 1226;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1226:
      }
   }
}

test();
