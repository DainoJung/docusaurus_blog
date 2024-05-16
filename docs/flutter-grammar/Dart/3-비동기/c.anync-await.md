# async와 await

- 코드가 작성된 순서로 실행되지 않으면 헷갈릴 수도 있음
- async와 await 키워드로 코드 가독성을 유지
- async 키워드로 비동기 함수를 지정해
- await를 통해 작업이 끝나기를 기다려 준다.
- async 가 지정된 함수 안에서만 await 키워드 사용 가능

```dart
Future<void> addNumbers(int number1, int number2) async {
  print('$number1 + $number2 계산시작 !');

  await Future.delayed(Duration(seconds: 3), () {
    print('$number1 + $number2 = ${number1 + number2}');
  });
  print('$number1 + $number2 코드 실행 끝');
}
```

## 결과값 반환받기

- Future 함수의 결과 값도 await를 사용하여 일반 함수처럼 변수에 값을 할당 가능하다
- await를 사용하지 않으면 값이 할당 안됨!

```dart
Future<int> addNumbers(int number1, int number2) async {
  print('$number1 + $number2 계산시작 !');

  await Future.delayed(Duration(seconds: 3), () {
    print('$number1 + $number2 = ${number1 + number2}');
  });
  print('$number1 + $number2 코드 실행 끝');
  return number1 + number2;
}

void main() async {
	// 일반함수와 동일하게 반환값 받기 가능
  final result1 = await addNumbers(1, 1);
  print(result1);
  
  final result2 = await addNumbers(2, 2);
  print(result2);
}
```