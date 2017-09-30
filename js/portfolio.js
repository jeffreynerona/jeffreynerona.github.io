	var portfolio = [
	{ "id" : "1" , 
	  "tags" : ["JavaScript", "Ruby", "MongoDB"],
	  "title" : "Node Bank",
	  "description" : "asdf",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com"
	},
	{ "id" : "2" , 
	  "tags" : ["Php", "MySQL", "JavaSscript"],
	  "title" : "Point of Sale",
	  "description" : "asdfadsafas",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com"
	},
	{ "id" : "3" , 
	  "tags" : ["Php", "MySQL", "JavaScript"],
	  "title" : "React App",
	  "description" : "asdfadsafas",
	  "image" : "images/portfolio/sample.png",
	  "github" : "https://github.com"
	}
	];

function showItems() {
  var output = '';
  for(var i in portfolio){
     var id = portfolio[i].id;
     var title = portfolio[i].title;
     var tags = portfolio[i].tags;
     var image =portfolio[i].image
     output += '<div class="portfolio-item" style="background-image:url('+image+')" id="item-'+id+
     '"><div class="portfolio-details"><span class="portfolio-title">'+title
     +'</span><span class="portfolio-tags">'+tags[0]+' | '+tags[1]+' | '+tags[2]+'</span></div></div>';
  }
    $('.portfolio-items').html(output);
}

showItems();