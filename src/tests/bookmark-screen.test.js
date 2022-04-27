import React from "react";
import {act, create} from "react-test-renderer";
import bookmarkedTuits from "../components/bookmarks/my-bookmarks"
import MyBookmarks from "../components/bookmarks/my-bookmarks";


const MOCKED_TUITS = [
    {tuit:"alice's tuit", postBy:"alice", _id:"123", stats:{likes: 12, dislikes: 21, bookmarks: 22}},
    {tuit:"bob's tuit", postBy: "bob", _id: "345",  stats:{likes: 34, dislikes: 43, bookmarks: 23}}
]

console.error = () => {};

test('renders bookmarks tab on bookmarks', () => {
    let bookmark;
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
        bookmark = create(
            <MyBookmarks
                tuits = {MOCKED_TUITS}/>
        )
    });

    const root = bookmark.root;
    const ttrTuits = root.findByProps({className:"ttr-tuit"});
    expect(ttrTuits.length).toEqual(bookmarkedTuits.length);
    ttrTuits.forEach((ttrTuits, ndx) => {
        expect(ttrTuits.props.children).toBe(bookmarkedTuits[ndx].tuit);
    })
})