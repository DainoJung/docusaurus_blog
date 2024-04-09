# R 기초

## 기본문법

### 연산자

#### 대입 연산자

- 변수에 값을 할당하기 위해 사용하는 연산자
- 변수에 값이 정상적으로 할당되었다면, 환경 창에 변수와 값 혹은 데이터의 개요가 등록됨

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/d0d80718-43b6-444d-ba7e-5377ef35a910" width="600"/></center>

#### 비교 연산자

- 할당된 값과 변수를 비교하거나 임의의 숫자, 문자 혹은 논리값을 비교할 수 있다.
- NA는 비교할 값이 존재하지 않으므로 어떤 것과 비교 하더라도 NA를 반환한다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/744e2baf-361c-438d-9210-3b65221e2b61" width="600"/></center>

#### 산술 연산자

- 두 숫자형 타입의 계산을 위한 연산자로서 다양한 연산이 가능

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/94172581-0de5-4e12-afcb-fce00aada261" width="600"/></center>

#### 기타 연산자

- 논리값을 계산하기 위한 연산자로는 부정 연산자, AND 연산자, OR 연산자가 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/45250fbb-ce40-4912-afca-a756cb7361fc" width="600"/></center>

<br/>

### R 데이터 구조 ⭐️

#### 벡터

- 타입이 같은 여러 데이터를 하나의 행으로 저장하는 1차원 데이터 구조다.
- ‘연결하다’라는 의미의 ‘concatenate’ 의 c를 써서 데이터를 묶을 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/972324d1-7c0a-460b-a231-a6802be69ae8" width="600"/></center>

- 벡터를 생성할 때 c 안에 콤마를 구분자로 써서 성분을 직접 입력할 수 있지만 콜론(:)을 활용하여 시작값과 끝값을 지정해 벡터를 생성할 수도 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/a950db80-7030-4267-823a-ef3a0b7949b0" width="600"/></center>

#### 행렬

- 2차원 구조를 가진 벡터다. 벡터의 성질을 가지고 있으므로 행렬에 저장된 모든 데이터는 같은 타입이어야 한다.
- 그렇지 못할 경우 자동으로 타입 변환을 수행한다.
- matrix를 사용하여 행렬을 만들 경우
    - nrow를 사용하여 행의 수를 결정하거나,
    - ncol을 사용하여 열의 수를 결정할 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/2894f04a-7ad6-46ed-9a1f-e99e1faf30dd" width="600"/></center>

- matrix를 사용하여 행렬을 만들 경우 행렬의 값들이 열로 저장되는 것을 볼 수 있다. 하지만 byrow 옵션에 T(TRUE)를 지정하면 값들이 열이 아닌 행으로 저장된다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/75ea31b4-980a-4a19-8c93-426abbbfbe61" width="600"/></center>

- 행렬을 만드는 또 다른 방법은 **벡터에 차원을 주는 방법**이다.
- dim 함수를 사용하면 행의 개수와 열의 개수를 지정하여 행렬로 변활할 수 있다.
- 또한 dim 함수는 벡터를 행렬로 변환할 뿐만 아니라 주어진 행렬이 몇 개의 행과 몇개의 열로 구성되어 있는지 형렬의 크기를 나타내기도 한다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/3c251343-e4eb-4aa3-b141-49821ea25aa8" width="600"/></center>

#### 배열

- 3차원 이상의 구조를 갖는 벡터
- 배열 또한 벡터의 성질을 가지고 있으므로 하나의 배열에 포함된 데이터는 모두 같은 타입이어야 한다.
- array를 사용하여 배열을 만들 수 있으나 몇 차원의 구조를 갖는지 dim 옵션에서 명시해야 함
- 그렇지 않으면 1차원 벡터가 생성

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/583e584c-1865-4cac-9df3-fad4627f5025" width="600"/></center>

- 행렬과 마찬가지로 dim 함수를 사용해서 벡터에 차원을 지정해 만들 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/b3fd7693-83a6-40b8-98ce-1979625c6c4b" width="600"/></center>

#### 리스트

- 데이터 타입, 데이터 구조에 상관없이 사용자가 원하는 모든 것을 저장할 수 있는 자료구조
- 즉, 리스트는 성분 간에 이질적인 특징을 가지고 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/e1881378-e2ec-49be-9967-597ba8645a79" width="600"/></center>

#### 데이터프레임

- 데이터 분석을 위한 2차원 구조를 갖는 관계형 데이터 구조로서 R에서 가장 많이 활용되는 데이터 구조
- 행렬과 같은 모양을 갖지만 여러 개의 벡터로 구성되어 있기 때문에 각 열은 서로 다른 데이터를 가질 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/d6c284f9-7c0a-4e36-8a0e-9832b21f785e" width="600"/></center>

