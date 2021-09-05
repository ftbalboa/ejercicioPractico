import { render } from '@testing-library/react';
import { Article } from '../components/Article';

const dummieModel = {
    titulo: null,
    autor: null,
    img: null,
    url: null,
    bajada: null,
    volanta: null,
    marquesina: null,
    autorImg: null,
}

describe('Article', () => {
  test('Article must render title', () => {
    let testModel = {...dummieModel};
    let testTitle = "test Title"
    testModel.titulo = testTitle;
    const component = render(<Article type="one" info={testModel}/>)
    expect(component.container).toHaveTextContent(testTitle);
  })
  test('Article must have at least 3 differents types', () => {
    let testModel = dummieModel;
    let testTitle = "test Title"
    testModel.titulo = testTitle;
    const componentOne = render(<Article type="one" info={dummieModel}/>)
    const componentTwo = render(<Article type="two" info={dummieModel}/>)
    const componentThree = render(<Article type="three" info={dummieModel}/>)
    expect(componentOne.container).not.toEqual(componentTwo.container);
    expect(componentTwo.container).not.toEqual(componentThree.container);
    expect(componentThree.container).not.toEqual(componentOne.container);
  })
})

