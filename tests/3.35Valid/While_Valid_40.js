function contains(r0, r1){//function([int],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9, %10)
               var r6 = r0.length;//lengthof %6 = %0 : [int]
               if(WyJS.gt(r2, r6, true)){
                  control_flow_pc = 793;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r7 = r0.getValue(r2);
               if(WyJS.equals(r7, r1, false)){
                  var r9 = new WyJS.Integer(1);
                  var r10 = r2.add(r9);//add %10 = %2, %9 : int
                  r2 = r10;//assign %2 = %10  : int
                  continue;
               }
               var r8 = true;
               return r8;//return %8 : bool
            }
         case 793:
            var r11 = false;
            return r11;//return %11 : bool
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = new WyJS.List([r2, r3, r4, r5], new WyJS.List('int'));
            r1 = r6.clone();//assign %1 = %6  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r8 = new WyJS.Integer(0);
            var r7 = contains(r0, r8);//invoke %7 = (%0, %8) While_Valid_40:contains : function([int],int) -> bool
            var r9 = false;
            if(r7 === r9){
               control_flow_pc = 795;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 795:
            var r11 = new WyJS.Integer(1);
            var r10 = contains(r0, r11);//invoke %10 = (%0, %11) While_Valid_40:contains : function([int],int) -> bool
            var r12 = true;
            if(r10 === r12){
               control_flow_pc = 796;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 796:
            var r14 = new WyJS.Integer(2);
            var r13 = contains(r0, r14);//invoke %13 = (%0, %14) While_Valid_40:contains : function([int],int) -> bool
            var r15 = true;
            if(r13 === r15){
               control_flow_pc = 797;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 797:
            var r17 = new WyJS.Integer(3);
            var r16 = contains(r0, r17);//invoke %16 = (%0, %17) While_Valid_40:contains : function([int],int) -> bool
            var r18 = true;
            if(r16 === r18){
               control_flow_pc = 798;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 798:
            var r20 = new WyJS.Integer(4);
            var r19 = contains(r0, r20);//invoke %19 = (%0, %20) While_Valid_40:contains : function([int],int) -> bool
            var r21 = true;
            if(r19 === r21){
               control_flow_pc = 799;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 799:
            var r23 = new WyJS.Integer(5);
            var r22 = contains(r0, r23);//invoke %22 = (%0, %23) While_Valid_40:contains : function([int],int) -> bool
            var r24 = false;
            if(r22 === r24){
               control_flow_pc = 800;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 800:
      }
   }
}

