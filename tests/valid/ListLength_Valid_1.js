function f(r0){//function([int]) -> ListLength_Valid_1:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length;//lengthof %1 = %0 : [int]
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
            var r4 = [r1, r2, r3];
            var r0 = f(r4);//invoke %0 = (%4) ListLength_Valid_1:f : function([int]) -> ListLength_Valid_1:nat
            var r5 = new WyJS.Integer(3);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 895;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 895:
            var r7 = [];
            var r6 = f(r7);//invoke %6 = (%7) ListLength_Valid_1:f : function([int]) -> ListLength_Valid_1:nat
            var r8 = new WyJS.Integer(0);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 896;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 896:
      }
   }
}

