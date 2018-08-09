define([
    'core/js/views/adaptView',
    'core/js/adapt'
], function(AdaptView) {

    var BlockView = AdaptView.extend({

        className: function() {
            return "block " + 
            this.model.get('_id') +
            " " + this.model.get('_classes') + 
            " " + this.setVisibility() +
            " " + this.setHidden() +
            " nth-child-" +
            this.model.get("_nthChild") +
            " " + (this.model.get('_isComplete') ? 'completed' : '');
        },
        postRender: function() {
            AdaptView.prototype.postRender.apply(this, arguments);
            var that = this;
            _.defer(function(){
                setTimeout(function(){
                    if(!Adapt.device.touch && that.$el.height() < Adapt.device.screenHeight){
                        that.$el.height(Adapt.device.screenHeight);
                    }
                },1500);
            });
        }

    }, {
        childContainer: '.component-container',
        type: 'block',
        template: 'block'
    });

    return BlockView;

});
