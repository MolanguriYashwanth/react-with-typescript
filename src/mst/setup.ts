import { RootModel } from "./index";
import { onSnapshot } from 'mobx-state-tree';
//, getSnapshot, applySnapshot
export const SetupRootStore = () => {
    const rootTree = RootModel.create({
        employer: {
            id: "1",
            name: 'KFC',
            location: 'Hyderabad',
            employees: []
        }
    })
    onSnapshot(rootTree, (snapshot) => {
        console.log('snapshot', snapshot)
    })
    // const currentRootTree = getSnapshot(rootTree);
    // applySnapshot(rootTree, { ...currentRootTree, employer: { ...currentRootTree.employer, location: 'Warangal' }})
return {
    rootTree
}
}