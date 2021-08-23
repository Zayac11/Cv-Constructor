import React, {useEffect} from 'react'

// import {
//     forceSimulation,
//     forceManyBody,
//     forceLink,
//     forceCenter,
//
// } from 'd3-force'
//
// import {zoom, zoomIdentity} from 'd3-zoom'
// import {select, } from 'd3-selection'
// import {drag} from 'd3-drag'

import * as d3 from 'd3'
import {nodes, links, MANY_BODY_STRENGTH} from './D3Data'

const D3Main = (props) => {

    let svg = ''
    useEffect(() => {

    svg = d3.select('#container')

    const width = +svg.attr('width')
    const height = +svg.attr('height')
    // debugger
    const centerX = width / 4
    const centerY = height / 4
    // svg.attr("transform","translate(0,0)scale(.5,.5)");

    const simulation = d3.forceSimulation(nodes)
        .force('charge', d3.forceManyBody().strength(MANY_BODY_STRENGTH))
        .force(
            'link',
            d3.forceLink(links).distance((link) => link.distance)
        )
        .force('center', d3.forceCenter(centerX, centerY))

        // let zoom = d3.behavior.zoom().translate([100,50]).scale(.5);

    let zoom_handler = d3.zoom()
    .on('zoom', zoom_actions)

    zoom_handler(svg)

    let g = svg.append("svg:g")

    const lines = g.append('g')
        .attr("class", "links")
        .selectAll('line')
        .data(links)
        .enter()
        .append('line')
        .attr('stroke', (link) => link.color || 'black')


    const circles = g.append('g')
        .attr("class", "nodes")
        .selectAll('circle')
        .data(nodes)
        .enter()
        .append('circle')
        .attr('fill', (node) => node.color || 'gray')
        .attr('r', (node) => node.size)
        .style('cursor', 'pointer')
        // .call(dragInteraction)
        .on('click', function (d, i) {
            const id = i.id
            window.alert(`https://vk.com/id` + id)
            // window.location.href = `https://vk.com/id` + id
            // handle events here
            // d - datum
            // i - identifier or index
            // this - the `<rect>` that was clicked
        })

    const text = g.append('g')
        .selectAll('text')
        .data(nodes)
        .enter()
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('pointer-events', 'none')
        .style('font-weight', 500)
        .style('font-size', 10)
        .style('fill', '#fff')
        .text((node) => node.name)

    let drag_handler = d3.drag()
        .on('start', drag_start)
        .on('drag', drag_drag)
        .on('end', drag_end)

    drag_handler(circles)



    // zoom_handler(svg)

    function drag_start(event, d) {
        if (!event.active) simulation.alpha(0.3).restart()
        d.fx = d.x
        d.fy = d.y
    }

//make sure you can't drag the circle outside the box
    function drag_drag(event, d) {
        d.fx = event.x
        d.fy = event.y
    }

    function drag_end(event, d) {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
    }

//Zoom functions
    function zoom_actions(e) {

        g.attr('transform', e.transform)
    }

    simulation.on('tick', () => {
        circles.attr('cx', (node) => node.x).attr('cy', (node) => node.y)
        text.attr('x', (node) => node.x).attr('y', (node) => node.y - 15)

        lines
            .attr('x1', (link) => link.source.x)
            .attr('y1', (link) => link.source.y)
            .attr('x2', (link) => link.target.x)
            .attr('y2', (link) => link.target.y)
    })
    }, [])

    return (
        <>
            <svg id='container' width='1000' height='960'> </svg>
        </>
    )
}

export default D3Main

