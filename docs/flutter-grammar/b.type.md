# Type

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