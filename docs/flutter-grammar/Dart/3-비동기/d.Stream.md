# Stream

- Future는 반환값을 딱 한 번 받을때 사용
- Stream은 지속적으로 값을 반환 받을 때 사용
- Stream은 한 번 listen하면 주입되는 모든 값들을 지속적으로 받아옴

## 기본 사용법

- 내장 패키지인 `dart:async` 패키지 필요
- `StreamController`를 `listen()` 해야 값을 지속적으로 반환

```dart
import 'dart:async';

void main() {
  final controller = StreamController(); // StremaController 선언
  final stream = controller.stream; // Stream 가져오기

  // Stream에 listen() 함수를 실행하여 값이 변경될 때마다 콜백 함수를 실행 할 수 있다.
  stream.listen((event) {
    print(event);
  });

  // Stream에 값 주입
  controller.sink.add(1);
  controller.sink.add(2);
  controller.sink.add(3);
  controller.sink.add(4);
}

```

## 브로드캐스트 스트림

- Stream은 단 한 번만 `listen()`을 실행
- 하나의 스트림을 생성하고 여러번 `listen()` 함수를 실행하고 싶을 때 브로드캐스트 스트림 사용
- 그냥 Stream에서는 여러번 listen시 오류 발생

```dart
void main() {
  final controller = StreamController();
  final stream = controller.stream.asBroadcastStream();

  stream.listen((event) {
    print('listening 1');
    print(event);
  });

  stream.listen((event) {
    print('listening 2');
    print(event);
  });

  // add()를 실행할 때마다 listen()하는 모든 콜백 함수에 값이 주입
  controller.sink.add(1);
  controller.sink.add(2);
  controller.sink.add(3);
}
```

## 함수로 Stream 반환하기

- StreamController를 사용안하고 직접 Stream을 반환하는 함수가 있다.
- `async*` 로 함수를 선언하고 `yield` 키워드로 값을 반환함

```dart
import 'dart:async';

Stream<String> calculate(int number) async* {
  for (int i = 0; i < 5; i++) {
    // return과 같은 의미
    yield 'i = $i';
    await Future.delayed(Duration(seconds: 1));
  }
}

void playStream() {
  calculate(1).listen((event) {
    print(event);
  });
}

void main() {
  playStream();
}
```