<br/>

### R 내장 함수

#### 기본 함수

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/f1bb5e31-a889-44cc-88ad-df16d856dea9" width="600"/></center>

#### 통계 함수 ⭐️

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/7a3be0ad-1b62-46e5-85cc-a5b64eb03dd5" width="600"/></center>

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/bfcaaf04-58cc-4252-bc4c-845ee0bc2baf" width="600"/></center>

<br/>

### R 데이터 핸들링

#### 데이터 이름 변경

- 행렬, 배열, 데이터프레임과 같이 2차원 이상의 데이터 구조는 colnames와 rownames 함수를 사용하여 행과 열의 이름을 알 수 있으며, 이름을 지정할 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/d2785e2e-d97f-42dc-b673-fa188ee44097" width="600"/></center>

#### 데이터 추출

- R은 여러 데이터 구조에 모두 **인덱싱**을 지원하기 때문에 대괄호 기호([ ])를 사용하여 원하는 위치의 데이터를 쉽게 얻을 수 있으며 행과 열의 이름으로도 데이터를 얻을 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/6a7546c8-04f3-49ea-9946-ef275f2b693f" width="600"/></center>

- 데이터프로엠에서는 $ 기호를 사용하여 원하는 열의 데이터를 구할 수 있으며, $와 [ ]를 혼용할 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/6fe8c3a0-f454-4fa7-9ae3-b46dbb75e64f" width="600"/></center>

#### 데이터 결합

- 데이터를 행으로 결합하는 `rbind`와 열로 결합하는 `cbind` 가 대표적이다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/073653b7-807e-42e9-8c9c-0bd6117e9a20" width="600"/></center>

- 행렬과 행렬, 데이터프레임과 데이터프레임의 경우 행의 수 혹은 열의 수가 같은 결합이 가능하다.
- 하지만 벡터와 벡터의 결합에서는 재사용 규칙으로 인하여 부족한 데이터를 앞에서부터 다시 재활용하여 사용하며 오류와 함께 결과를 반환한다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/c7907311-c903-48c5-954d-33f1eecf28e2" width="600"/></center>

<br/>

### 제어문

#### 반복문

- 특정 부분의 코드가 반복적으로 수행되도록 한다.
- for 반복문과 while 반복문의 두가지 종류가 있다.
    
<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/b2f6884b-5444-45cd-9a00-fc61d3d600b7" width="600"/></center>
    

#### 조건문

- 참과 거짓에 따라 특정 코드가 수행될지 혹은 수행되지 않을지를 결정

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/65b4450b-6a5b-4272-ae33-ecfcb9d08138" width="600"/></center>

#### 사용자 정의 함수

- 자주 사용되는 구문을 필요할 때마다 작성하지 않고 하나의 함수로 명명하여 저장하였다가 필요한 경우 함수를 호출해서 대신할 수 있다.

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/873d76ae-7527-4291-9a13-99242f93e127" width="600"/></center>

#### 주석

- 주석은 실행되지 않는 문장으로, #을 사용해 표시

<br/>

### 통계분석에 자주 사용되는 R 함수

#### 숫자 연산

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/ba7a33cc-11de-4208-9b33-2b2ff6e45cad" width="600"/></center>

#### 문자 연산
<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/971fc2e5-fbab-46a7-b553-0f56a58f86dd" width="600"/></center>

#### 벡터 연산

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/10842820-a50d-4919-b185-0b984ab31b64" width="600"/></center>

#### 행렬 연산

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/fe91516e-b16a-48c3-a669-ef0db2d57df3" width="600"/></center>

#### 데이터 탐색

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/498bb7de-8a13-417a-a5cd-7b5a90f25e88" width="600"/></center>

#### 데이터 전처리 ⭐️

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/1acef403-67fa-4d5b-9192-ff52cece54d0" width="600"/></center>

#### 정규분포(기본값은 표준 정규 분포로 mean = 0, sd = 1이다.)

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/224d4de3-c4c9-4541-bb0f-fdc7560385e9" width="600"/></center>

#### 표본추출

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/8d31f23f-3a11-4ed7-9683-8c946d78a575" width="600"/></center>

#### 날짜

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/b13f356b-50d4-43fe-8683-3471d5a14506" width="600"/></center>

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/42854b16-fe77-4bc5-b7e9-d64cd7a1c22e" width="600"/></center>

#### 산점도

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/915eae36-8824-4f43-9b42-44e0273ce6bf" width="600"/></center>

#### 파일 읽기 쓰기

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/4d0e941a-2932-4ea4-8e12-f392e6ebcd92" width="600"/></center>

#### 기타

<center><img src="https://github.com/DainoJung/docusaurus_blog/assets/117745618/ace432d4-4f2a-4bca-9174-317d41719524" width="600"/></center>