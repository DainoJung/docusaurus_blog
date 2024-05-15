# 상속

- 어떤 클래스의 기능을 다른 클래스가 사용할 수 있게 하는 기법
- extends 키워드를 사용해 상속 가능
- 부모 클래스 - 기능을 물려주는 클래스
- 자식 클래스 - 물려받는 클래스
- super는 부모클래스를 지칭

```dart
class Student {
  final String name;
  final int age;

  Student(this.name, this.age);

  void sayName() {
    print('안녕하세요. 저는 ${this.name}입니다. 나이는 ${this.age}입니다.');
  }
}
```

```dart
class Class extends Student {
  // 상속받은 생성자
  Class(String name, int age) : super(name, age); 

  // 상속받지 않은 기능
  void sayMale() {
    print('저는 남자입니다.');
  }
}
```

```dart
void main() {
  Class daino = Class('다이노', 23);

  daino.sayName(); // 부모한테 물려받은 메서드
  daino.sayMale(); // 자식이 새로 추가한 메서드
}
```