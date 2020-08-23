angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs, $window) {
          	console.log(tui)
          	//setTimeout(function(){
                var imageEditor = new tui.ImageEditor('#tui-image-editor-container', {
                    includeUI: {
//                        loadImage: {
         //                   path: 'img/sampleImage2.png',
           //                 name: 'SampleImage'
             //           },
                        theme: blackTheme, // or whiteTheme
                        initMenu: 'filter',
                        menuBarPosition: 'bottom'
                    },
                    cssMaxWidth: 700,
                    cssMaxHeight: 500,
                    usageStatistics: false
                });
                window.onresize = function() {
                    imageEditor.ui.resizeEditor();
                }
          	//}, 3000)

	  },
      templateUrl: 'tuiimageeditor/ImageEditor/ImageEditor.html'
    };
})

