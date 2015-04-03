var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( res.ship_pic );
    },
    
    move: function( keyCode ){
    	if ( keyCode == cc.KEY.up ) {
            var y = this.getPositionY();
            if ( y < screenHeight - 10 ) {
                y += 10;
                this.setPositionY( y );
            }
        } else if ( keyCode == cc.KEY.down ) {
            var y = this.getPositionY();
            if ( y > 10 ) {
                y -= 10;
                this.setPositionY( y );
            }
        }
    }
});
