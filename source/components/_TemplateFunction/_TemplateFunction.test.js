import React from 'react';
import renderer from 'react-test-renderer';

test('Component _TemplateFunction tested correct', () => {
    const component = renderer.create(
        <div>lol</div>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});