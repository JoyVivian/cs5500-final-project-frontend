import {act, create} from 'react-test-renderer';
import TuitStats from "../components/tuits/tuit-stats";

test('bookmark stats render correctly', () => {
    let stats = {
        likes:123,
        dislikes:321,
        replies: 234,
        retuits: 345,
        bookmarks: 543
    }

    const bookmarkTuit = () => {
        act(() => {
            stats.bookmarks++;
            tuitStats.update(
                <TuitStats
                tuit={{stats: stats}}
                bookmarkTuit={() => {}}
            />)
        })
    }

    let tuitStats
    act(() => {
        tuitStats = create(
            <TuitStats
                bookmarkTuit={bookmarkTuit}
                tuit={{stats: stats}}/>
        );
    })

    const root = tuitStats.root;
    // eslint-disable-next-line testing-library/await-async-query
    const bookmarksCounter = root.findByProps({className:'ttr-stats-bookmarks'})
    // eslint-disable-next-line testing-library/await-async-query
    const bookmarkTuitButton = root.findByProps({className:'ttr-bookmarks-tuit-click'})
    // eslint-disable-next-line testing-library/await-async-query
    const retuitsCounter = root.findByProps({className: 'ttr-stats-retuits'})
    // eslint-disable-next-line testing-library/await-async-query
    const repliesCounter = root.findByProps({className: 'ttr-stats-replies'})
    // eslint-disable-next-line testing-library/await-async-query
    const likesCounter = root.findByProps({className: 'ttr-stats-likes'})
    // eslint-disable-next-line testing-library/await-async-query
    const dislikesCounter = root.findByProps({className: 'ttr-stats-dislikes'})

    let bookmarksText = bookmarksCounter.children[0];
    const repliesText = repliesCounter.children[0];
    const retuitsText = retuitsCounter.children[0];
    const likesText = likesCounter.children[0];
    const dislikesText = dislikesCounter.children[0];

    expect(bookmarksText).toBe('543');
    expect(repliesText).toBe('234');
    expect(retuitsText).toBe('345');
    expect(likesText).toBe('123');
    expect(dislikesText).toBe('321');

    act(() => {bookmarkTuitButton.props.onClick()})
    bookmarksText = bookmarksCounter.children[0];
    expect(bookmarksText).toBe('544');

});