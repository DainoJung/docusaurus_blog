# 추상

- 인스턴스화가 필요 없는 부모 클래스를 만들 때 사용

```dart
// abstract 키워드로 추상 클래스 지정
abstract class Student {
  final String name;
  final int age;

  Student(this.name, this.age);
	
	// 추상 메서드 선언
  void sayName();
  void sayAge();
}
```

- `implements` 를 사용해 추상 클래스 구현하는 클래스

```dart
class BoyGroup implements Student {
  final String name;
  final int age;

  BoyGroup(
    this.name,
    this.age,
  );
  void sayName() {
    print('저는 남자 ${this.name}입니다.');
  }

  void sayAge() {
    print('저는 ${this.age}살 남자입니다.');
  }
}
```