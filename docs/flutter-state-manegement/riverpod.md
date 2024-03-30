# River Pod

#### 어디서든 변수에 접근 하게 하기

**변수 선언**

``` dart
final floatingButtonIsExpandedProvider = StateProvider((ref) => false);

final floatingButtonIsSmallProvider = StateProvider((ref) => false);
```

**watch로 감시해준다.**

``` dart
final isExpanded = ref.watch(floatingButtonIsExpandedProvider);

final isSmall = ref.watch(floatingButtonIsSmallProvider);
```

**read로 값을 변경해준다.**

``` dart
ref.read(floatingButtonIsExpandedProvider.notifier).state = !isExpanded;
```

- ref를 사용하려면 상위 위젯에서 ProviderScope를 지정해 줘야한다.


## Provider


### FutureProviderFamily`<결과값/id 타입>`

id 마다 다른 데이터를 받아 올꺼면 Family 사용
데이터를 전달하고 저장까지 해준다.

만약 위젯을 나왔는데 지우고 싶다면 **AutoDisposeFutureProviderFamily** 사용



### 에러

리버팟에서 Simpleresult로 에러처리를 할 필요가 없다.
<!-- ![[스크린샷 2023-11-18 오전 11.28.36.png]] -->




### When

API 데이터를 받아올 때 [성공, 에러, 로딩중] 으로 분기처리 가능

![[스크린샷 2023-11-18 오전 11.49.19.png]]