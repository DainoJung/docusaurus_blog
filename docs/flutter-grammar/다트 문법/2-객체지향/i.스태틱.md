# 스태틱

- **클래스의 인스턴스**에 귀속이 아닌 **클래스 자체**에 귀속
- 인스턴스끼리 공유해야 하는 정보에 지정

```dart
class Counter {
  static int i = 0;
  Counter() {
    i++;
    print(i);
  }
}

void main() {
  // 다른 인스턴스끼리 i 값이 공유된다.  
  Counter count1 = Counter();
  Counter count2 = Counter();
  Counter count3 = Counter();
}
```