# JSON serialization

## 용어 정리

Encoding = serialization
데이터 구조를 String으로 변경해주는 작업

Decoding = deserialization
String을 데이터 구조로 변경해주는 작업

보통 전체 작업을 serialization / deserialization
해당 작업을 구체적으로 표현할때는 Encoding / Decoding
<br/>

## 어떤 JSON serialization을 사용해야 될까?
<br/>

### Manual serialization - 소규모 프로젝트

flutter 안에 이미 내장되어 있는 JSON decoder를 사용

jsonDecode() 기능을 사용해 JSON 데이터 구조를 `Map<String, dynamic>` 데이터 타입으로 변경해준다.

JSON model이 많지 않고, 빠른 적용을 원한다면 적합하다.
<br/>

### 자동코드 생성을 사용한 Automated serialization - 중, 대규모 프로젝트

json을 serialization 해주는 코드를 자동으로 생성해주는 라이브러리

[json_serializable_package](https://pub.dev/packages/json_serializable)

~~~ dart
import 'package:json_annotation/json_annotation.dart';  
  
/// 이 부분은 자동으로 생성된 파일을 User class가 접근이 가능하도록 해준다.  
/// 만약 User class 파일명이 "user.dart"이면 자동 생성되는 파일은 "user.g.dart"이다.  
/// 즉, 생성되는 파일명 = 파일명(.dart 빼고) + g.dart  
part 'user.g.dart';  
  
/// 이 annotation이 User class는 serialization코드를 생성해야된다는 표시를 해주는 것이다.  
@JsonSerializable()  
  
class User {  
User(this.name, this.email);  
  
String name;  
String email;  
  
/// 자동으로 생성된 파일에 private function이 생성되는데  
/// map으로 User object로 생성해주는 `_$UserFromJson()`이 생성된다.  
/// function명 = _$ + class명 + FromJson  
factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);  
  
/// User object에서 map으로 변경해주는 fuction도 비슷하게 생성된다.  
/// function명 = _$ + class명 + ToJson  
Map<String, dynamic> toJson() => _$UserToJson(this);  
}
~~~