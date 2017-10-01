	var portfolio = [
	{ "id" : "1" , 
	  "tags" : ["JavaSscript","React", "API"],
	  "title" : "Youtube App",
	  "description" : "A simple video player app made with React using youtube's API",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com/jeffreynerona/youtube-api-app",
	  "demo" : "https://youtube-api-app.herokuapp.com/"
	},
	{ "id" : "2" , 
	  "tags" : ["Php", "MySQL", "JavaSscript"],
	  "title" : "Point of Sale",
	  "description" : "A simple POS made with PHP, MySQL and VanillaJS and jQuery.",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com/jeffreynerona/pos",
	  "demo" : "http://pos.jeffreynerona.com/"
	},
	{ "id" : "3" , 
	  "tags" : ["Ruby","Rails","PostgreSQL"],
	  "title" : "Message Board",
	  "description" : "A simple message board made with rails.",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://jeffboard.herokuapp.com/",
	  "demo" : "https://github.com/jeffreynerona/message_board"
	},
	{ "id" : "4" , 
	  "tags" : ["Node", "Express","MongoDB"],
	  "title" : "Banking App",
	  "description" : "A simple bank app with node and express.",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com/jeffreynerona/node-bank",
	  "demo" : "https://nodebank.herokuapp.com/"
	},
	{ "id" : "5" , 
	  "tags" : ["Ruby","Rails","PostgreSQL"],
	  "title" : "Photo Board",
	  "description" : "A simple instagram like application using Ruby On Rails.",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com/jeffreynerona/photoboard"
	}
	];

function showItems() {
  var output = '';
  for(var i in portfolio){
     var id = portfolio[i].id;
     var title = portfolio[i].title;
     var tags = portfolio[i].tags;
     var image =portfolio[i].image
     var description = portfolio[i].description;
     var github = portfolio[i].github;
     output += '<div class="portfolio-item" style="background-image:url('+image+')" id="item-'+id+
     '"><div class="portfolio-details"><span class="portfolio-title">'+title
     +'</span><span class="portfolio-tags">'+tags[0]+' | '+tags[1]+' | '+tags[2]+
     '</span><span class="portfolio-description">'+description+
     '</span><span class="portfolio-link"><a class="github-button" target="_blank" href="'+
     github+'">Github</a></span></div></div>';
  }
    $('.portfolio-items').html(output);
}

showItems();