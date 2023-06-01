# RWM_back
K-lab project1 RWM backend repo

# How to use

apis.js에 있는 함수를 사용할 때,

해당 함수를 호출하는 함수를 정의할 때 "async"로 정의하고,

그 함수 안에서 apis.js의 함수를 호출할 때 "await"을 붙여야 함

```
async function login() {
  ...
  await getUser(id_value);
}
```
