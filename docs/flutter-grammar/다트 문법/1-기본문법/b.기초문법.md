# 기초 문법

## 메인 함수

- 다트는 프로그램 시작점인 엔트리 함수 기호로 `main()` 을 사용합니다.

```dart
void main(){

}
```

- void는 아무것도 반환하지 않는다는 뜻
- main 뒤에 있는 괄호 () 안에 입력받을 매개변수를 지정할 수 있다.
    - 괄호 안이 비어 있으면 아무런 매개변수도 받지 않는 다는 뜻이다.

## 주석

- 주석은 프로그램을 실행했을 때 코드로 인식하지 않는 부분

```dart
void main(){
	// 한줄 주석
	
	/*
	여러줄
	주석
	*/
}
```

## print() 함수

- 문자열을 콘솔에 출력하는 함수

```dart
void main(){
	print('Hellow Dart');
}
```

## var

- 변수는 `var 변수명 = 값;` 형식으로 선언
- 변수에 값이 들어가면 자동으로 타입을 추론하는 타입 추론 기능이 제공 되므로 명시적으로 타입을 선언하지 않아도 됨
- 실제 코드가 컴파일 될 때는 추론된 타입으로 var이 치환됨

```dart
void main() {
  var name = '다인';
  print(name);
  
  // 변수값 변경 가능
  name = '다트';
  print(name);
  
  // 변수명 중복은 불가능
  // var name = '다솔' X
}
```

## dynamic

- var 타입은 변수의 값을 사용해 타입을 유추하는 키워드
    - 타입을 한 번 유추하면 추론된 타입이 고정
    - 고정된 변수 타입과 다른 변수 타입의 값을 같은 변수에 다시 저장하면 에러
- dynamic을 사용하면 변수의 타입이 고정되지 않아 다른 타입의 값을 저장할 수 있음

```dart
void main() {
  dynamic name = '다인';
  name = 1;
}
```

## final/const

- final과 const 키워드는 변수의 값을 처음 선언 후 변경할 수 없다.

```dart
void main() {
	// 오류
  final String name = '다인';
  name = '다트';
  
  // 오류
  const String name2 = 'YG';
  name2 = '빅뱅';
}
```

- final은 런타임, const는 빌드타임 상수이다.
- 코드를 실행하지 않은 상태에서 값이 확정되면 const를, 실행될 때 확정되면 finald을 사용

```dart
void main() {
  final DateTime now = DateTime.now();
  print(now);
  
  //오류
  const DateTime now2 = DateTime.now();
  print(now2);
}
```

## 변수 타입

- var을 사용하면 자동으로 변수 타입을 유추할 수 있지만, 직접 변수 타입을 명시해주면 코드가 더욱 직관적이어서 유지보수가 편하다.

```dart
void main() {
  // String - 문자열
  String name = '다이노';
  
  // int - 정수
  int age = 24;
  
  // double - 실수
  double tall = 168.1;
  
  // bool - 불리언 (true/false)
  bool isTrue = true;
}

```