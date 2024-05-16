# Override

- 부모 클래스 또는 인터페이스에 정의된 메서드를 재정의할 때 사용
- override 키워드 생략 가능
    - but, 직접 명명하는게 유지보수에 유리

```dart
class Class extends Student {
  // super 키워드를 사용
  Class(super.name, super.age);

  // 오버라이드
  @override
  void sayName() {
    print('안녕하세요. 저는 개발자 ${this.name}입니다.');
  }
}

void main() {
  Class daino = Class('다이노', 23);

  daino.sayName(); // 부모한테 물려받은 메서드
}
```