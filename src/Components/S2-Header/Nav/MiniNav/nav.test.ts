import {useMobXStore} from "../../../../Store/store";

test("status should be changed", () => {
    const store = useMobXStore()

    store.setStatus("123")
    let index = store.nav.findIndex(n => n.id === "123")
    expect(store.nav[index].status).toBe(true)
})