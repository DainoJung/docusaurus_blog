# HTTP 구조

### HTTP Request 구조

#### 1. Start Line

- Method

- Request Target : 전송 주소

- HTTP Version

GET
- Data를 받아옴

POST
- Data를 추가함

#### 2. Header
- User-Agent
- Authorization : 로그인 인증 토큰
- Cookie : Key-Value 형태의 긴 여러 데이터
- Content-Type : 보낸 Body Data의 데이터 유형

#### 3.  Body
* Content-Type에서 선언한 데이터

### HTTP Response 구조

#### 1. Start Line
- Status Code:
	200 : 성공
	404 : Not Found(존재하지 않음)
	401 : 권한 없음(로그인 정보 없음)
	500 : 서버 내부 에러

#### 2. Header
- Server : 서버 종류
- Content-Disposition : 내용을 어떻게 보여줄지 안내
- Cookie : Key-Value 형태의 긴 여러 데이터

#### 3.  Body
- HTTP Request body 와 동일

