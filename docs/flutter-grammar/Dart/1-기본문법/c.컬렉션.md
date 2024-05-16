# 컬렉션

- 여러 값을 하나의 변수에 저장할 수 있는 타입
    - List - 여러 값을 순서대로 저장할때
    - Map - 특정 키값을 기반으로 빠르게 값을 검색할때
    - Set - 중복된 데이터를 제거할 때
- 서로의 타입으로 자유롭게 형변환이 가능

## List 타입

- 여러 값을 순서대로 한 변수에 저장할 때 사용
- 리스트의 구성 단위를 원소라고 함
- `리스트명[인덱스]` 형식으로 특정 원소에 접근
- 인덱스는 원소의 순번
    - 제일 첫 원소의 인덱스 값은 0
    - 마지막 원소는 ‘리스트 길이 - 1’

```dart
void main() {
  List<String> subjectList = ['수학', '영어', '과학'];
  print(subjectList[0]); // 첫 원소 지정
  print(subjectList[3]); // 마지막 원소 지정
  print(subjectList.length); // 길이 반환
}
```

### add() 함수

- List에 값을 추가할 때 사용

```dart
void main() {
  List<String> subjectList = ['수학', '영어', '과학'];
  subjectList.add('사탐'); // 리스트의 끝에 추가
}
```

### where() 함수

- List에 있는 값들을 순서대로 순회하면서 특정 조건에 맞는 값만 필터링
- 매개변수에 함수를 입력하며, 입력된 함수는 기존 값을 하나씩 매개변수로 받는다.
- 각 값별로 true를 반환하면 값을 유지하고, flase를 반환하면 값을 버림
- 순회가 끝나면 남은 값들은 **Iterable**로 반환

```dart
void main() {
  List<String> subjectList = ['수학', '영어', '과학'];
  final newList = subjectList.where(
    (name) => name == '수학' || name == '과학',
  );
  
  print(newList); // Iterable
  print(newList.toList()); // List로 다시 변환
}
```

### map() 함수

- List에 있는 값들을 순서대로 순회하면서 값을 변경
- 매개 변수에 함수를 입력하며, 입력된 함수는 기존 값을 하나씩 매개변수로 입력 받는다.
- 반환값이 기존값을 대체하며 순회가 끝나면 Iterable이 반환

```dart
void main() {
  List<String> subjectList = ['수학', '영어', '과학'];
  final newList = subjectList.map(
    (name) => '수능과목 $name',
  );
  
  print(newList.toList()); // List로 다시 변환
}
```

### reduce() 함수

- List에 값들을 순회하면서 매개변수에 입력된 함수를 실행
- 순회할 때마다 값을 쌓아감
- List 타입으로 반환됨

```dart
void main() {
  List<String> subjectList = ['수학', '영어', '과학'];
  final newList = subjectList.reduce((value, element) => value + ', ' + element);
  
  print(newList);
}
```

- 기존 함수와 다르게 reduce() 함수는 매개변수로 함수를 입력받고 해당 함수는 매개변수 2개를 입력 받는다.
- 순회가 처음 시작될 때 첫번째 매개변수(value)는 리스트의 첫 번째 값[수학]을 받고, 두번째 매개변수(element)는 [영어]를 받게 됩니다.
- 첫번쨰 순회 이후에는 첫번째 순회에서 반환된 값이 value가 된다.
- 그래서 reduce() 함수는 리스트 내부의 값들을 점차 더해가는 기능으로 사용

### fold() 함수

- reduce() 함수와 비슷하다.
- reduce() 함수는 함수가 실행되는 리스트 요소들의 타입이 같아야 하지만, fold() 함수는 어떠한 타입이든 반환할 수 있다.

```dart
void main() {
  List<String> subjectList = ['수학', '영어', '과학'];

  final allSubjects =
      subjectList.fold<int>(0, (value, element) => value + element.length);
  print(allSubjects);
}
```

- 첫번째 순회때 리스트의 첫번째 값이 아닌 fold() 함수의 첫 번째 매개변수에 입력된 값이 초깃값으로 사용

## Map 타입

- 키와 값의 짝을 저장
- 순서대로 값을 저장하는데 중점을 둔 리스트와 달리 키를 이용해서 원하는 값을 빠르게 찾는데 중점
- `Map<키의 타입, 값의 타입> 맵이름` 형식으로 생성

```dart
void main() {
  Map<String, String> dictionary = {
    'Iron man': '아이언맨',
    'Super man': '슈퍼맨',
    'Wonder woman': '원더우먼',
  };
  print(dictionary['Iron man']);
  print(dictionary['Wonder woman']);
}
```

### 키와 값 반환받기

- 모든 Map 타입은 키와 값을 모두 반환받을 수 있다.

```dart
void main() {
  Map<String, String> dictionary = {
    'Iron man': '아이언맨',
    'Super man': '슈퍼맨',
    'Wonder woman': '원더우먼',
  };
  
  // Iterable로 반환
  print(dictionary.keys);
  print(dictionary.values);
}
```

## Set 타입

- 중복 없는 값들의 집합
- `Set<타입> 세트이름` 형식으로 생성
- 중복을 방지하므로 유일한 값들만 존재

```dart
void main() {
  Set<String> subject = {'국어', '수학', '과학', '과학'}; // 과학 중복
  
  print(subject);
  print(subject.contains('수학')); // 값이 있는지 확인
  
  List<String> subject2 = ['국어', '수학', '과학'];
  print(Set.from(subject2)); // List 타입을 Set 타입으로 변환
}
```

## enum

- 한 변수의 값을 몇가지 옵션으로 제한하는 기능
- 선택지가 제한적일 때 사용

```dart
enum Status {
  approved,
  pending,
  rejected,
}

void main() {
  Status status = Status.approved;
  print(status); // Status.approved
}
```