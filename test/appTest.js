const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    //suma
    describe('add()', function(){
        it('Add should be above 5', function(){
            let result = app.add(5,5);
            assert.isAbove(result, 5); //se verifica el resultado de la operacion 
        });
    
        it('AddNumbers should return a number', function(){
            let result = app.add(5,5); 
            assert.typeOf(result, 'number'); //se verifica que el tipo de dato sea un numero
        });
    });

    //resta
    describe('sub()', function(){
        it('El resultado de la resta debe de ser 104', function(){
            let result = app.sub(230,126); 
            assert.equal(result, 104); //se verifica el resultado de la operacion 
            assert.typeOf(result, 'number'); //se verifica que el tipo de dato sea un numero
        });
    });

    //multiplicacion
    describe('mul()', function(){
        it('El resultado de la multipliacion debe de ser 654', function(){
            let result = app.mult(218,3);
            assert.equal(result, 654); //se verifica el resultado de la operacion 
            assert.typeOf(result, 'number'); //se verifica que el tipo de dato sea un numero
        });
    });

    //division
    describe('div()', function(){
        it('El resutlado de la division debe de ser 2.0434782608695654', function(){
            let result = app.div(94,46); 
            assert.equal(result, 2.0434782608695654) //se verifica el resultado de la operacion 
            assert.typeOf(result, 'number'); //se verifica que el tipo de dato sea un numero
        });
    });

});
