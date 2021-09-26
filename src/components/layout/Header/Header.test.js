import React from 'react';
import { shallow } from 'enzyme';
import { HeaderComponent } from './Header';

describe('Component Header', () => {
  it('should render without crashing', () => {
    const categories = [
      {
        id: 1,
        name: 'test',
        title: 'Test',
        priceMin: 3,
        image: '/images/categories/plant1.jpg',
      },
      {
        id: 2,
        name: 'bbb',
        title: 'Bbb',
        priceMin: 5,
        image: '/images/categories/plant1.jpg',
      },
    ];
    const component = shallow(<HeaderComponent categories={categories} />);
    expect(component).toBeTruthy();
  });
});
