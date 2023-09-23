import { cleanup, render } from "@testing-library/react";
import Header from './Header';

describe('PortfolioHeader', () => {
  beforeEach(() => {
    // fix for jest not recognizing matchMedia: 
    // https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(cleanup);

  it('renders without crashing. Home is selected by default', () => {
    const {getByText } = render(<Header />);
    const node = getByText('Home'); // spanElement has the Text, but the className is added to the parent (div) element
    expect(node.parentElement.classList.contains('selected-header-option')).toBe(true);
  });

  it('renders in mobile view', () => {
    // TODO: I see hamburger button
  });
});
