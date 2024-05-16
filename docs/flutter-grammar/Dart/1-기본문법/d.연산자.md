# 연산자

## 기본 수치 연산자

```dart
void main() {
  double number = 2;
  print(number + 2);
  print(number - 2);
  print(number * 2);
  print(number / 2);
  print(number % 3);
  
  // 단항 연산
  number++;
  number--;
  number += 2;
  number -= 2;
  number *= 2;
  number /= 2;
}
```

## null 관련 연산자

- ? 을 통해 null 가능 표시

```dart
void main() {
  // ?를 명시하여 null 값을 가질 수 있다.
  double? number1 = 1; 
  
  // ?를 명시하지 않아 에러 발생
  double number2 = null;
}
```

- ?? 를 사용해 null일때 값 저장 가능

```dart
void main() {
  double? number; // 자동으로 null값 지정
  
  number ??= 3; // ??을 사용하면 기존 값이 null일때 저장
  
  number ??= 4; // null이 아니므로 3이 유지
}
```

## 값 비교 연산자

- 정수 크기를 비교하는 연산자

## 타입 비교 연산자

- is 키워드를 사용해 변수의 타입을 비교

## 논리 연산자

- and와 or을 의미하는 연산자
- and - `&&`
- or - `||`