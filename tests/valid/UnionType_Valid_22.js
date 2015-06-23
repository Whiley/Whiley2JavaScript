function f(r0, r1){//function(int,[UnionType_Valid_22:nlist]) -> UnionType_Valid_22:nlist
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r2, false)){
               control_flow_pc = 442;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = r1.length;//lengthof %3 = %1 : [int|[int]]
            if(WyJS.lt(r0, r3, false)){
               control_flow_pc = 443;
               control_flow_repeat = true;
               continue outer;
            }
         case 442:
            var r4 = new WyJS.Integer(0);
            return r4;//return %4 : int|[int]
            control_flow_pc = 444;
            control_flow_repeat = true;
            continue outer;//goto label444
         case 443:
            var r5 = r1[r0];
            return r5;//return %5 : int|[int]
         case 444:
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
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = new WyJS.Integer(4);
            var r7 = [r4, r5, r6];
            var r2 = f(r3, r7);//invoke %2 = (%3, %7) UnionType_Valid_22:f : function(int,[UnionType_Valid_22:nlist]) -> UnionType_Valid_22:nlist
            var r1 = r2;//assign %1 = %2  : int|[int]
            var r0 = r1;//assign %0 = %1  : int|[int]
            var r8 = new WyJS.Integer(4);
            if(WyJS.equals(r0, r8, true)){
               control_flow_pc = 445;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 445:
      }
   }
}

