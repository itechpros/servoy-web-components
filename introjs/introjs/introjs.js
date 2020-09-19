angular.module('introjs',['servoy', 'angular-intro'])
.factory("introjs",function($services, $window, ngIntroService) 
{
	
	var introOptions = {};
	
	
	var doc = document.createElement('div')
	doc.innerHTML="TEST 1223 123 123"
		doc.id = 'IDTEST'
	document.getElementsByTagName("BODY")[0].appendChild(doc)
	
	
	console.log(document.getElementsByName('buttonA'))
	var scope = $services.getServiceScope('introjs');
	
	//CallMe()
	
	
    var introOptions = {
        steps:[
        {
            element: document.querySelector('#IDTEST'),
            intro: "This is the first tooltip."
        },
        {
            element: document.querySelectorAll('[name="buttonA"]')[0],
            intro: "<strong>You</strong> can also <em>include</em> HTML",
            position: 'right'
        },
        {
            element: '#step3',
            intro: 'More features, more fun.',
            position: 'left'
        },
        {
            element: '#step4',
            intro: "Another step.",
            position: 'bottom'
        },
        {
            element: '#step5',
            intro: 'Get it, use it.'
        }
        ],
        showStepNumbers: false,
        showBullets: false,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: 'next',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };	
	
    
    ngIntroService.clear();
	ngIntroService.setOptions(introOptions);
	return {
		 downloadFile : function(url){
			 console.log(url)
		      ngIntroService.start();
	//		  window.downloadFile(url);
		  }
	}
	
	
	
})
.run(function($rootScope,$services,ngIntroService)
{
console.log(ngIntroService)
})