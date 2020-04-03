/*function svyGetDom(_name){
	
  var containers = document.getElementsByName(_name)
  console.log(_name,containers.length)
  //for (var a = 0; a< containers.length;a++)console.dir(containers[a])
  if (containers.length > 1) container = null
  else container = containers[0]
  return container
}*/
function svyRunScript(_inp){
  window.executeInlineScript(
    this.formname,
    this.script,
    _inp
  )
}
function jsWidget_Notify(_svy){
  this.svy = _svy
  this.refreshNotifications(this.svy.model.items || [], new Date()) 
}
jsWidget_Notify.prototype.refreshNotifications = function(items, today, pos) {
  var svy = this.svy
  items = this.strToDate(items)
  today = today || new Date();
  var cssTransitionEnd = getTransitionEnd();
  var container = $(svy.dom)
  items.forEach(function(item) {
    item.isExpired = item.date < today;    
    item.isToday = (item.date.getFullYear() === today.getFullYear()) &&
      (item.date.getMonth() === today.getMonth()) &&
      (item.date.getDate() === today.getDate())    
    item.formattedDate = function() {
      if (this.isToday) {
        return timeToString(this.date)
      } else {
        return this.date.getFullYear() + '-' +
          strpad(this.date.getMonth() + 1) + '-' +
          strpad(this.date.getDate())
      }
    }
  })  
  items.sort(function(a, b) {
    if (a.isExpired === b.isExpired) {
      return a.date - b.date;
    } else {
      return (b.isExpired ? 0 : 1) - (a.isExpired ? 0 : 1);
    }
  });
    
  var widgetId = "widget_" + svy.name
  var headerId = "header_" + svy.name
  
  var template = 
      '<div id="' + widgetId + '" class="notifications">' +
        '<div id="' + headerId + '"><h3>Notifications</h3></div>' +
        '<ul class="notifications-list">' +
          '<li class="item no-data">You don\'t have notifications</li>' +
          '{{#items}}' +
            '<li class="item js-item {{#isExpired}}expired{{/isExpired}}" data-id="{{id}}">' +
              '<div class="details">' +
                '<span class="title">{{title}}</span>' +
                '<span class="date">{{formattedDate}}</span>' +
              '</div>' +
              '<button type="button" class="button-default button-dismiss js-dismiss">×</button>' +
            '</li>' +
          '{{/items}}' +
        '</ul>' +
      '</div>';
  if (container.find('.notifications').length) {
    container
      .find('.notifications').remove()
    container
      .append(Mustache.render(template, { items: items }))
      .find('.js-count').attr('data-count', items.length).html(items.length).end()
    if (items.length)
      container.find('.js-count').removeClass('zerocount');
  }
  else {
    container
      .append(Mustache.render(template, { items: items }))
      .find('.js-count').attr('data-count', items.length).html(items.length).end()
      .on('click', '.js-show-notifications', function(event) {
    	  
    	  var offsetTop = 20,
    	      offsetBottom = 10
			  
      	container.find('.notifications').toggleClass('active').blur();
      	
        if (svy.model.fixedPosition) {
        	
        	var iconH = svy.model.size.height,//$('#' + widgetId).prev().offset().height,
        		iconW = svy.model.size.width,//parseInt($('#' + widgetId).prev().css('width'), 10),
        		iconL = $('#' + widgetId).prev().offset().left,
        		iconT = $('#' + widgetId).prev().offset().top,
			    divW = parseInt($('#' + widgetId).css('width'), 10),
			    divH = parseInt($('#' + widgetId).css('height'), 10)

			$('#' + widgetId).css('position', 'fixed')
			$('#' + widgetId).prev().css('z-index', '9999')
        	
		    if (svy.model.horizontalAlignment === 'left')
		  	  $('#' + widgetId).css('left', iconL - divW + iconW)
		    else
			  $('#' + widgetId).css('left', iconL)
		
			if (svy.model.verticalAlignment === 'top')
		  	  $('#' + widgetId).css('top', iconT - divH - offsetTop)
		    else
			  $('#' + widgetId).css('top', iconT + iconH + offsetBottom)
			
      	  
        } else {
        	
        	var top = 0,
            left = 0,
            vOffset = $('#' + headerId).css('height').replace('px', '')/1,
            widget = $('#' + widgetId),
            w = widget.css('width').replace('px', '')/1,
            h = widget.css('height').replace('px', '')/1
		
        	if (svy.model.horizontalAlignment === 'left')
            	left = svy.model.size.width - w
            else
            	left = 0
    			
            if (svy.model.verticalAlignment === 'top')
            	top = - (svy.model.maxheight && svy.model.maxheight < h ? (svy.model.maxheight + vOffset) : h) - offsetTop
            else
            	top = svy.model.size.height + offsetBottom
        
        	widget.css('top', (top + 'px'))
        	widget.css('left', (left + 'px'))
			
        }
        
        if (svy.model.maxheight) {
          container.find('.notifications-list').css('max-height', svy.model.maxheight + 'px')
          container.find('.notifications-list').css('overflow', 'overlay')
        }
        return true;
      })
      .on('click', '.js-dismiss', function(event) {
        var item = $(event.currentTarget).parents('.js-item');
        if (svy.model.onRemove) svyRunScript.call(svy.model.onRemove,
                                                  [ $(item).attr('data-id') / 1 ])
        var removeItem = function(_item) {
          $('.notifications-list').css('overflow', 'overlay')
          item.addClass('dismissedTransitionEnd')
          item[0].removeEventListener(cssTransitionEnd, removeItem, false);
          item.remove();

        /* update notifications' counter */
          var countElement = container.find('.js-count');
          var prevCount = +countElement.attr('data-count');
          var newCount = prevCount - 1;
          countElement
            .attr('data-count', newCount)
            .html(newCount);
        
          if(newCount === 0) {
            countElement.addClass('zerocount');
            container.find('.notifications').addClass('empty');
          }
        };
        $('.notifications-list').css('overflow', 'hidden')
        if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) setTimeout(function(){removeItem(item)},100)      
        else item[0].addEventListener(cssTransitionEnd, removeItem, false);
        item.addClass('dismissed');        
        return true;
      })
  }
  
  $('#' + widgetId).toggleClass('arrow-' + svy.model.horizontalAlignment + '-' + svy.model.verticalAlignment)
  if (!(container.find('.js-count').attr('data-count')/1)) {
   container.find('.js-count').addClass('zerocount')
   container.find('.notifications').addClass('empty')}

}

