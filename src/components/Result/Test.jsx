import React from 'react'
import { Graph } from "react-d3-graph";

const Test = () => {

    const data = {
        nodes: [
            { firstName:'Кирилл', id: "brunogrb3", color: "red", symbolType: "circle"},
            { firstName:'Алекс Чентсов', id: "alegeniusman"},
            { firstName:'8732837', id: "kinnek"},
            { firstName:'asjdksajd', id: "123"},
            { firstName:'asjdksajd ша', id: "32132"},
            { firstName:'Ксasjdksajd', id: "43243"},
            { firstName:'Кasjdksajd', id: "5534535"},
            { firstName:'asdsad', id: "73217321"},
            { firstName:'kosdfkodso', id: "8443324"},
            { firstName:'vcxvcxcxc', id: "94543"},
        ],
        links: [
            { source: "brunogrb3", target: "alegeniusman", markerWidth: 10, markerHeight: 600, linkLength: 600,  },
            { source: "brunogrb3", target: "kinnek" },
            { source: "brunogrb3", target: "123" },
            { source: "alegeniusman", target: "5534535" },
            { source: "alegeniusman", target: "32132" },
            { source: "alegeniusman", target: "43243" },
            { source: "kinnek", target: "73217321" },
            { source: "kinnek", target: "8443324" },
            { source: "kinnek", target: "94543" },
        ],
        focusedNodeId: 'brunogrb3'
    };
    const myConfig = {
        width: 1400,
        height: 1000,

        directed: true,
        fontColor: 'white',
        d3: {
            linkLength: 400,
            // alphaTarget: 0,
            gravity: -100,
            disableLinkForce: false,
        },
        nodeHighlightBehavior: true,
        automaticRearrangeAfterDropNode: false,
        // staticGraphWithDragAndDrop : true,
        focusAnimationDuration: 0,
        // freezeAllDragEvents: true,
        minZoom: 0.6,
        initialZoom: 0.6,
        maxZoom: 1.5,
        node: {
            fontColor: 'white',
            labelPosition: 'top',
            labelProperty: 'firstName', //Поле отвечает за название поля для имени
            color: "#00FF00",
            size: 1000,
            fontSize: 15,
            highlightFontSize : 15,
            highlightStrokeColor: "blue",
        },
        link: {
            highlightColor: "lightblue",

        },
    };

    const onClickNode = function(nodeId) {
        window.location.href = `https://vk.com/${nodeId}`
        // window.alert(`Clicked node ${nodeId}`);
    };

    const onClickLink = function(source, target) {
        window.alert(`Clicked link between ${source} and ${target}`);
    };

    return (
        <div>
            {/*<svg width='500' height='500'*/}
            {/*     viewBox='0 0 500 500'*/}
            {/*     xmlns='http://www.w3.org/2000/svg'>*/}

            {/*    <>*/}
            {/*        <text x='0' y='0' textAnchor='start'>*/}
            {/*            <tspan dominantBaseline="inherit" textAnchor='inherit' dy='1rem' x='0'>Текст</tspan>*/}
            {/*        </text>*/}
            {/*        <rect fill={'green'} x='0' y='20' width='50' height='50' onClick={() => {*/}
            {/*            window.location =*/}
            {/*                ('https://vk.com/alexgeniusman')*/}
            {/*        }} />*/}
            {/*        <path d="m 50 45 l 50 0" fill="transparent" stroke="black"/>*/}
            {/*    </>*/}

            {/*</svg>*/}

            <Graph
                id="graph-id" // id is mandatory
                data={data}
                config={myConfig}
                onClickNode={onClickNode}
                onClickLink={onClickLink}
            />

        </div>
    )
}

export default Test