// :string 을 통해 반환 값이 string 타입임을 명시
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
};

console.log(getFullName('hi', 'hello'));

// Making Object
// There is no entity definitions in Javascript
// Interface in Typescript help us to describe entities
// Bt default all properties inside interface are mandatory

// 보통 interface 쓸 때 ~Interface를 붙이는듯
interface UserInterface {
    name: string;
    age?: number;
    // ? 사용시 해당 property가 필수적이지 않음을 명시함

    // Function Object / string 반환
    getMessage(): string
};

// Interface 를 통해 만들 시 해당 interface에 있는 property를 명시하지 않을 경우 문제 발생
const user: UserInterface = {
    name: 'Lee',
    age: 28,
    getMessage() {
        return "Hello" + name;
    }
};

const user2: UserInterface = {
    name: 'Jack',
    getMessage() {
        return "Hello" + name;
    }
};

