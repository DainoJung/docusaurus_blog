# Class

## 클래스 생성

- 클래스에 종속된 변수를 멤버 변수, 종속된 함수를 메서드라고 부름

### this

- 현재 클래스를 의미
- 클래스에 종속되어 있는 값을 지칭할때 사용
- 함수 내부에 같은 이름의 변수가 없으면 `this` 생략 가능

```dart
class Student {
	String name = '다이노';
	
	void sayName() {
		print('안녕하세요. 저는 ${this.name}입니다.');
		
		print('저는 $name입니다.');
	}
}
```

### 인스턴스 생성

- 변수 타입을 Student로 지정해 인스턴스 생성
- 인스턴스 생성시 인스턴스화하고 싶은 클래스명 뒤에 `()` 를 붙여줌

```dart
void main() {
	// Student 인스턴스 생성
	Student daino = Student();
	
	// 매서드 실행
	daino.sayName();
}
```

## 생성자

- 클래스의 인스턴스를 생성하는 메서드
- 생성자를 사용해 활용도를 높일 수 있다.
- 생성자에서 입력받은 변수들을 일반적으로 final 키워드 사용
- 이름 뒤에 `()`를 붙이고 매개변수 지정 후 `:` 기호 뒤 입력받은 매개변수가 저장될 클래스 변수 지정

```dart
class Student {
	// 생성자에서 입력받은 변수들을 일반적으로 final 키워드 사용
  final String name;
	
	// 생성자 선언
  Student(String name) : this.name = name;

  void sayName() {
    print('안녕하세요. 저는 ${this.name}입니다.');
  }
}

```

### 생성자의 매개변수를 변수에 저장하는 과정을 생력하는 방법

- this를 사용하여, 해당되는 변수에 자동으로 매개변수가 저장

```dart
class Student {
	// 생성자에서 입력받은 변수들을 일반적으로 final 키워드 사용
  final String name;
	
	// this를 사용하여, 해당되는 변수에 자동으로 매개변수가 저장
  Student(this.name);

  void sayName() {
    print('안녕하세요. 저는 ${this.name}입니다.');
  }
}
```

### 인스턴스 생성

```dart
void main() {
  Student daino = Student('다이노');
  daino.sayName();
}
```

## 네임드 생성자

- 클래스를 여러 방식으로 인스턴스화할 때 사용
    - 사용 안하는거 추천

```dart
class Student {
  final String name;
  final int age;
	// 기본 생성자 사용
  Student(this.name, this.age);
  
  // forMap이라는 네임드 생성자 사용
  Student.fromMap(Map<String, dynamic> map)
      : this.name = map['name'],
        this.age = map['age'];

  void sayName() {
    print('안녕하세요. 저는 ${this.name}입니다.');
  }
}

void main() {
  Student daino = Student('다이노', 23);
  daino.sayName();
  
  Student daiso = Student.fromMap({
    'name': '다이소',
    'age': 100,
  });
  daiso.sayName();
}
```

## 프라이빗 변수

- 일반적으로 프라이빗 변수는 클래스 내부에서만 사용하는 변수를 칭하지만 다트에서는 같은 파일에서만 접근 가능한 변수이다.
- `_`로 변수명을 시작하면 프라이빗 변수로 선언

```dart
class Student {
  final String _name;

  Student(this._name);
}

void main() {
  Student daino = Student('다이노');
  // 다른 파일에서는 _name 변수에 접근 불가
  print(daino._name);
}
```

## 게터 / 세터

- 게터 - 값을 가져올때 사용
- 세터 - 값을 지정할 때 사용
- 가변 변수를 선언해도 직접 값을 가져오거나 지정할 수 있지만, 게터와 세터를 사용하면 어떤 값이 노출되고 어떤 형태로 노출될지, 어떤 변수를 변경 가능하게 할지 유연하게 지정 가능
- 객체지향 프로그래밍의 특징인, immutable 때문에 세터는 거의 사용하지 않음
- 게터와 세터 모두 변수처럼 사용, 사용시 메서드명 뒤에 `()` 를 붙이지 않음

```dart
class Student {
  String _name = '다이노';

  String get name {
    return this._name;
  }

  set name(String name) {
    this._name = name;
  }
}

void main() {
  Student daino = Student();
  daino.name = 'daino'; // 세터
  print(daino.name);    // 게터
}
```