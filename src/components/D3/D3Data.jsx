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

const connectMainNodes = (source, target, distance = 75, color = '#4C514A') => {
    links.push({
        source,
        target,
        distance: distance,
        color: color,
    });
};

const treeBuilder = (roomIds, root) => {
    roomIds.map((roomId) => {
        const findingObj = nodes.find(node => node.id === roomId)
        const connected_rooms = findingObj.connected_rooms

        if(roomIds.length <= 1) {
            connectMainNodes(root, findingObj, 75)
            assembleChildNode(root)
        }
        else if (connected_rooms.length <= 1) {
            connectMainNodes(root, findingObj, 75)
        }
        else if (roomIds.length <= 3) {
            connectMainNodes(root, findingObj, 150)
        }
        else {
            connectMainNodes(root, findingObj, 300)
        }
        return 0
    })

}

const example =
    [
        {
            id: 1,
            name: "Комната 1",
            connected_rooms: [2,5],
            is_checked: true,
        },
        {
            id: 2,
            name: "Комната 2",
            connected_rooms: [1,3,4,7],
            is_checked: false,
        },
        {
            id: 3,
            name: "Комната 3",
            connected_rooms: [2,4,7],
            is_checked: false,
        },
        {
            id: 4,
            name: "Комната 4",
            connected_rooms: [2,3,5,6],
            is_checked: true,
        },
        {
            id: 5,
            name: "Комната 5",
            connected_rooms: [1,2,3,4,6],
            is_checked: true,
        },
        {
            id: 6,
            name: "Комната 6",
            connected_rooms: [2,3,4,5],
            is_checked: true,
        },
        {
            id: 7,
            name: "Комната 7",
            connected_rooms: [2,3],
            is_checked: true,
        },
    ]

// const mainNode = { id: example.id, is_checked: example.is_checked, name: example.name }

example && example.length > 0 &&
example.map((room, index) => addMainNode(room))

example.map((room, index) => treeBuilder(room.connected_rooms, room))

// example.connected_rooms &&
// example.connected_rooms.length > 0 &&
// treeBuilder(example.connected_rooms, nodes[0])

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
