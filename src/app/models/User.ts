export interface User {
    person: Person;
    postName: string;
    priority: string;
    budget: number;
}

interface Person {
    color: string;
    icon: string;
    name: string;
    designation: string;
}