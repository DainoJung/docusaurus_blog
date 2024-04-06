# with

> 파일을 닫아줄 필요가 없다
> 

```python
import pickle

with open("profile.pickle", "rb") as profile_file:
    print(pickle.load(profile_file))
    
# {'이름': '박명수', '나이': 30, '취미': ['축구', '골프', '코딩']}
```