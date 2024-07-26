#include<iostream>
#include<math>
using namespace std; 


// create a custom pow function  
// binary exponentiation 

// algorithm:- by recursion


int brutePow (int a, int  b ){
               int res = 0 ; 
               for(int i = 1 ; i<=b ; i++){
                        res = res + a*a; 
               }
               return res;
};

int optPow (int a , int b ){
               return pow(a,b);
}


int main(){

cout<<brutePow(3,3);
cout<<optPow(3,3);

               return 0 ;
}