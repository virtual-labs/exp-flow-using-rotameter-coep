



	
	paper = new Raphael(document.getElementById('main-div-conf'), 900, 800);
	
	var stopImg = paper.image("images/dwt.jpg", 80, 50, 170, 170).attr({"clip-rect" : "80,50,170,170"});
	var rect = paper.rect(100, 148, 500, 135) .attr({'stroke' : '#000' , 'stroke-width' : 5 });
//	var text = paper.text(10, 10, "1");
//	text.attr('cursor','pointer');
//	text.attr('font-size', '20px');

	stopImg.drag(onDragMove, onDragStart, onDragComplete);

	function onDragStart(){
	    this.ox = this.attr('x');
	    this.oy = this.attr('y');    
	}

	function onDragMove(dx,dy){
	    this.attr({x: this.ox + dx, y: this.oy + dy });
	}

	function onDragComplete(){
	    if((this.attr('x') > 10 && (this.attr('x') < 10)) && (this.attr('y') < 50)) {
	        this.attr('fill', 'white');
	        rect.attr('fill', 'black');
	    } else {
	        this.attr('fill', 'black');
	        rect.attr('fill', 'red');
	    }
	};