import d3 from 'd3'
import * as d3geo from 'd3-geo'
import * as topojson from 'topojson'
import * as d3select from 'd3-selection'
import francemap from './text/simple.json'
import * as topoclient from 'topojson-client'


function drawMap() {
    var width = 1300,
        height = 1000;

    var svg = d3select.select("#gv-map").append("svg")
        .attr('height', height)
        .attr('width', width);

            var projection = d3geo.geoConicEqualArea()
        .parallels([30, 42])
        .rotate([0, 0])
        .center([0, 47])
        .scale(2900);


    var path = d3geo.geoPath()
    .projection(projection)

    var countries = svg.selectAll("path.gv-country")
    //    .data(francemap.objects.depts.geometries)
        .data(topoclient.feature(francemap, francemap.objects.depts).features)
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

     
