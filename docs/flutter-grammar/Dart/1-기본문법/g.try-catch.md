# try-catch

- 특정 코드의 실행을 시도(try)해보고 문제가 있다면 에러를 잡으라(catch)는 뜻
- try 로직에서 에러가 생기면 이후 로직은 실행되지 않고 catch 로직으로 넘어감

## 정상

- catch 로직은 실행이 안되고 try 로직만 실행

```dart
void main() {
  try {
    final String name = '다이노';
    print(name);
  } catch (e) {
    print(e);
  }
}
```

## 에러

- throw 키워드를 통해 고의로 에러 발생
- try 로직의 print()가 동작하지 않고 catch 로직 작동

```dart
void main() {
  try {
    final String name = '다이노';
    throw Exception('버그 발생!');
    print(name);
  } catch (e) {
    print(e);
  }
}

```