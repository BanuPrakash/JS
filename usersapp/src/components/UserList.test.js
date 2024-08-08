import { fireEvent, render, screen } from '@testing-library/react';
import UserList from './UserList';

describe("testing <UserList />", () => {
    it("renders users", () => {
    //     render(<UserList />);
    //    // screen.debug();
    //    let btns = screen.getAllByRole('button');
    //    expect(btns.length).toBe(6);

    let {container} = render(<UserList />);
    // container --> document
    let btns = container.querySelectorAll('button');
    expect(btns.length).toBe(6);
    });

    it("delete user", () => {
        render(<UserList />);
       // screen.debug();
       let btns = screen.getAllByRole('button');
       fireEvent.click(btns[3]);
       btns = screen.getAllByRole('button');
       expect(btns.length).toBe(5);
    });

    it("filter customers", () => {
        render(<UserList />);
        let txtBox = screen.getByPlaceholderText('search by name');
        fireEvent.change(txtBox, {"target": {"value": "Geller"}})
        let btns = screen.getAllByRole('button');
        screen.debug();
        expect(btns.length).toBe(2);
    })
});