#include<iostream>
using namespace std; 


// create a custom pow function 


int brutePow (int a, int  b ){
               int res = 0 ; 
               for(int i = 1 ; i<=b ; i++){
                        res = res + a*a      
               }
               return res
}


int main(){

cout<<brutePow(3,3)

               return 0 ;
}