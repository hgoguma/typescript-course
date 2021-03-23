// :string 을 통해 반환 값이 string 타입임을 명시
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName('hi', 'hello'));
;
// Interface 를 통해 만들 시 해당 interface에 있는 property를 명시하지 않을 경우 문제 발생
var user = {
    name: 'Lee',
    age: 28,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return "Hello" + name;
    }
};
