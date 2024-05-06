# class⭐️⭐️⭐️

- 클래스 안에서는 타입을 명시해야 한다.
    
    ![스크린샷 2023-03-23 오전 9.10.37.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/d5d31068-82b2-4f29-856a-fc5872b3281c)
    
- 클래스 상속 받으면 내부 값을 변경 or 사용 가능
    
    ![스크린샷 2023-03-23 오전 9.11.18.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/2b64c74c-6f92-4f4c-89d5-11b0cbb10490)
    
- final class로 선언시 내부 함수 변경 불가
    
    ![스크린샷 2023-03-23 오전 9.12.20.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/1de594aa-fb4c-4909-bcf4-887e0ab6a280)
    

- 함수 안에 같은 이름의 변수가 있을때 classd의 변수를 사용시 this.을 사용
    
    ![class의 변수 사용시 {$this.name} 사용](https://github.com/DainoJung/docusaurus_blog/assets/117745618/ed96f3c8-e2d9-4cce-83d4-70d8eebaaa46)
    
    class의 변수 사용시 `{$this.name}` 사용
    

## Constructors

- 생성자 함수 설정
- late - 변수의 값을 나중에 받는다.

![스크린샷 2023-03-23 오전 9.19.14.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/7ac92373-529b-47a2-b0b4-702b55a981a5)

**간단한 방법**

![스크린샷 2023-03-23 오전 9.21.42.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/2dab35bc-4ff5-4afb-bf75-0ac5abb6eece)

## **Named Constructor Parameters**

- class안에 변수가 많아지면 헷갈릴 수 있다.

![스크린샷 2023-03-23 오전 9.27.37.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/681cc665-aa31-4a70-98f4-7c8309fd6b08)

![스크린샷 2023-03-23 오전 9.28.17.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/cff1a7bc-3954-4fb5-b4f6-14576a0ef85b)

## **Named Constructors ⭐️**

: 을 사용함으로 player 객체를 초기화 할 수 있다.

- 둘 중 편한거 선택 - positional 형식 추천

### named 형식

![named 형식](https://github.com/DainoJung/docusaurus_blog/assets/117745618/13fc5f6f-9c56-4083-8836-dd7f37e694f3)

### positional 형식

![positional 형식](https://github.com/DainoJung/docusaurus_blog/assets/117745618/9c8070ac-fcec-453f-a114-fbbe2506cb3b)

<br/>

![스크린샷 2023-03-23 오전 9.39.53.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/1adf89e9-cca0-47c8-ad0d-5efbd8ed9b14)

## 연습

![스크린샷 2023-03-23 오전 9.51.01.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/5a8e8b11-ee4e-4aae-894d-804f1071653a)

![스크린샷 2023-03-23 오전 9.49.34.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/5943814a-7a02-47d5-9a1a-cacb0320da93)

![스크린샷 2023-03-23 오전 9.50.08.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/f7704095-8c58-4cc8-ad38-4e0236d3bb08)

## Cascade Notation

- 둘이 같은 역활을 한다.

![스크린샷 2023-03-23 오후 1.48.52.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/c4091c02-b175-4952-a1e4-40d4de918f54)

![스크린샷 2023-03-23 오후 1.49.32.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/25c3d258-198a-488f-8ea4-137828b0f268)

## Enum 타입

- 개발자의 실수를 줄이기 위해 선택의 폭을 좁힌다.

![“” 를 쓸 필요가 없다. ](https://github.com/DainoJung/docusaurus_blog/assets/117745618/6e4ff20e-470b-4f5f-ba04-1a4926602bb3)

“” 를 쓸 필요가 없다. 

![team은 red와  blue만 가능](https://github.com/DainoJung/docusaurus_blog/assets/117745618/c5966c72-5985-4f92-8b60-c3a6956d4370)

team은 red와  blue만 가능

## 추상화 클래스(abstract class)

다른 클래스들이 직접 구현 해야하는 메소드들을 모아둔 청사진

![스크린샷 2023-03-24 오전 9.16.36.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/e4278f77-7ed3-48c2-ad9a-72d6890076b8)

![상속 받은 class는 추상화 클래스의 메소드를 정의해야 한다.](https://github.com/DainoJung/docusaurus_blog/assets/117745618/24f42112-a522-4a95-bb0e-630a93232aaf)

상속 받은 class는 추상화 클래스의 메소드를 정의해야 한다.

## 상속(**Inheritance) - 복습하기**

- super 상속 받은 부모 클래스의 프로퍼티에 접근하거나 메소드를 호출할 수 있게 해줌

![스크린샷 2023-03-24 오전 9.31.27.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/a97f2106-4e22-4d71-8f91-42b6abc25127)

![스크린샷 2023-03-24 오전 9.31.44.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/6d068660-5e69-44c5-a3d8-91435f156e8f)

## **Mixins**

- 생성자가 없는 클래스만 가능
- 클래스에 프로터티들을 추가할 때 사용
- 단순히 Mixin 내부의 프로터티와 메소드를 가져오는 것

![스크린샷 2023-03-24 오전 9.38.11.png](https://github.com/DainoJung/docusaurus_blog/assets/117745618/48369372-8874-4079-90ee-51bd4769684d)

