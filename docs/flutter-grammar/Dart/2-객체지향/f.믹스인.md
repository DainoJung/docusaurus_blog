# Mixin

- 특정 클래스에 원하는 기능들만 골라넣을 수 있는 기능
- 특정 클래스를 지정해서 속성들을 정의할 수 있고, 지정한 클래스를 상속하는 클래스에서도 사용 가능
- 한 개의 클래스에 여러 개의 믹스인을 적용할 수도 있다.

```dart
mixin StudentStudyMixin on Student {
  void study() {
    print('${this.name}가 공부를 합니다.');
  }
}

// 믹스인 적용시 with 키워드 사용
class BoyGroup extends Student with StudentStudyMixin {
  BoyGroup(
    super.name,
    super.age,
  );
  void sayMale() {
    print('저는 남학생입니다.');
  }
}

void main() {
  BoyGroup boys = BoyGroup('다이노', 23);
  
  // 믹스인에 정의된 study() 함수 사용 가능
  boys.study();
}
```