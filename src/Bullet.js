var Bullet = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.bullet_pic );
    },

    update: function( dt ) {
        var x = this.getPositionX();
        x += 5;
        this.setPositionX( x );
    },

    randomPosition: function() {
        var y = 10 + Math.floor( Math.random() * ( screenHeight - 10 ) );
        this.setPosition( new cc.Point( 100, y ) );
    }
});
