function f(r0){//function(int) -> UnionType_Valid_21:nlist
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 0;//const %1 = 0 : int
            if(r0  >  r1){//ifgt %0, %1 goto label438 : int
               control_flow_pc = 438;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = 0;//const %2 = 0 : int
            return r2;//return %2 : int|[int]
            control_flow_pc = 439;
            control_flow_repeat = true;
            continue outer;//goto label439
         case 438:
            var r4 = 1;//const %4 = 1 : int
            var r5 = r0 - r4;//sub %5 = %0, %4 : int
            var r3 = f(r5);//invoke %3 = (%5) UnionType_Valid_21:f : function(int) -> UnionType_Valid_21:nlist
            return r3;//return %3 : int|[int]
         case 439:
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
            var r2 = f(r3);//invoke %2 = (%3) UnionType_Valid_21:f : function(int) -> UnionType_Valid_21:nlist
            var r1 = r2;//assign %1 = %2  : int|[int]
            var r0 = r1;//assign %0 = %1  : int|[int]
            var r4 = 0;//const %4 = 0 : int
            if(r0  ==  r4){//ifeq %0, %4 goto label440 : int|[int]
               control_flow_pc = 440;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 440:
      }
   }
}

test();
