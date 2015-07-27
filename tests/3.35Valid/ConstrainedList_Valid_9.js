function sum(r0, r1){//function(ConstrainedList_Valid_9:posintlist,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length;//lengthof %2 = %0 : [int]
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 1720;
               control_flow_repeat = true;
               continue outer;
            }
            var r3 = new WyJS.Integer(0);
            return r3;//return %3 : int
            control_flow_pc = 1721;
            control_flow_repeat = true;
            continue outer;//goto label1721
         case 1720:
            var r4 = r0.getValue(r1);
            var r6 = new WyJS.Integer(1);
            var r7 = r1.add(r6);//add %7 = %1, %6 : int
            var r5 = sum(r0, r7);//invoke %5 = (%0, %7) ConstrainedList_Valid_9:sum : function(ConstrainedList_Valid_9:posintlist,int) -> int
            var r8 = r4.add(r5);//add %8 = %4, %5 : int
            return r8;//return %8 : int
         case 1721:
      }
   }
}

function sum(r0){//function(ConstrainedList_Valid_9:posintlist) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = sum(r0, r2);//invoke %1 = (%0, %2) ConstrainedList_Valid_9:sum : function(ConstrainedList_Valid_9:posintlist,int) -> int
            return r1;//return %1 : int
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
            var r1 = new WyJS.Integer(1);
            var r2 = new WyJS.Integer(2);
            var r3 = new WyJS.Integer(3);
            var r4 = new WyJS.Integer(4);
            var r5 = new WyJS.Integer(5);
            var r6 = new WyJS.Integer(6);
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.List([r1, r2, r3, r4, r5, r6, r7], new WyJS.List('int'));
            var r0 = sum(r8);//invoke %0 = (%8) ConstrainedList_Valid_9:sum : function(ConstrainedList_Valid_9:posintlist) -> int
            var r9 = new WyJS.Integer(28);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1723;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1723:
      }
   }
}

