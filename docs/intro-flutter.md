# Flutter에 대해 공부합니다.

## flutter란?

- fluttet은 운영체제와 직접적으로 대화하는 것이 아닌 **C/C++ 엔진을 활용**한다.
- 네이티브 언어를 사용하지 않는다. → 네이티브 위젯 사용 불가
- 자유성이 높다(랜더링 엔진으로 그려지기 때문)

![운영체제 (dart로 만들어진 flutter) → 엔진 (C/C++) → 호스트 플랫포폼 (ios/android/web)](https://github.com/DainoJung/my-website/assets/117745618/c96066f2-1725-4f9f-94c0-1c760c903498)

운영체제 (dart로 만들어진 flutter) → 엔진 (C/C++) → 호스트 플랫포폼 (ios/android/web)

## Flutter vs React Native

**React Native → 네이티브 앱 운영체제 상에서 가능한 위젯을 사용하고 싶을 때**

**Flutter → 커스터 마이징이 필요할 경우**

- 플러터는 위젯을 합치면서 만듬 (레고)
- 모바일 앱의 모든 화면은 scaffold가 필요
- StatelessWidget → 화면에 무언가를 띄워준다