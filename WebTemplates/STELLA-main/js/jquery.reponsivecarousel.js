(function($) {
    $.fn.reponsiveCarousel = function(options) {
        // plugin options
        var settings = $.extend({
            thumbWidth: 140,
            padding : 20,
            offsetX : 10,
            slideShow : false,
            slideShowDelay : 5000,
            easeInLeft : 'rollIn',
            easeOutLeft : 'rollOut',
            easeInRight : 'rollIn',
            easeOutRight : 'rollOut',
            showArrow : true,
            arrowAutoHide : true
        }, options);

        var _this = this;
        var itemList = [];
        var itemNum = 0;

        var parent = _this.parent();

        var itemWidth;

        _this.find('.item').each(function(index) {
            itemWidth = $(this).width();
            itemList[index] = $(this).css({
                'position' : 'absolute',
                'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*index,
                'top' : 10
            });
            itemNum = index + 1;
            $(this).on('click', function(event) {
                // event.preventDefault();
                // slideNext();
            });
        });

        var showNum = Math.floor(parent.width()/(itemWidth + settings.padding));

        // if(settings.responsive){
            $(window).load(updateResponsive);
            $(window).resize(updateResponsive);
        // }

        var slideShowInt;
        if(settings.slideShow){
            startSlideShow();
        }

        function startSlideShow() {
            clearInterval(_this.data('interval'));
            slideShowInt = setInterval( function(){
                slideNext();
            },settings.slideShowDelay);
            _this.data('interval', slideShowInt);
        }

        function stopSlideShow() {
            clearInterval(_this.data('interval'));
        }

        parent.on('mouseover', function(event) {
            if(settings.arrowAutoHide){
                $(this).find('.arrowButton').show().animate({opacity: 1}, 300);
            }
            stopSlideShow();
        }).on('mouseleave', function(event) {
            if(settings.arrowAutoHide){
                $(this).find('.arrowButton').animate({opacity: 0}, 300, function(){
                    $(this).hide();
                });
            }
            if(settings.slideShow) startSlideShow();
        });;

        function updateResponsive(){
            showNum = Math.floor(parent.width()/(itemWidth + settings.padding));
            for (var i = 0; i < itemNum; i++) {
                if(i<showNum){
                    itemList[i].removeClass(transitionStr + animateStr).css({
                        'opacity' : 1,
                        'position' : 'absolute',
                        'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*i
                    })
                }else{
                    itemList[i].removeClass(transitionStr + animateStr).css({
                        'opacity' : 0,
                        'position' : 'absolute',
                        'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*i
                    });
                }
            };
        }

        // add the previous/next arrow buttons
        if(settings.showArrow){
            arrowButton = $('<div class="arrowButton"><div class="prevArrow"></div><div class="nextArrow"></div></div>');
            parent.append(arrowButton);
            var _next = $('.nextArrow', arrowButton).bind('click', function(event) {
                slideNext();
            });
            var _prev = $('.prevArrow', arrowButton).bind('click', function(event) {
                slidePrev();
            });

        }


        var index = 0;
        var startNum = 0;

        function slideNext(){
            var _tempNum = 0;
            var _tweenNum = 0;
            var _extraNum = 0;
            for (var i = 0; i < 0 + showNum; i++) {
                if(itemList[i]){
                    if(!Modernizr.csstransitions){
                        itemList[i].animate({opacity: 0}, 300, function(){
                            $(this).hide();
                        });
                    }else{
                        itemList[i].removeClass(transitionStr + animateStr).addClass('animate' + _tempNum + ' ' + settings.easeOutRight);
                        itemList[i].bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                            $(this).unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
                            $(this).hide();
                        });
                    }

                }
                var _n = i + showNum;
                if(_n > itemNum - 1) {
                    _n = _extraNum;
                    _extraNum++;
                }
                if(itemList[_n]){
                    if(!Modernizr.csstransitions){
                        itemList[_n].css({
                            'position' : 'absolute',
                            'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*_tempNum
                        }).show().delay(_tempNum*100).animate({
                            opacity: 1
                            },
                            300, function() {
                                _tempNum++;
                        });
                    }else{
                        itemList[_n].css({
                        'position' : 'absolute',
                        'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*_tempNum
                        }).removeClass(transitionStr + animateStr).show().addClass('animate' + _tempNum + ' ' + settings.easeInRight).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                                $(this).unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
                                $(this).show();
                                _tweenNum++;
                        });
                    }

                }
                _tempNum++;
            };
            itemList = itemList.concat(itemList.slice(0, showNum));
            itemList.splice(0, showNum);
        }

        var transitionStr = settings.easeInLeft + ' ' + settings.easeInRight + ' ' + settings.easeOutLeft + ' ' + settings.easeOutRight;

        var animateStr = ' animate0 animate1 animate2 animate3 animate4 animate5 animate6 animate7 animate8';

        function slidePrev(){
            var _tempNum = 0;
            for (var i = 0; i < 0 + showNum; i++) {
                if(itemList[i]){
                    if(i<itemNum-showNum){
                        if(!Modernizr.csstransitions){
                            itemList[i].animate({opacity: 0}, 300, function(){
                                $(this).hide();
                            });
                        }else{
                            itemList[i].removeClass(transitionStr + animateStr).addClass('animate' + _tempNum + ' ' + settings.easeOutLeft);
                            itemList[i].bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                                $(this).unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
                                $(this).hide();
                            });
                        }

                    }

                }
                var _n = i - showNum;
                if(_n < 0){
                    _n = itemNum + i - showNum;
                }
                if(itemList[_n]){
                    if(!Modernizr.csstransitions){
                        itemList[_n].show().delay(_tempNum*100).css({
                            'position' : 'absolute',
                            'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*_tempNum
                        }).show().animate({opacity: 1}, 300);
                    }else{
                        itemList[_n].removeClass(transitionStr + animateStr).css({
                            'position' : 'absolute',
                            'left' : settings.offsetX + (settings.thumbWidth + settings.padding)*_tempNum
                        }).show().addClass('animate' + _tempNum + ' ' + settings.easeInLeft).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                            $(this).unbind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd");
                            $(this).show();
                        });
                    }
                }
                _tempNum++;
            };
            itemList = itemList.slice(-showNum).concat(itemList);
            itemList.splice(-showNum, showNum);
        }

        return this;
    };
})(jQuery);
