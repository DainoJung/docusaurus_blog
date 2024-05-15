# 제네릭

- 클래스나 함수의 정의를 선언할 때가 아니라 인스턴스화하거나 실행할 때로 미룬다.
- 특정 변수의 타입을 하나의 타입으로 제한하고 싶지 않을 때 사용
- Map, List, Set 등에서 사용한 `<>` 사이에 값이 제네릭 문자이다.

```dart
// 인스턴스화할 때 입력받을 타입을 T로 지정
class Cache<T> {
  // data의 타입을 추후 입력될 T 타입으로 지정
  final T data;
  Cache({
    required this.data,
  });
}

void main() {
  // 타입을 지정할 수도 있고, 지정하지 않을시 자동으로 유추한다.
  final cache = Cache<List<int>>(data: [1, 2, 3]);
  print(cache.data);
}
```

## 제네릭 문자

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/b1f9e3cc-b3aa-461f-9944-840ac2df7f28" width="600"/></center>