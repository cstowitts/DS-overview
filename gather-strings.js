"use strict";

/**
 * Given an object, return an array of all the values in the object that are strings:

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];

*/
//convert the values of the obj into an array (Object.values)
//base case when the array is empty/no further vals of the obj to check
//if the value is typeof str, push to the container array
//if the value is typeof an obj && isArray = false then make a recursive call


/**initial solution */
function gatherStrings(obj){
    const vals = Object.values(obj);
    const stringsOnly = [];
    
    if(typeof vals[0] === string) stringsOnly.push(val);
    if(typeof vals[0] === object && isArray(vals[0]) === false){
        return gatherStrings(vals[0]);
    }    

    return gatherStrings(vals.slice(1));


}

/**post solution peek */

function gatherStrings(obj){
    //create container for the strings you find
    const stringsOnly = [];

    //iterate over the obj to check property val type
    for(let key in obj){

        //if the value is a string type, push into str container
        //remember that typeof returns a str! 
        if(typeof obj[key] === "string"){
            stringsOnly.push(obj[key]);
        }

        //if the value is an obj, recurse on that obj val
        //remember that arrs also are type obj so you have to make sure to check it's not an arr
        if(typeof obj[key] === "object" && isArray(obj[key]) === false){
            gatherStrings(obj[key]);
        }
    }

    return stringsOnly;

}

/** rithm's solution */

function gatherStrings(obj) {
    let stringArr = [];
    //iterate over the obj
    for (let key in obj) {
      //check that the val type is a string, if so, push into the stringArr
      if (typeof obj[key] === "string") stringArr.push(obj[key]);
      
      //they don't check to see if it's an array, but we would! isArray(obj[key] === false)
      //check if val is obj, if it is, recurse
      //BUT when the call resolves, we need to 
      //SPREAD the resulting stringArr of each recursive call
      //and then push it into the array
      //fun fact: spread operation is O(n), it's gotta iterate through each val
      if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
    }
    return stringArr;
  }

  /**runtime thangs: 
   * this loop is running Inception-style
   * where it's not a nested quadratic deal
   * it's excecuting a stack of linear operations
   * each recursive loop just adds another pancake to the call stack
   * and resolves them in order (last in, first out)
   * bc JS is single-threaded
   * 
   * O(n2) where n is the flattened depth of the object (# of keys overall in the obj)
   * and the 1x spread operation inside the loop 
   * once the gatherString(obj inside obj) call resolves
   *  
   * worst case scenario is that everything is a string and that's what runtime is looking at!
  */
  
  