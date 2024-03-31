# Dart 문법

# dart란?

플러터가 사용하는 프로그래밍 언어⭐️

- 모든 부분에서 컴파일이 가능하다.
- null saftey → 프로그래밍을 안전하게 해준다.
- 빠른 피드백, 빠른 컴파일
- flutter extension
- 객체 지향 언어 - **프로그램을 다수의 객체로 만들고, 이들끼리 서로 상호작용하도록 만드는 프로그래밍 언어**

### 들어가기 앞서

- 모든 코드는 main함수에 들어가야 한다.
- 다트는 세미콜론 여/부가 중요하다.

## 변수

1. var 사용

```dart
var name = '다인';
```

1. 변수의 타입 지정

```dart
string name = '다인';
```

- 데이터 타입을 유지한다면 변경 가능

### dynamic

→ 여러가지 타입을 가질 수 있는 변수에 쓰는 키워드

```dart
var name;
dynamic name;
```

- 정말 필요할때만 사용, 피하는게 좋음

### null safety

→ null값으로 일어나는 오류 방지

```dart
String? nico = 'nico';      // ?값을 추가해야만 null 이용 가능
nico = null;

nico?.isNotEmpty;           // nico가 null이 아니면 isNotEmpty 속성 요청

if (nico != null) {
	nico.isNotEmpty;
}
```

### 정의된 변수의 수정 제어

```dart
final name = 'nico';
```

### late

→ 초기 데이터 없이 변수를 선언할 수 있게 해줌

```dart
late final String name;      // 데이터 없는 변수 선언
print(name);                 // 데이터가 없으므로 오류 
name = 'nico';               // 데이터 할당
print(name);                 // nico 출력
```

### const

→ 값을 알면 const 모르면 var, final

- compile-time constant
- 컴파일 할 때 알고 있는 값에 사용

### num

- int와 double 둘다 사용 가능

### List

```dart
var numbers = [1, 2, 3, 4];

List<int> numbers = [1, 2, 3, 4];
```

**collection if**

```dart
var giveMeFive = true;
var numbers = [1, 2, 3, 4, if (giveMeFive) 5];
```

**collection for**

```dart
var oldFriends = ['nico', 'lynn'];
var newFriends = [
	 'lewis',
	 'ralph',
	 'darren',
	 for (var friend in oldFriends) "⭐️ $friend",
	 ];

print(newFriends);
// [lewis, ralph, darren, ⭐️nico, ⭐️lynn]
```

### String Interpolation

- 단순 변수 사용

```dart
var name = 'nico';
var greeting = 'Hello everyone, my name is $name, nice to meet you!';

print(greeting);     
// Hello everyone, my name is **nico**, nice to meet you!
```

- 변수 계산

```dart
var age = 10;
var greeting = "I'm ${age + 2}";

print(greeting);      // I'm 12
```

### Set

- 요소의 중복이 불가능하다.

```dart
Set<int> numbers = {1, 2, 3, 4};
numbers.add(1);
numbers.add(1);
numbers.add(1);
print(numbers);      // 1, 2, 3, 4
```

- { } 사용시 set, [ ] 사용시 list

### Maps

- key 값과 value 값을 가짐
- swift의 Dictionary와 같다

```dart
var player = {
	'name': 'nico',
	'xp': '19.99',
	'superpower': 'false',
};
```

### Function

```dart
String sayHello(String name) {
	return "Hello $name nice to meet you";
}

String sayHello(String name) => "Hello $name nice to meet you";
// 간단한 return 값에 사용

void main() {
	print(sayHello('nico'));     // Hello nico nice to meet you
}
```

### named argument

- function에 여러 함수를 사용하는것은 불편

![스크린샷 2023-03-22 오전 9.41.00.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/70cd6072-e391-4581-bef8-e24d16013203)

- named argument 사용시 { } 추가
- 순서와 상관 없이 구분해서 사용 가능

![스크린샷 2023-03-22 오전 9.42.36.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/2b3d9a24-b064-4883-91f4-c12efd1a4e9a)

**파나메타 값이 null 값일 경우를 방지**

- default value 지정

![스크린샷 2023-03-22 오전 9.47.12.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/6ae0a640-bd9f-434a-93a4-8176daa7cd27)

- required modifier 이용 - 필수 값 요구
    
    ![스크린샷 2023-03-22 오전 9.51.07.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/ccc85bfb-b24b-4825-a578-8cf1d1abdfcf)
    
    ![스크린샷 2023-03-22 오후 11.52.46.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/ff4bd0ea-6dd8-437d-9139-f853057c99bf)
    

### optional positional parameter

- 파나메타 값이 null일 수도 있다. 값을 정의 안하면 defalt 값 제공

![스크린샷 2023-03-23 오전 12.14.18.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/3336a416-fe35-47a0-9db9-f43d83387fce)

### QQ Operator

- 옵셔널 파나메타 사용
    
    ![스크린샷 2023-03-23 오전 12.18.50.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/4e791188-0712-438a-a6dd-e5ccc5a62a5c)
    

