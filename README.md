js-type
=======

JavaScript Type Getter

# Lite type-string

    console.log( 'lite-type: ', jstype.lite());
    console.log( 'lite-type: ', jstype.lite(null));
    console.log( 'lite-type: ', jstype.lite({}));
    console.log( 'lite-type: ', jstype.lite('{}'));
    console.log( 'lite-type: ', jstype.lite(1));
    console.log( 'lite-type: ', jstype.lite(true));
    console.log( 'lite-type: ', jstype.lite(/a/));
    console.log( 'lite-type: ', jstype.lite([]));
    console.log( 'lite-type: ', jstype.lite(function(){}));
    console.log( 'lite-type: ', jstype.lite(window));

Null's type-string is 'null'

# Type Judge
   
   console.log( jstype.isArray( [ ] ) );
   console.log( jstype.isObject( { } ) );
   console.log( jstype.isString( '' ) );
   //...