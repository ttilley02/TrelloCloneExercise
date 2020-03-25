import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List.js';

describe('<List />', () => {
    it('renders without crashing2', () => {
        const cards = [{ id: 'a', title: 'First card', content: 'lorem ipsum' }, { id: 'b', title: '2nd card', content: 'lorem ipsum' }, { id: 'c', title: '3rd card', content: 'lorem ipsum' }];

        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<List cards= {cards} header={"test123"} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const cards = [{ id: 'a', title: 'First card', content: 'lorem ipsum' }, { id: 'b', title: '2nd card', content: 'lorem ipsum' }, { id: 'c', title: '3rd card', content: 'lorem ipsum' }];

        // Render the component, as JSON
        const tree = renderer.create(<List cards= {cards} header={"test123"} />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});