import d3 from 'd3'
import * as d3geo from 'd3-geo'
import * as topojson from 'topojson'
import * as {d3select} from 'd3-selection'
import francemap from './text/simple.json'

//console.log(francemap)
//console.log(topojson)
console.log(d3select)

function drawMap() {
    var width = 1300,
        height = 1000;

    var svg = d3select("#gv-map").append("svg")
        .attr('height', height)
        .attr('width', width);

        console.log(svg);

    var projection = d3.geoConicEqualArea()
        .parallels([30, 42])
        .rotate([-10, 0])
        .center([0, 60])
        .scale(1400);

    var path = d3.geoPath()
        .projection(projection)

    var countries = svg.selectAll("path.gv-country")
        .data(topojson.topology(francemap, francemap.depts.crs).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", 'gv-country gv-fill-1')

/*
    var labels = svg.selectAll("text.gv-map-label")
        .data(topojson.feature(euTopo, euTopo.objects.collection).features)
        .enter()
        .append("text")
        .text(function (d) {
            return d.properties.name;
        })
        .attr("class", 'gv-map-label')
        .attr('x', function (d) {

     nodedata[d.properties.iso_a3] = {
            x: path.centroid(d)[0],
              y: path.centroid(d)[1]
          }
            return path.centroid(d)[0];
        })
        .attr('y', function (d) {
            return path.centroid(d)[1];
        })
        */
}

drawMap(); 