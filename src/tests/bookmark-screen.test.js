import React from "react";
import {act, create} from "react-test-renderer";
import bookmarkedTuits from "../components/bookmarks/my-bookmarks"
import {render, screen} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import Bookmarks from "../components/bookmarks";
import MyBookmarks from "../components/bookmarks/my-bookmarks";


const MOCKED_TUITS = [
    {tuit:"bob's tuit", postBy: "bob", _id: "345",  stats:{likes: 34, dislikes: 43, bookmarks: 23}}
]

console.error = () => {};

test('renders bookmarks tab on bookmarks', () => {
    let bookmark;
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
        bookmark = create(
        bookmarks = create(
            <MyBookmarks
                tuits = {MOCKED_TUITS}/>
                Tuits={MOCKED_TUITS}/>
        )
    });
    })

    const root = bookmark.root;
    const ttrTuits = root.findByProps({className:"ttr-tuit"});
    expect(ttrTuits.length).toEqual(bookmarkedTuits.length);
    ttrTuits.forEach((ttrTuits, ndx) => {
        expect(ttrTuits.props.children).toBe(bookmarkedTuits[ndx].tuit);
    const root = bookmarks.root
    // eslint-disable-next-line testing-library/await-async-query
    const ttrTuits = root.findAllByProps({className: 'ttr-tuit'})
    ttrTuits.forEach((ttrTuit, ndx) => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(ttrTuit.props.children[0]).toBe(MOCKED_TUITS[ndx].tuit)
    })
}) 
