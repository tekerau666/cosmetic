import {Button} from "./Button";
import {render, screen} from "@testing-library/react";


describe('Button', () => {
    test('should render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
})