jsWidget_Notify.prototype.strToDate = function(_in) {
        if (!_in) return []
        var out = []
        for (var i = 0; i < _in.length; i += 1) {
          out[i] = {}
          out[i].id = _in[i].id
          out[i].title = _in[i].title
          out[i].date = new Date(_in[i].date)
        }
        return out
      }    	  


function timeToString(date) {
  if (date) {
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ap = hh >= 12 ? 'PM' : 'AM';

    hh = (hh >= 12) ? (hh - 12) : hh;
    hh = (hh === 0) ? 12 : hh;

    return (hh < 10 ? '0' : '') + hh.toString() + ':' +
      (mm < 10 ? '0' : '') + mm.toString() + ' ' + ap;
  }
  return null;
}

function strpad(num) {
  if (parseInt(num) < 10) {
    return '0' + parseInt(num);
  } else {
    return parseInt(num);
  }
}

function getTransitionEnd() {
  var supportedStyles = window.document.createElement('fake').style;
  var properties = {
    'webkitTransition': { 'end': 'webkitTransitionEnd' },
    'oTransition': { 'end': 'oTransitionEnd' },
    'msTransition': { 'end': 'msTransitionEnd' },
    'transition': { 'end': 'transitionend' }
  };
  
  var match = null;
  Object.getOwnPropertyNames(properties).forEach(function(name) {
    if (!match && name in supportedStyles) {
      match = name;
      return;
    }
  });
  
  return (properties[match] || {}).end;
}