function f(r0){//function([[int]]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 0;//const %1 = 0 : int
            var r2 = r0[r1];
            var r3 = r2.length;//lengthof %3 = %2 : [int]
            var r4 = 2;//const %4 = 2 : int
            if(r3  <=  r4){//ifle %3, %4 goto label4 : int
               control_flow_pc = 4;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = 0;//const %5 = 0 : int
            var r6 = r0[r5];
            var r7 = 1;//const %7 = 1 : int
            var r8 = r6[r7];
            return r8;//return %8 : int
            control_flow_pc = 5;
            control_flow_repeat = true;
            continue outer;//goto label5
         case 4:
            var r9 = 0;//const %9 = 0 : int
            return r9;//return %9 : int
         case 5:
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
            var r2 = 1;//const %2 = 1 : int
            var r3 = 2;//const %3 = 2 : int
            var r4 = 3;//const %4 = 3 : int
            var r5 = [r2, r3, r4];
            var r6 = 1;//const %6 = 1 : int
            var r7 = [r6];
            var r8 = [r5, r7];
            var r1 = r8;//assign %1 = %8  : [[int]]
            var r0 = r1;//assign %0 = %1  : [[int]]
            var r9 = f(r0);//invoke %9 = (%0) ListGenerator_Valid_3:f : function([[int]]) -> int
            var r10 = 2;//const %10 = 2 : int
            if(r9  ==  r10){//ifeq %9, %10 goto label6 : int
               control_flow_pc = 6;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 6:
      }
   }
}

test();
