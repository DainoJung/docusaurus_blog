# 함수와 람다

## 함수의 일반적인 특징

- 함수를 사용하면 한 번만 작성하고 여러 곳에서 재활용 가능
- 반환할 값이 없을 때 void 키워드 사용

## 함수에서 매개변수를 지정하는 방법

### 순서가 고정된 매개변수(포지셔널 파라미터)

- 입력한 순서대로 매개변수에 값이 지정

```dart
int add(int a, int b) {
  return a + b;
}

void main() {
  print(add(1, 2));
}
```

- `[]` 기호를 사용해 기본값 지정 가능

```dart
int add(int a,[int b = 2]) {
  return a + b;
}

void main() {
  print(add(1));
}
```

### 이름이 있는 매개변수(네임드 파라미터)

- 순서와 관계없이 지정하고 싶은 매개변수의 이름을 이용해 값을 입력

```dart
int add({required a, required int b}) {
  return a + b;
}

void main() {
  print(add(a: 1, b: 2));
}
```

- required 생략후 기본값 지정 가능

```dart
int add({required a, int b = 2}) {
  return a + b;
}

void main() {
  print(add(a: 1));
}
```

---

- 포지셔널 파라미터와 네임드 파라미터를 섞어서 사용 가능
- 섞어 사용시 포지셔널 파라미터가 네임드 파라미터보다 상단에 위치 해야함

```dart
int add(
  int a, {
  required int b,
  int c = 4,
}) {
  return a + b;
}

void main() {
  print(add(1, b: 2));
}
```

## 익명 함수와 람다 함수

### 공통점

- 함수 이름이 없다
- 일회성으로만 사용

### 익명 함수

```dart
(매개변수){
	함수 바디
}
```

### 람다 함수

- 하나의 스테이트먼트만 다루기 때문에 코드가 간결
- 리스트의 map(), reduce(), fold() 함수 등에서 주로 사용

```dart
(매개변수) => 하나의 스테이트먼트
```

## typedef와 함수

### typedef

- 함수의 시그니처를 정의하는 값
    - 시그니처 == 반환값 타입, 매개변수 개수와 타입등 함수
    - 즉, 선언부를 정의하는 키워드
- 함수가 무슨 동작을 하는지에 대한 정의가 없다.

```dart
typedef Operation = void Function(int x, int y);

void add(int x, int y) {
  print(x + y);
}

void main() {
  // typedef는 일반적인 변수의 type처럼 사용 가능
  Operation oper = add;
  oper(1, 2);
}
```

- 다트에서 함수는 일급 객체이므로 값처럼 사용 가능

```dart
typedef Operation = void Function(int x, int y);

void add(int x, int y) {
  print(x + y);
}

void calculate(int x, int y, Operation oper) {
  oper(x, y);
}

void main() {
  calculate(1, 2, add);
}
```