/**********************************************************************************************
 * This fuction defines parameters to set 'where' and what 'element' will have the same height. 
 * **'where' is the element's father.
 * **The 'element' is a selector which will select all elements that must have the same height.
***********************************************************************************************/
jQuery(window).load(function(){
    
	function sameHeight(where, element){
        var height = [];
        var maxHeight = 0;
        jQuery(where).find(element).each(function(index){
            height[index] = jQuery(this).height();
            if(height[index] > maxHeight){
                maxHeight = height[index];
            }
        }).css('min-height', maxHeight);
    }
 
    /* Fuction with parameters where and what element will have the same height */
    sameHeight('where', 'element');
});

// Code by: Filipe Seabra; Gustavo Xavier 