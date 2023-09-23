import { cleanup, render } from "@testing-library/react";
import DarkModeToggle from "./DarkModeToggle";

describe('DarkModeToggle', () => {
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

    it('renders without crashing', () => {
        const { getByText } = render(<DarkModeToggle />);
    });
});