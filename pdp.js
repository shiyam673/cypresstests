import homepage from "./pageclass.js";
import listingpage from "./listingpage.js";

class pdp extends homepage{
 
 constructor(){
    super()
   // const hm = new homepage()
//const lp = new listingpage()
this.lp = new listingpage()
  
}
//const lp = new listingpage()

 na(){
this.nav();
this.lp.geteditbox()
}



}
const hj = new pdp()
hj.na();

