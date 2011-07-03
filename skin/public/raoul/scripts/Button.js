//= require <jquery-1.4.2>
//= require <Raphael>

//= require "../webscenator/ui/icons"

(function($) {
    $.fn.button = function(options) {
        if (typeof options === 'string') {
            var obj = this.data('Button'),
                args,
                action;
            
            if (!obj) return $().eq(-1);
            
            action = obj[options];
            
            if (typeof action === 'function') {
                args = Array.prototype.slice.call(arguments, 1);

                return action.apply(obj, args);
            } else {
                return $().eq(-1);
            }
        }
    
        options = $.extend($.fn.button.defaults, options);
        
        return this.each(function() {
            var $self = $(this),
                model = {
                    init: function(el) {
                        var self = this;
                    
                        this.$context = el;
                        this.paper = Raphael(el.get(0), 140, 65);
                        this.actors = this.paper.set();
                        this.icon = this.paper.path(options.icon);
                        this.$svg = $(this.paper.canvas);
                        this.options = options;

                        this.actors.push(this.icon);
                            
                        this.icon.attr('stroke-linejoin', 'round');
                        this.icon.attr('stroke-linecap', 'round');
                        this.actors.attr('fill-opacity', 0);
                        this.actors.attr('stroke-width', 3);
                        this.actors.attr('stroke', this.options.color);
                        
                        this.$svg.css('cursor', 'pointer');
                        this.$svg.bind('mouseover.Button', function(event) {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.hoverColor }, 1000, '>');
                        });
                        this.$svg.bind('mouseout.Button', function(event) {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.color }, 1000, '>');
                        });
                        this.$svg.bind('click.Button', function() {
                            self.actors.stop();
                            self.actors.animate({ 'stroke': self.options.clickColor }, 500, '>');
                        });                                
                    },
                    
                    destroy: function() {
                        this.$svg.unbind('.Button');
                    }
                };
                
            $self.data('Button', model);
            model.init($self);
        });
    
    };
    
    $.fn.button.defaults = {
        hoverColor: '#656565',
        color: '#c9ff20',
        clickColor: '#fff',
        icon: "M134.363,28.312c-1.588-1.121-8.875-4.671-8.875-4.671s-3.176-1.028-8.408,0.561S70.742,37.561,70.742,37.561s-4.578-3.737-8.221-4.765c-3.643-1.028-21.113-5.886-21.113-5.886s-3.83-0.84-7.1,0.748c-3.27,1.588-5.232,3.831-7.1-0.187c-1.868-4.017-3.831-4.577-5.045-5.325s-5.979-4.297-5.979-4.297s14.014-5.792,17.75-7.754c3.736-1.962,12.145-7.567,17.003-5.231c5.605,3.55,14.387,9.809,16.442,9.716s5.886-1.682,2.056-4.952c0,0-15.884-8.225-19.245-8.501C46.828,0.85,43.795,0.97,38.979,2.061C33.561,3.369,5.721,12.617,5.721,12.617s-3.644-0.654-4.671,1.121c-0.467,2.99,2.335,13.64,8.688,25.317c6.259,9.343,14.48,7.661,17.189,4.298c0,0,1.869-1.775,2.149-7.754c1.588-0.747,3.176,3.083,3.831,4.765c0.654,1.682,5.605,11.491,10.183,14.293s15.415,8.688,23.449,3.736c4.765-4.017,5.138-6.82,5.886-11.491c11.117-3.83,29.614-10.369,33.818-12.519c4.204-2.148,13.266-6.446,13.266-6.446l2.429-0.934c0,0,2.803-1.401,4.391,0.654c1.589,2.055,5.792,6.54,6.82,5.605C134.176,32.329,135.951,29.433,134.363,28.312z M21.976,44.201c-4.577,0.561-9.996-5.138-10.276-7.193c-0.28-2.056-5.699-14.948-5.699-14.948l4.671-1.968c0,0,0.374-0.647,2.896,0.66s8.595,5.231,9.529,7.661S26.554,43.64,21.976,44.201z M64.109,55.031c0,0-0.28,2.896-4.765,2.709c-4.484-0.187-15.134-0.654-20.179-12.145c-5.472-10.062-5.552-11.895-5.231-13.549c0,0-0.561-2.053,2.055-1.866s12.612,2.055,20.74,5.699c0,0,6.259,2.335,7.38,10.37C65.044,48.492,64.109,55.031,64.109,55.031z"
    };
    
    $(document).ready(function() {
        $('#logo').button();
        var logos = $('.post-logo'),
            $emails = $('.email');
        
        logos.each(function() {
            var $self = $(this),
                paper = Raphael(this, 70, 30),
                icon = paper.path("M134.363,28.312c-1.588-1.121-8.875-4.671-8.875-4.671s-3.176-1.028-8.408,0.561S70.742,37.561,70.742,37.561s-4.578-3.737-8.221-4.765c-3.643-1.028-21.113-5.886-21.113-5.886s-3.83-0.84-7.1,0.748c-3.27,1.588-5.232,3.831-7.1-0.187c-1.868-4.017-3.831-4.577-5.045-5.325s-5.979-4.297-5.979-4.297s14.014-5.792,17.75-7.754c3.736-1.962,12.145-7.567,17.003-5.231c5.605,3.55,14.387,9.809,16.442,9.716s5.886-1.682,2.056-4.952c0,0-15.884-8.225-19.245-8.501C46.828,0.85,43.795,0.97,38.979,2.061C33.561,3.369,5.721,12.617,5.721,12.617s-3.644-0.654-4.671,1.121c-0.467,2.99,2.335,13.64,8.688,25.317c6.259,9.343,14.48,7.661,17.189,4.298c0,0,1.869-1.775,2.149-7.754c1.588-0.747,3.176,3.083,3.831,4.765c0.654,1.682,5.605,11.491,10.183,14.293s15.415,8.688,23.449,3.736c4.765-4.017,5.138-6.82,5.886-11.491c11.117-3.83,29.614-10.369,33.818-12.519c4.204-2.148,13.266-6.446,13.266-6.446l2.429-0.934c0,0,2.803-1.401,4.391,0.654c1.589,2.055,5.792,6.54,6.82,5.605C134.176,32.329,135.951,29.433,134.363,28.312z M21.976,44.201c-4.577,0.561-9.996-5.138-10.276-7.193c-0.28-2.056-5.699-14.948-5.699-14.948l4.671-1.968c0,0,0.374-0.647,2.896,0.66s8.595,5.231,9.529,7.661S26.554,43.64,21.976,44.201z M64.109,55.031c0,0-0.28,2.896-4.765,2.709c-4.484-0.187-15.134-0.654-20.179-12.145c-5.472-10.062-5.552-11.895-5.231-13.549c0,0-0.561-2.053,2.055-1.866s12.612,2.055,20.74,5.699c0,0,6.259,2.335,7.38,10.37C65.044,48.492,64.109,55.031,64.109,55.031z");
                
                icon.attr('stroke-linejoin', 'round');
                icon.attr('stroke-linecap', 'round');
                icon.attr('fill-opacity', 0);
                icon.attr('stroke-width', 1);
                
                // TODO: get class of parent of parent and set colour appropriately
                if ($self.parent().parent().hasClass('category-html'))
                    icon.attr('stroke', '#c9ff20');
                if ($self.parent().parent().hasClass('category-css'))
                    icon.attr('stroke', '#fc5a00');
                if ($self.parent().parent().hasClass('category-javascript'))
                    icon.attr('stroke', '#19f0fc');
                if ($self.parent().parent().hasClass('category-c-sharp'))
                    icon.attr('stroke', '#f300fc');
                    
                icon.scale(0.5, 0.5, 0, 0);
            
        });
        
        $emails.text($emails.text().replace(/{at}/, '@'));
    });
    
})(jQuery);
