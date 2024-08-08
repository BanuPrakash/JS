import { fireEvent, render, screen } from '@testing-library/react';
import User from './User';


describe("tesing <User / > using mock ", () => {

    let callback = jest.fn(); // mock callback

    let mockUser = {
        id: 21,
        firstName: 'Harry',
        lastName: 'Potter'
    }

    it("render <User />", () => {
        render(<User
            delEvent={callback}
            user={mockUser}
            key={mockUser.id} />);

        let elem = screen.getByText(/Harry/i);
        //screen.debug();
        expect(elem).toBeInTheDocument();
    })

    it("render <User /> deleteEvent", () => {
        render(<User
            delEvent={callback}
            user={mockUser}
            key={mockUser.id} />);
        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(21);
    });
});