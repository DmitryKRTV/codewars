type SortedBy<T> = {
    fieldName: keyof T
    direction: "asc" | "desc"
}

const users = [
    {id: "asd1", name: "Hola", age: 23},
    {id: "asd2", name: "Hol1", age: 22},
    {id: "asd3", name: "Hol2", age: 23},
    {id: "asd6", name: "Hol4", age: 24},
    {id: "asd4", name: "Hol3", age: 233},
    {id: "asd", name: "Hola", age: 23},
    {id: "asd3", name: "Hola", age: 23},
    {id: "asd2", name: "Hola", age: 23},
]

const getSortedItems = <T>(items: T[], ...sortBy: SortedBy<T>[]) => {
    debugger
    return [...items].sort((i1, i2) => {
        for (let sortConfig of sortBy) {
            if(i1[sortConfig.fieldName] <  i2[sortConfig.fieldName]) {
                return sortConfig.direction === "asc" ? -1 : 1
            }
            if(i1[sortConfig.fieldName] >  i2[sortConfig.fieldName]) {
                return sortConfig.direction === "asc" ? -1 : 1
            }
            return 0
        }
    })
}

console.log(getSortedItems(users, {
    fieldName: "name", direction: "asc"
}))