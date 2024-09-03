export  class Items {
    itemName: string
    description: string
    grade: string

    constructor(itemName: string,description: string, grade: string) {
        this.itemName = itemName
        this.description = description
        this.grade = grade
    }
}