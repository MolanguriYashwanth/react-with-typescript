import { types, Instance, applySnapshot, flow, onSnapshot } from "mobx-state-tree";
import { v4 as uuidv4 } from 'uuid';
import api from 'axios';
const EmployeeModel = types.model('EMployee', {
    id: types.identifier,
    name: types.string,
    hoursWorked: types.number
})
    .actions(self => {
        function editEmployee(name: string, hoursWorked: number) {
            applySnapshot(
                self, {
                ...self,
                name,
                hoursWorked
            })
        }
        return { editEmployee }
    }
    )
const EmployerModel = types.model('Employer', {
    id: types.identifier,
    name: types.string,
    location: types.string,
    employees: types.array(EmployeeModel)
})
    .actions(self => {
        function NewEmployee(name: string, hoursWorked: number) {
            const id = uuidv4();
            applySnapshot(
                self, {
                ...self,
                employees:
                    [
                        { id, name, hoursWorked },
                        ...self.employees]
            })
        }
        const save = flow(function* save(snapshot: any) {
            try {
                const response = yield api.post('/employers', { snapshot });
                console.log('response: ', response)
            } catch (e) {
                console.log('e', e)
            }

        })
        function afterCreate() {
            onSnapshot(self, (snapshot: any) => save(snapshot))
        }
        return { NewEmployee, afterCreate, save }
    }
    )
    .views(self => ({
        get numOfEmployees() {
            return self.employees.length;
        },
        filtered_employees(searchString: string) {
            return self.employees.filter((employee) => employee.name.includes(searchString))
        }
    }))
const RootModel = types.model('Root', {
    employer: EmployerModel
})

export { RootModel }

export type Root = Instance<typeof RootModel>
export type Employer = Instance<typeof EmployerModel>
export type Employee = Instance<typeof EmployeeModel>