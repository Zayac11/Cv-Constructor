import React from 'react'
import {RadialTreeGraph} from '@ant-design/charts'


const Test2 = () => {

    const data = {
        id: 'Modeling Methods',
        style: {
            fill: '#fff',
        },
        children: [
            {
                id: 'Classification',
                children: [
                    { id: 'Logistic regression', value: 'Logistic regression' },
                    {
                        id: 'Linear discriminant analysis',
                        value: 'Linear discriminant analysis',
                    },
                    { id: 'Rules', value: 'Rules' },
                    { id: 'Decision trees', value: 'Decision trees' },
                    { id: 'Naive Bayes', value: 'Naive Bayes' },
                    { id: 'K nearest neighbor', value: 'K nearest neighbor' },
                    {
                        id: 'Probabilistic neural network',
                        value: 'Probabilistic neural network',
                    },
                    { id: 'Support vector machine', value: 'Support vector machine' },
                ],
                value: 'Classification',
            },
            {
                id: 'Consensus',
                children: [
                    {
                        id: 'Models diversity',
                        children: [
                            {
                                id: 'Different initializations',
                                value: 'Different initializations',
                            },
                            {
                                id: 'Different parameter choices',
                                value: 'Different parameter choices',
                            },
                            {
                                id: 'Different architectures',
                                value: 'Different architectures',
                            },
                            {
                                id: 'Different modeling methods',
                                value: 'Different modeling methods',
                            },
                            {
                                id: 'Different training sets',
                                value: 'Different training sets',
                            },
                            { id: 'Different feature sets', value: 'Different feature sets' },
                        ],
                        value: 'Models diversity',
                    },
                    {
                        id: 'Methods',
                        children: [
                            { id: 'Classifier selection', value: 'Classifier selection' },
                            { id: 'Classifier fusion', value: 'Classifier fusion' },
                        ],
                        value: 'Methods',
                    },
                    {
                        id: 'Common',
                        children: [
                            { id: 'Bagging', value: 'Bagging' },
                            { id: 'Boosting', value: 'Boosting' },
                            { id: 'AdaBoost', value: 'AdaBoost' },
                        ],
                        value: 'Common',
                    },
                ],
                value: 'Consensus',
            },
            {
                id: 'Regression',
                children: [
                    {
                        id: 'Multiple linear regression',
                        value: 'Multiple linear regression',
                    },
                    { id: 'Partial least squares', value: 'Partial least squares' },
                    {
                        id: 'Multi-layer feedforward neural network',
                        value: 'Multi-layer feedforward neural network',
                    },
                    {
                        id: 'General regression neural network',
                        value: 'General regression neural network',
                    },
                    {
                        id: 'Support vector regression',
                        value: 'Support vector regression',
                    },
                ],
                value: 'Regression',
            },
        ],
        value: 'Modeling Methods',
    };
    const themeColor = '#73B3D1';

    const config = {
        data,
        nodeCfg: {
            size: 30,
            type: 'circle',
            label: {
                style: {
                    fill: '#fff',
                },
            },
            style: {
                fill: themeColor,
                stroke: '#0E1155',
                lineWidth: 2,
                strokeOpacity: 0.45,
                shadowColor: themeColor,
                shadowBlur: 25,
            },
            nodeStateStyles: {
                hover: {
                    stroke: themeColor,
                    lineWidth: 2,
                    strokeOpacity: 1,
                },
            },
        },

        edgeCfg: {
            style: {
                stroke: themeColor,
                shadowColor: themeColor,
                shadowBlur: 20,
            },
            endArrow: {
                type: 'triangle',
                fill: themeColor,
                d: 16,
                size: 10,
            },
            edgeStateStyles: {
                hover: {
                    stroke: themeColor,
                    lineWidth: 2,
                },
            },
        },
        layout: {
            direction: 'RL',
            nodeSep: 5,
            rankSep: 100,
        },
        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],

    };

    const onReady = (graph) => {

        graph.on('node:click', (evt) => {
            debugger
            const item = evt.item._cfg;
            window.location.href = `https://vk.com/${item.id}`
            graph.setItemState(item, 'hover', true);
        });
    }

    return (
        <div style={{ width: '100%', height: '1000px' }}>
            <RadialTreeGraph {...config}
                onReady={onReady}
            />
        </div>
    )
}

export default Test2