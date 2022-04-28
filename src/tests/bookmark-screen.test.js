import React from "react";
import {act, create} from "react-test-renderer";
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Bookmarks from "../components/bookmarks";
import MyBookmarks from "../components/bookmarks/my-bookmarks";


const MOCKED_TUITS = [
    {tuit:"alice's tuit", postBy:"alice", _id:"123", stats:{likes: 12, dislikes: 21, bookmarks: 22}},
    {tuit:"bob's tuit", postBy: "bob", _id: "345",  stats:{likes: 34, dislikes: 43, bookmarks: 23}}
]

console.error = () => {
};
test('render bookmark screen', async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => render(
        <HashRouter>
            <Bookmarks/>
        </HashRouter>
    ));

    const bookmarksTab = screen.getByText(/Bookmark/i);
    expect(bookmarksTab).toBeInTheDocument();
})


test('bookmarked tuit renders under bookmark screen', async () => {
    let bookmarks
    act(() => {
        bookmarks = create(
            <MyBookmarks
                Tuits={MOCKED_TUITS}/>
        )
    })

    const root = bookmarks.root
    // eslint-disable-next-line testing-library/await-async-query
    const ttrTuits = root.findAllByProps({className: 'ttr-tuit'})
    ttrTuits.forEach((ttrTuit, ndx) => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(ttrTuit.props.children[0]).toBe(MOCKED_TUITS[ndx].tuit)
    })
})