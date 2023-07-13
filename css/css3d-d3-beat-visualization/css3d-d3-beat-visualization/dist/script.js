var color= ~~(Math.random()*360),
    spans = d3.selectAll("._3dbox"),
    len = 15;

spans
  .style("background-color", function(d) { 
          return "hsl("+ random(0, 360) +", 60%, 50%)";
		})
      
      function draw () {
        spans
      	.transition().duration(500).ease('elastic')
  .style("height", function(d) { return d * 5 + "px"; });
      }
      
      setInterval(function () {
        var arr = Array.apply(null, new Array(len)).map(function () {
          return random(10, 80);
        });
        spans
    	.data(arr);
        draw();
	  }, 800);
      
      function random (min, max) {
        return min + ~~(Math.random() * (max - min));
      }