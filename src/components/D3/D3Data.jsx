const MAIN_NODE_SIZE = 7;
const CHILD_NODE_SIZE = 7;
const LEAF_NODE_SIZE = 1;
const LEAF_NODE_DISTANCE = 0;
export const MANY_BODY_STRENGTH = -100;
export const nodes = [];
export const links = [];

const addMainNode = (node) => {
    node.size = MAIN_NODE_SIZE;
    node.color = node.is_checked ? 'green' : 'red';
    nodes.push(node);
};

const addChildNode = (parentNode, childNode,
                      size = CHILD_NODE_SIZE,
                      distance = 100) => {

    childNode.size = size;
    childNode.color = 'transparent';

    nodes.push(childNode);

    links.push({
        source: parentNode,
        target: childNode,
        distance,
        color: 'transparent',
    });
};


const assembleChildNode = (childNode, numLeaves = 2) => {
    for (let i = 0; i < numLeaves; i++) {
        addChildNode(
            childNode,
            { id: '' },
            LEAF_NODE_SIZE,
            LEAF_NODE_DISTANCE
        );
    }
};

const connectMainNodes = (source, target, distance = 200, color = 'grey') => {
    links.push({
        source,
        target,
        distance: distance,
        color: color,
    });
};

const treeBuilder = (rooms, root) => {
    rooms.map((room, index) => {

        let roomObj = {id: room.id, is_checked: room.is_checked, name: room.name }

        const findingObj = nodes.find(node => node.id === room.id)
        if(!findingObj) {

            addMainNode(roomObj)
            connectMainNodes(root, roomObj, 75)

            room.connected_rooms &&
            room.connected_rooms.length > 0 ?
                treeBuilder(room.connected_rooms, roomObj)
                : assembleChildNode(roomObj)


        }
        else {
            // debugger
            connectMainNodes(root, findingObj, 100)

            room.connected_rooms &&
            room.connected_rooms.length > 0 ?
                treeBuilder(room.connected_rooms, findingObj)
                : assembleChildNode(findingObj)
        }
        return 0
    }

    )

}

const example = {
    is_checked: true,
    id: '0',
    name: 'zero',
    connected_rooms: [
        {id: '1',
            name: 'un',
            is_checked: true,
            connected_rooms: [
                {id: '4',
                    name: 'quatre',
                    is_checked: false,},
                {id: '5',
                    name: 'cinq',
                    is_checked: true,},
                {id: '6',
                    name: 'six',
                    is_checked: true,},
            ],
        },

        {id: '2',
            name: 'deux',
            is_checked: false,},

        {id: '3',
            name: 'trois',
            is_checked: false,
            connected_rooms: [
                {id: '2',
                    name: 'deux',
                    is_checked: false,},
                {id: '6',
                    name: 'six',
                    is_checked: true,},
            ],
        },

        {id: '4',
            name: 'quatre',
            is_checked: false,
            connected_rooms: [
                {id: '7',
                    name: 'sept',
                    is_checked: false,},
                {id: '8',
                    name: 'huit',
                    is_checked: true,},
            ],
        },
        {id: '5',
            name: 'cinq',
            is_checked: false,
            connected_rooms: [
                {id: '9',
                    is_checked: true,
                    name: 'neuf'},
                {id: '10',
                    is_checked: true,
                    name: 'dix'},
            ],},
        {id: '6',
            name: 'six',
            is_checked: true,
            connected_rooms: [
                {id: '11',
                    name: 'onze',
                    is_checked: true,},
                {id: '12',
                    name: 'douze',
                    is_checked: false,},
            ],},
    ],
}

const mainNode = { id: example.id, is_checked: example.is_checked, name: example.name }
addMainNode(mainNode)
example.connected_rooms &&
example.connected_rooms.length > 0 &&
treeBuilder(example.connected_rooms, nodes[0])

console.log('nodes', nodes)

console.log('links', links)

// const artsWeb = { id: 'Arts Web' };
// addMainNode(artsWeb);
// assembleChildNode(artsWeb, 'Community Vision');
// assembleChildNode(artsWeb, 'Silicon Valley Creates');

// const socialImpactCommons = { id: 'Social Impact Commons' };
// addMainNode(socialImpactCommons);
// assembleChildNode(socialImpactCommons, 'Theatre Bay Area');
// assembleChildNode(
//   socialImpactCommons,
//   'EastSide Arts Alliance'
// );
// assembleChildNode(socialImpactCommons, 'Local Color');


// const cast = { id: 'Community Arts Stabilization Trust' };
// addMainNode(cast);
// assembleChildNode(cast, 'CounterPulse');
// assembleChildNode(cast, 'Luggage Store Gallery');
// assembleChildNode(cast, 'Performing Arts Workshop');
// assembleChildNode(cast, '447 Minna St.');
// assembleChildNode(cast, 'Keeping Space Oakland');

// const ambitioUS = { id: 'AmbitioUS' };
// addMainNode(ambitioUS);
// assembleChildNode(ambitioUS, 'EBPREC', 0);
// assembleChildNode(ambitioUS, 'SELC', 0);
// assembleChildNode(ambitioUS, 'The Runway Project', 0);
// assembleChildNode(ambitioUS, 'Common Future', 0);
// assembleChildNode(ambitioUS, 'Freelancers Union', 0);
// assembleChildNode(
//   ambitioUS,
//   'US Federation of Worker Cooperatives',
//   0
// );

// connectMainNodes(artsWeb, socialImpactCommons);
// connectMainNodes(artsWeb, cast);
// connectMainNodes(socialImpactCommons, cast);
// connectMainNodes(ambitioUS, cast);
// connectMainNodes(ambitioUS, socialImpactCommons);
// connectMainNodes(ambitioUS, artsWeb);
