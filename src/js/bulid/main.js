require.config({
  baseUrl: 'src/js',
  paths: {
      'jquery': 'libs/jquery-1.11.3.min',
      'fullpage': 'comp/fullpage',
      'materialize': 'comp/materialize.min'

  },
  shim: {
     'fullpage': ['jquery'],
     'materialize': ['jquery']
  }
})

require(['jquery', 'fullpage','materialize'], function($) {

  $(function(){

    var runPage;
    runPage = new FullPage({
    	id : 'pageContain',                            // id of contain
    	slideTime : 1000,                               // time of slide
    	continuous : true,                            // create an infinite feel with no endpoints
    	effect : {                                     // slide effect
            	transform : {
            		translate : 'Y',				   // 'X'|'Y'|'XY'|'none'
            		scale : [.1, 1],				   // [scalefrom, scaleto]
            		rotate : [60, 0]				       // [rotatefrom, rotateto]
            	},
            	opacity : [0, 1]                       // [opacityfrom, opacityto]
        	},
    	mode : 'wheel,touch,nav:navBar',               // mode of fullpage
    	easing : 'ease-in-out'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];

    });
    $('.modal-trigger').leanModal({
      opacity: .1,
    });
  })
})
