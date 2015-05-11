function index(r0, r1){//function(Access_Valid_2:liststr,int) -> any
   return r2;//return %2 : any
}

function test(){//method() -> void
   var r3 = 1;//const %3 = 1 : int
   var r4 = 2;//const %4 = 2 : int
   var r5 = 3;//const %5 = 3 : int
   var r2 = r6;//assign %2 = %6  : [int]
   var r0 = r2;//assign %0 = %2  : [int]
   var r8 = 0;//const %8 = 0 : int
   var r7 = index(r0);
r8);
   var r9 = 1;//const %9 = 1 : int
   if(r7 != r9){//assume 
      throw {name: 'Assert Failed', message: 'r7 !eq r9'}
   }
   var r11 = 1;//const %11 = 1 : int
   var r10 = index(r0);
r11);
   var r12 = 2;//const %12 = 2 : int
   if(r10 != r12){//assume 
      throw {name: 'Assert Failed', message: 'r10 !eq r12'}
   }
   var r14 = 2;//const %14 = 2 : int
   var r13 = index(r0);
r14);
   var r15 = 3;//const %15 = 3 : int
   if(r13 != r15){//assume 
      throw {name: 'Assert Failed', message: 'r13 !eq r15'}
   }
   var r17 = [72,101,108,108,111,32,87,111,114,108,100];//const %17 = [72,101,108,108,111,32,87,111,114,108,100] : [int+]
   var r16 = r17;//assign %16 = %17  : [int+]
   var r1 = r16;//assign %1 = %16  : [int]
   var r19 = 0;//const %19 = 0 : int
   var r18 = index(r1);
r19);
   var r20 = 72;//const %20 = 72 : int
   if(r18 != r20){//assume 
      throw {name: 'Assert Failed', message: 'r18 !eq r20'}
   }
   var r22 = 1;//const %22 = 1 : int
   var r21 = index(r1);
r22);
   var r23 = 101;//const %23 = 101 : int
   if(r21 != r23){//assume 
      throw {name: 'Assert Failed', message: 'r21 !eq r23'}
   }
   var r25 = 2;//const %25 = 2 : int
   var r24 = index(r1);
r25);
   var r26 = 108;//const %26 = 108 : int
   if(r24 != r26){//assume 
      throw {name: 'Assert Failed', message: 'r24 !eq r26'}
   }
}

test();
