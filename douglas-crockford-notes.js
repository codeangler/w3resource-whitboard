//  douglas crockford
// https://www.youtube.com/watch?v=rhV6hlL_wMc&feature=youtu.be&t=36m35s

'use strict';

function constructor(spec){
    let {member} = spec; // es6 destructoring syntax; same as let member = spec.member

// similar notation for inheritance
    let { other } = other_constructor(spec);
    let method = function(){
        // member, other, method, spec
    }


//produce object that is public
    return Object.freeze({
        method,
        other
    });

}