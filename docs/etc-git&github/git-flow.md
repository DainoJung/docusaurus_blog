# Git Flows

## No Flow

![No Flow](https://github.com/DainoJung/docusaurus_blog/assets/117745618/c1c66501-ec3c-4824-ac04-a122a9e2033f)

- 여러명이 할때 충동이 일어남

## Git Flow

![Git Flow](https://github.com/DainoJung/docusaurus_blog/assets/117745618/24fd992c-aff1-462e-b56b-ac18b5420484)

- feature - 개발자 각각
- develop - 주개발
- release - 테스트앱(Test Flight)
- hotfix - 버그 수정
- master - 마켓 출시

## Github Flow

> 조금 더 쉬워진 Flow
> 

![Github Flow](https://github.com/DainoJung/docusaurus_blog/assets/117745618/17eee319-8a55-4a41-b20a-ec06ddc7ba8c)

### 특징

- anything in the master branch is deployable
    - 전제: 마스터 브랜치는 언제든 어떤 상황이든 배포 가능
- create descriptive branches off of master
    - user-content-cache-key submodules-init-task redis2-transition
- push to named branches constantly
    - 팀원의 작업 현황을 확인 할 수 있음
    - 백업 장점
- open a pull request at any time
    - 코드 리뷰 문화, 커뮤니케이션
- merge only after pull request review
    - 머지 후에 바로 배포

### 요약

- 매우 단순한 브랜치 구조
- 코드 리뷰 문화
- CI / CD 배포 자동화 필요
    - Github Actions 활용 추천⭐️(꼭 공부해보기)
    

## 그래서?

### 브랜치명 커스텀

master 👉 main
develop 👉 dev
feature 👉 feat
본인 닉네임 활용. dev-it/post-list
기능 설명을 한글로도 활용. feat/게시글-목록
release
hotfix

## 팁

**Pull Request merge 후에 브랜치 삭제**

Github 👉 Repository 👉 Settings 👉 General

> After pull requests are merged, you can have head branches deleted automatically.
> 

![Untitled](https://github.com/DainoJung/docusaurus_blog/assets/117745618/5f7ef34b-59ca-42c2-af86-17d7147a24f4)

해당 feature 나오기 전에는 Github App Delete merged branch 사용.
Github App (Zenhub, Jira, Slack, Sentry …)

**로컬 Feature 브랜치 삭제**

```python
git fetch -p && for branch in $(git branch -vv | grep ': gone]' | awk '{print $1}'); do git branch -D $branch; done
```

<aside>
📌 To conclude, always remember that panaceas don't exist.
Consider your own context. Don't be hating. Decide for yourself.

by Vincent Driessen.
March 5, 2020

</aside>