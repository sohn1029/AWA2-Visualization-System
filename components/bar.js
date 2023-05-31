class BarChart {
    
    constructor(nodes, width, height) {
        let margin = {top: 20, right: 15, bottom: 40, left: 100  }
        this.innerwidth = width - margin.left - margin.right;
        this.innerheight = height - margin.top - margin.bottom;
        this.nodes = nodes;
        this.svg = d3.select('#StrengthBar')
            .attr("width", width)
            .attr("height",  height)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            ;
        
        this.width = width;
        this.height = height;
        this.initialize();
    }

    initialize() {
        let margin = {top: 10, right: 10, bottom: 40, left: 40  }
        
        this.data = []
        this.nodes = [...this.nodes]
        for(let i = 0; i < this.nodes.length; i++){
            this.data.push([{"classes": this.nodes[i].id, "strengths": this.nodes[i].strength}]);
        }
        this.data.sort((a, b) => a[0].strengths - b[0].strengths);
        let x = d3.scaleLinear()
            .domain([0, 6])
            .range([ 0, this.innerwidth]);

        this.svg.append("g")
            .attr("transform", "translate(0," + this.innerheight + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end")
            
        let y = d3.scaleBand()
            .range([this.innerheight, 0 ])
            .domain(this.data.map(d => d[0].classes))
            .padding(.2);

        this.svg.append("g")
            .call(d3.axisLeft(y))
          //Bars
        this.svg.selectAll("rect")
            .data(this.data)
            .enter()
            .append("rect")
            .attr("x", x(0) )
            .attr("y", function(d) { return y(d[0].classes); })
            .attr("width", function(d) { 
                return x(d[0].strengths); })
            .attr("height", y.bandwidth() )
            .attr("fill", function (d) { 
                return d3.scaleLinear().domain([0, 6]).range(['blue', 'red'])(d[0].strengths)})
            
        }
        
    }

    


