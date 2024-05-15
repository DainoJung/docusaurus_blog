# Future

- 미래에 받아올 값
- 제네릭으로 타입 지정 가능

```dart
void addNumbers(int number1, int number2) {
  print('$number1 + $number2 계산시작 !');

  Future.delayed(Duration(seconds: 3), () {
    print('$number1 + $number2 = ${number1 + number2}');
  });
  print('$number1 + $number2 코드 실행 끝');
}

void main() {
  addNumbers(1, 1);
  addNumbers(2, 2);
}
```

- `Future.delayed` 는 비동기 연산이므로 3초를 기다리지 않고 바로 다음 코드를 실행한다

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/3fa0e028-96a5-41ef-ba58-04dcd37212cb" width="600"/></center>