- ? 사용
    
    ![함수의 값이 null이 아니면 앞에 문장 실행 null이면 뒤에 문장 실행](https://github.com/DainoJung/docusaurus_blog/assets/117745618/ce102462-0c5d-420f-96f1-72357d2b4cc5)
    
    함수의 값이 null이 아니면 앞에 문장 실행 null이면 뒤에 문장 실행
    
- ?? 사용
    
    ![스크린샷 2023-03-23 오전 8.48.20.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/9cb852e3-cbb5-4685-8dfb-e2ec9576d48e)
    
- QQ equals
    
    ![변수 안에 값이 null이면 값을 할당](https://github.com/DainoJung/docusaurus_blog/assets/117745618/1b662195-9c16-472e-966b-0f21aadc6834)
    
    변수 안에 값이 null이면 값을 할당
    

### Typedef

- 자료형을 내가 원하는 이름으로 변경 가능

![스크린샷 2023-03-23 오전 9.03.36.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/5be9cbe7-87b4-4469-b14a-2d90e0a4e7ed)

## class⭐️⭐️⭐️

- 클래스 안에서는 타입을 명시해야 한다.
    
    ![스크린샷 2023-03-23 오전 9.10.37.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/d5d31068-82b2-4f29-856a-fc5872b3281c)
    
- 클래스 상속 받으면 내부 값을 변경 or 사용 가능
    
    ![스크린샷 2023-03-23 오전 9.11.18.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/2b64c74c-6f92-4f4c-89d5-11b0cbb10490)
    
- final class로 선언시 내부 함수 변경 불가
    
    ![스크린샷 2023-03-23 오전 9.12.20.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/1de594aa-fb4c-4909-bcf4-887e0ab6a280)
    

- 함수 안에 같은 이름의 변수가 있을때 classd의 변수를 사용시 this.을 사용
    
    ![class의 변수 사용시 {$this.name} 사용](https://github.com/DainoJung/docusaurus_blog/assets/117745618/ed96f3c8-e2d9-4cce-83d4-70d8eebaaa46)
    
    class의 변수 사용시 `{$this.name}` 사용
    

### Constructors

- 생성자 함수 설정
- late - 변수의 값을 나중에 받는다.

![스크린샷 2023-03-23 오전 9.19.14.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/7ac92373-529b-47a2-b0b4-702b55a981a5)

**간단한 방법**

![스크린샷 2023-03-23 오전 9.21.42.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/2dab35bc-4ff5-4afb-bf75-0ac5abb6eece)

### **Named Constructor Parameters**

- class안에 변수가 많아지면 헷갈릴 수 있다.

![스크린샷 2023-03-23 오전 9.27.37.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/681cc665-aa31-4a70-98f4-7c8309fd6b08)

![스크린샷 2023-03-23 오전 9.28.17.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/cff1a7bc-3954-4fb5-b4f6-14576a0ef85b)

### **Named Constructors ⭐️**

: 을 사용함으로 player 객체를 초기화 할 수 있다.

- 둘 중 편한거 선택 - positional 형식 추천

#### named 형식

![named 형식](https://github.com/DainoJung/docusaurus_blog/assets/117745618/13fc5f6f-9c56-4083-8836-dd7f37e694f3)

#### positional 형식

![positional 형식](https://github.com/DainoJung/docusaurus_blog/assets/117745618/9c8070ac-fcec-453f-a114-fbbe2506cb3b)

<br/>

![스크린샷 2023-03-23 오전 9.39.53.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/1adf89e9-cca0-47c8-ad0d-5efbd8ed9b14)

### 연습

![스크린샷 2023-03-23 오전 9.51.01.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/5a8e8b11-ee4e-4aae-894d-804f1071653a)

![스크린샷 2023-03-23 오전 9.49.34.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/5943814a-7a02-47d5-9a1a-cacb0320da93)

![스크린샷 2023-03-23 오전 9.50.08.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/f7704095-8c58-4cc8-ad38-4e0236d3bb08)

### Cascade Notation

- 둘이 같은 역활을 한다.

![스크린샷 2023-03-23 오후 1.48.52.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/c4091c02-b175-4952-a1e4-40d4de918f54)

![스크린샷 2023-03-23 오후 1.49.32.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/25c3d258-198a-488f-8ea4-137828b0f268)

### Enum 타입

- 개발자의 실수를 줄이기 위해 선택의 폭을 좁힌다.

![“” 를 쓸 필요가 없다. ](https://github.com/DainoJung/docusaurus_blog/assets/117745618/6e4ff20e-470b-4f5f-ba04-1a4926602bb3)

“” 를 쓸 필요가 없다. 

![team은 red와  blue만 가능](https://github.com/DainoJung/docusaurus_blog/assets/117745618/c5966c72-5985-4f92-8b60-c3a6956d4370)

team은 red와  blue만 가능

### 추상화 클래스(abstract class)

다른 클래스들이 직접 구현 해야하는 메소드들을 모아둔 청사진

![스크린샷 2023-03-24 오전 9.16.36.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/e4278f77-7ed3-48c2-ad9a-72d6890076b8)

![상속 받은 class는 추상화 클래스의 메소드를 정의해야 한다.](https://github.com/DainoJung/docusaurus_blog/assets/117745618/24f42112-a522-4a95-bb0e-630a93232aaf)

상속 받은 class는 추상화 클래스의 메소드를 정의해야 한다.

### 상속(**Inheritance) - 복습하기**

- super 상속 받은 부모 클래스의 프로퍼티에 접근하거나 메소드를 호출할 수 있게 해줌

![스크린샷 2023-03-24 오전 9.31.27.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/a97f2106-4e22-4d71-8f91-42b6abc25127)

![스크린샷 2023-03-24 오전 9.31.44.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/6d068660-5e69-44c5-a3d8-91435f156e8f)

### **Mixins**

- 생성자가 없는 클래스만 가능
- 클래스에 프로터티들을 추가할 때 사용
- 단순히 Mixin 내부의 프로터티와 메소드를 가져오는 것

![스크린샷 2023-03-24 오전 9.38.11.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/48369372-8874-4079-90ee-51bd4769684d)

## widget

### isNegative

음수이면 true 값 반환

### mounted

현재 스크린이 살아 있는지 확인