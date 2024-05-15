# 제어문

## if문

- 괄호 안에 조건이 true이면 해당 조건의 코드 블럭 실행

## switch문

- 입력된 상수값에 따라 알맞은 case 블록을 실행
- break 키워드를 사용하면 switch문 밖으로 나갈 수 있음
- case 끝에 break 키워드를 사용하지 않으면 에러 발생
- enum과 함께 사용하면 유용

```dart
enum Status {
  approved,
  pending,
  rejected,
}

void main() {
  Status status = Status.approved;

  switch (status) {
    case Status.approved:
      print('승인');
      break;
    case Status.pending:
      print('대기');
      break;
    case Status.rejected:
      print('거절');
      break;
    default:
      print('알 수 없음');
  }
}
```

## for문

- 작업을 여러번 반복할때 사용

```dart
void main() {
  for (int i = 0; i < 3; i++){
    print(i);
  }
}
```

- for…in 패턴도 적용
- 일반적으로 List의 모든 값을 순회할때 사용

```dart
void main() {
  List<int> numberList = [3, 6, 9];

  for (int number in numberList) {
    print(number);
  }
}
```

## while문과 do…while문

- for문은 횟수 기반, while문은 조건 기반
- 조건이 true이면 계속 실행하고 false이면 멈춤
- while문은 조건을 먼저 확인 후 true가 반한되면 반복문을 실행하지만 do…while은 반복문을 실행한 후 조건을 확인