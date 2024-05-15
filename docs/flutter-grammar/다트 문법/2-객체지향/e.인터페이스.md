# Interface

- 상속은 공유되는 기능을 상속 받는 개념이지만, 인터페이스는 공통으로 필요한 기능을 정의만 해두는 역활
- 상속 받을 때는 부모 클래스의 기능을 재정의 할 필요가 없지만, 인터페이스는 반드시 모든 기능을 다시 정의해줘야 한다.
- 재정의할 필요가 있는 기능을 정의하는 용도로 쓰여, 실수로 빼먹는 일을 방지한다.
- implements 키워드를 사용

```dart
class BoyClass implements Student {
  final String name;
  final int age;
  BoyClass(this.name, this.age);

  void sayName() {
    print('안녕하세요. 저는 남자 ${this.name}입니다.');
  }
}
```