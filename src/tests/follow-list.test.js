import FollowList from "../components/profile/follow-list";
import peopleData from "../components/profile/people-data.json";
import {act, create} from "react-test-renderer";
import {HashRouter} from "react-router-dom";

test('Follow list render', () => {
    let people;
    act(() => {
        people = create(
            <HashRouter>
                <FollowList ppl={peopleData}/>
            </HashRouter>
        )
    })
    const root = people.root;
    const personItems = root.findAllByProps({className: 'the-person'})
    expect(personItems.length).toBe(peopleData.length)
})