# 프리온보딩 프론트엔드 4차 코스 선발과제

* Create React App
* CSS: Styled-Components 이용

<br>
<br>

# 1. Toggle.js
* 핵심 요소 : 버튼을 누를 때 마다 선택된 항목이 변한다.
* 부가 요소 : 슬라이드 애니메이션

![1](https://user-images.githubusercontent.com/51473971/165474271-16ed0158-c25d-4407-93c6-1c83b19e00ea.gif)

## 구현 과정
* Radio Button 을 이용해 구현
> Radio Button 은 name 을 같게 지정해 한가지 아이템만 선택할 수 있다
* 일반적으로 Toggle 은 ON/OFF 스위치로 많이 사용된다.
<br>
따라서 True/False 만 설정해서 True 면 기본 항목을, False 면 상세 항목을 선택하게 할 수도 있었음
<br>
하지만 주어진 예시에서 선택한 항목을 보여주도록 하는 것 같아 기본 항목은 'base' 값을, 상세 항목은 'detail' 값을 갖도록 했다.
<br>
* 만약 T/F 로 구현할 경우

```
const [isToggle, setToggle] = useState(true);

const onBtnChange = () => {
    setToggle(!isToggle);
}

...

{isToggle ?
    <span>기본</span>
:
    <span>상세</span>
}
```

<br>
=> 이 경우, 라디오 버튼을 누를 때마다 isToggle 값이 바뀌므로
<br>
**기본 상태에서 기본 버튼 클릭 -> 상세** 혹은 그 반대의 경우도 가능하게 된다.
<br>
==> 토글 자체를 클릭할 때마다 상태가 변경됨

<br>
<br>

# 2. Tab.js
* 핵심 요소 : 버튼을 누를 때 마다 선택된 탭이 변한다.
* 부가 요소 : 슬라이드 애니메이션

![2](https://user-images.githubusercontent.com/51473971/165474288-dec79a9a-d701-48b6-9d01-a718cd90d5fa.gif)

## 구현 과정
* Radio Button 을 이용해 구현
> Radio Button 은 name 을 같게 지정해 한가지 아이템만 선택할 수 있다
* Toggle.js 와 유사했으나 2 가지 이상의 Tab 으로 구성되었으므로 **isSelected** 값으로 각 탭 구분

<br>
<br>

# 3. Slider.js
* 핵심 요소 : 슬라이더를 움직이면 상단의 값이 자동으로 변한다.
* 부가 요소 : 하단 버튼과 미려한 픽셀 매칭

![3](https://user-images.githubusercontent.com/51473971/165474297-c20e5652-ec5b-425b-9ed5-026cb6b99836.gif)

## 구현 과정
* input type="range" 로 슬라이더 구현
* 실시간 값을 표시하기 위해 **value** 를 만들고 onChange 할 때마다 update 해주었다.
* 1%, 25%, 50%, 75%, 100% 구간을 나타내는 Button 을 각각 만들어주었다.
<br>
=> 클릭 시, 해당 값에 맞게 **value** 변경
* input type="range" 와 함께 사용하는 datalist 에 대해 알게 되었다.

### 어려웠던 점
* 슬라이더 커스텀
<br>
=> 왼쪽은 푸른색으로 오른쪽은 회색으로 & 버튼 모양

### 해결 방법
* slider 의 기본스타일 없애기 = `-webkit-appearance: none;`
<br>
* 슬라이더 바 = `&::-webkit-slider-runnable-track`, 슬라이더 버튼 = `&::-webkit-slider-thumb` 를 이용해 각각 스타일 지정
<br>
* 슬라이더 버튼을 기준으로 왼쪽, 오른쪽의 색을 다르게 지정하는 부분은 `background-size: ${props => props.value}% 100%;` props 변수를 이용해 size 를 지정해주었다.

<br>
<br>

# 4. Input.js
* 핵심 요소 : 인풋창에 이메일과 비밀번호 입력이 가능하다
* 부가 요소 : 이메일 형식에 맞을 경우 자동으로 체크 표시
* 부가 요소 : 비밀번호 입력란 우측 눈 표시를 누르면 비밀번호가 노출된다

![4](https://user-images.githubusercontent.com/51473971/165474303-724611de-ab8b-4202-b9bc-22a74a205eb4.gif)

## 구현 과정
* Check, Eye 아이콘들은 [FontAwesome](https://fontawesome.com/icons) 을 이용

### E-mail
* 포인트 = 이메일 형식에 맞을 경우 **자동으로 체크** 표시
<br>
=> onChange 할 때마다 **Regex** test 진행 후, true 면 파란 체크, false 면 기본 체크 표시
* 기본적으로 input type="email" 에서 제공하는 유효성 검사 외의 경우까지 Regex 에서 검사하도록 함
* 다른 방식으로는 type="text" 로 받고 Regex test 를 이용해 invalid 를 띄울 수도 있을 것 같다. (기본 유효성 검사 배제)

### Password
* 포인트 = 비밀번호 입력란 **우측 눈 표시**를 누르면 비밀번호가 노출된다
<br>
=> 초기 상태는 비밀번호가 가려진 상태이므로 eye-slash 아이콘이 보이도록 함
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; eye-slash 아이콘 클릭 시, eye 아이콘으로 변경되며 비밀번호 공개
* **passwordCheck** 변수를 이용해 password 의 input **type** 과 비밀번호 공개/비공개 여부 **visible** 저장
* eye-slash => `type: 'password', visible: false` => 비밀번호 비공개
* eye => `type: 'text', visible: true` => 비밀번호 공개

### 어려웠던 점
* Check, Eye 아이콘의 배치
<br>
=> `position: absolute;` 로 설정하니 창 크기가 변하니까 여기저기 이동하게 되었다...😂

### 해결 방법
`display: grid` 로 지정하고 `position: relative` 를 이용해 부모에 의존시키니 위치 고정됨!

<br>
<br>

# 느낀 점
실전에 나가면 숨쉬듯이 만들어야 하는 주요 컴포넌트들로 구성된 만큼 과제 수행을 통해 더 성장할 수 있는 계기가 되었다. 그동안 기능과 비주얼을 모두 잡은 라이브러리들을 주로 사용했었는데 이번 기회를 통해 기본적인 태그들과 CSS 로 직접 구현해봄으로써 기본적인 기능 구현 개발 공부를 할 수 있었다.
특히 CSS 부분에서 많이 부족하다는 것을 느꼈으며, display 등 컨텐츠들을 배치하는 과정이 까다로웠다. 비록 완전한 구현은 못했지만 좋은 경험이었으며 선발이 되지 않더라도 구현하지 못한 부분들은 구현해봐야겠다!
