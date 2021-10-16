# Starcraft-Community-Frontend

![](https://static.wikia.nocookie.net/starcraft/images/9/95/StarCraft2_SC2_Logo1.jpg/revision/latest/scale-to-width-down/350?cb=20080623233532)

스타크래프트 전략공유 사이트

## [Starcraft-Community-Backend](https://github.com/slsnrnsep/Starcraft-Community-Backend)

<br />

## [프로젝트 링크](http://starcraft-community.s3-website.ap-northeast-2.amazonaws.com/)

<hr>

## 목차

-   [개발 배경](#개발-배경)
-   [개발 과정](#개발-과정)
    -   [개발 기간](#1-개발-기간)
    -   [사용 언어](#2-사용-언어)
    -   [팀원](#3-팀원)
    -   [프로젝트 목표](#4-프로젝트-목표)
    -   [와이어프레임 설계](<#5-와이어프레임-설계-(Figma-활용)>)
    -   [API 설계](#6-API-설계)
-   [개발 결과](#개발-결과)
    -   [구현한 기능](#1구현한-기능)
    -   [실제 서비스 모습](#2-실제-서비스-모습)
    -   [피드백](#3-회고-및-피드백)

---

## 개발 배경

-   오픈된 공간에서 유저 서로가 스타크래프트라는 게임의 정보를 공유하는 공간입니다!
-   개발 구상 단계에서 영화소개나 음악소개 사이트는 많은데 게임이야기를 공유하는 사이트는 잘 없어서 개발하게 되었습니다.
-   이번 프로젝트는 각자가 주특기`개인의 선호에 따라 백엔드(Java Spring), 프론트엔드(React) 선택` 를 공부하고 진행하는 첫 협업이었습니다.

---

## 개발 과정

### 1. 개발 기간

-   `2021년 10월 11일(월) ~ 2021년 10월 16일(토) / 총 6일`
-   `설계 1일 / 개발 5일`

### 2. 사용 언어

-   **Languages** : Java(Backend), JavaScript(Frontend)
-   **Framework & Library** : Spring, React
-   **DB** : MySQL, H2(테스트용)

### 3. 팀원

-   정영호 (Spring)
-   이승준 (Spring)
-   윤상준 (React)
-   조민갑 (React)
-   한동윤 (React)

### 4. 프로젝트 목표

1. 서로 다른 개발환경에서의 연동(CORS)
2. 회원가입 & Spring에서 JWT 방식의 로그인
3. 게시판 구현(CRUD 구현, 이미지 업로드, 수정, 삭제)

### 5. 와이어프레임 설계 (Figma 활용)

-   회원가입

![회원가입1](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9c892a8e-3133-482f-a656-69f54d4004da/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211016T054032Z&X-Amz-Expires=86400&X-Amz-Signature=d564efe6d2fc6d88600cd18e4d02105449546bcfb0540bc19cad99bfe700f7aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

2. 로그인

![로그인](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e3afe4e3-f4ee-47f2-98e7-f7c9655aa334/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211016T054041Z&X-Amz-Expires=86400&X-Amz-Signature=2a13daff79b62a21127bb69f85147bcfef85c709f651e9232514d2322d70a083&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

3. 메인페이지

![메인페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6935fafd-f3b1-44a3-bf0f-d3689f98ab79/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211016T054021Z&X-Amz-Expires=86400&X-Amz-Signature=ff7158d572acc7e5786e13bd4ace41d6ebab230a05d8958411fd462d578dfae2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

4. 상세 페이지

![상세 페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/23168c02-b0c2-448b-9b29-f8314713d3bc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211016T053946Z&X-Amz-Expires=86400&X-Amz-Signature=ec6b6705ee8326c4ff9d47116d4afeeced50ba2eb7bb71ad44c3f2137c82cd27&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

5. 게시글 작성

![게시글 작성 페이지](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/247b60df-d624-498c-85f9-24524f5d78ba/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211016%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211016T054056Z&X-Amz-Expires=86400&X-Amz-Signature=360e673369b9ffd579bd599a6c8e9c48abd2a162d43ab2d3f71840ce870f7b35&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

<hr />

### 6. API 설계

https://www.notion.so/744bb1a68c824eaab96598027d47b487?v=c4b03910f33443929cfc305d4c65cb77

---

## 개발 결과

<br />

### 1.구현한 기능

#### **1. JWT 방식의 로그인**

로그인에 성공한 유저는 서버단으로부터 **토큰**을 발행받아 쿠키에 저장했습니다. 이후 서버단의 API에 접근할 때 이 **토큰**을 포함하고,
서버에서는 받은 **토큰**을 검증하는 단계가 계속 이루어지게 해야 했습니다.

<br />

#### **2. 게시물 작성, 수정, 삭제**

**1. 게시물 작성**

![작성](https://user-images.githubusercontent.com/63948484/137587550-1c280e56-a427-4007-87d0-1876e58dec8a.png)

**2. 게시물 수정 및 삭제**

![수정 및 삭제](https://user-images.githubusercontent.com/63948484/137587551-a98745a9-9011-48f4-87f2-289c9468e291.png)

<br />
<hr />
<br />

### 2. 실제 서비스 모습

#### **시연 영상 YouTube**

[![시연 영상 YouTube](https://user-images.githubusercontent.com/63948484/137587697-e7532ee8-653e-48b0-ab5a-cb4aa021dcdc.png)](https://www.youtube.com/watch?v=HCXF1DUsIhA)

<br />
<hr />
<br />

### 3. 회고 및 피드백

**프로젝트를 진행하면서 프론트 측에서는 다음과 같은 고민 과정이 있었습니다.**

#### 1. 서버단과 토큰을 주고받는 방식?

-   Request / Response 과정에서 토큰이 제대로 전달되지 않아 500, 401 등의 에러가 발생했습니다.

-   원인은 **클라이언트에서 서버로 보내는 요청의 Header의 이름이 클라이언트-서버 간에 일치하지 않았기 때문이었습니다**

    ```javascript
    const instance = axios.create({
        baseURL: "http://54.180.148.132:8080/",
        headers: {
            "content-type": "application/json;charset=UTF-8",
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "X-AUTH-TOKEN": `${getCookie("token")}`,
        },
    });
    ```

    -   axios를 통해 서버단에 요청을 보낼 때 **header에 토큰을 X-AUTH-TOKEN 이름으로 포함시켜** 전송하여 문제를 해결했습니다.

<br />

#### 2. 토큰을 언제 사용해야하는지?

-   서버로부터 받은 토큰이 어떤 기능에서 활용되는지를 고민했습니다.
-   먼저 Redux에 쿠키에 저장되어있는 토큰을 검사할 수 있도록 기능을 구현했습니다.

    ```javascript
    const tokenCheck = document.cookie;
    if (tokenCheck) {
        const username = localStorage.getItem("username");
        const userObj = { username: username };
        dispatch(logIn(userObj));
    } else {
        dispatch(logOut());
    }
    ```

-   로그인 인증 여부를 판단하고 브라우저에서 로그인 상태가 유지될 수 있도록 활용했습니다.
-   **게시물 작성, 수정, 삭제** 기능은 로그인 인증을 통과한 후 가능하도록 설정했습니다.

<br />

#### 3. CORS 문제

-   프론트엔드와 백엔드가 각각 다른 환경에서 개발했기 때문에, 각 단의 독립적인 서버(도메인)를 열어 작업했습니다.
-   프론트엔드에서는 서버에서 구축한 API를 활용하도록 했습니다. 이 과정에서 정말 많은 CORS 문제를 만났습니다.
-   이를 해결해가는 과정에서 알게된 사실은 대부분의 브라우저에서는 서로 다른 도메인의 통신을 기본적으로 차단하며, 원할한 통신을 위해서는 서버측에서 헤더를 통해서 사용가능한 자원을 알려줘야 한다는 것을 배웠습니다.

<br />

#### 4. 느낀점

#### 상준

-   백엔드, 프론트엔드 작업물을 하나로 합치는 과정에서 나타나는 문제(CORS, JWT인증)를 겪고 이를 해결해보는 좋은 경험이었습니다.
-   `좋아요`, `프로필사진`, `댓글 작성` 등의 소셜 기능을 담지 못한 점이 아쉽습니다. 이 점은 추후 개발 예정입니다.
-   반응형 레이아웃을 통해 UI/UX를 개선하는 과정을 더 깊이 공부해보고 싶다는 점을 느꼈습니다.

#### 민갑

-   백엔드와 프론트엔드로 나누어서 협업하는 경험을 처음으로 해보게 되어 느낌이 새로웠습니다.
-   실력과 협업이 좋은 팀원들과 함께 협업 경험을 할 수 있어서 좋았습니다. 실력 있는 팀원들과 함꼐 하면서 혼자 였으면 어려웠을 기능 구현은 어떻게 해야 하는지 공부를 할 수 있었습니다.
-   웹퍼블리셔로서의 경험을 살려서 스타일컴포넌트를 수정하고 로그인화면과 회원가입 화면을 만들고 수정하였습니다. 아직까지 리액트에 익숙하지 않아서 기능구현에 어려움을 느꼈습니다.
-   협업을 하면서 배운내용과 경험한 코드를 바탕으로 코드를 구현할 수 있도록 해야겠습니다.

#### 동윤

-   처음으로 프론트,백이 같이 진행하는 프로젝트여서인지 어색한 부분이 많았습니다.
-   서로 데이터를 주고 받는 부분에 있어서 시행착오를 많이 겪었지만 서로간의 빠른 소통으로 인해 잘 해결해 나간 거 같습니다.
-   기존에 디자인 했던 와이어프레임 기능을 다 담아내지 못했고 스코프를 많이 줄이게 되었습니다.
-   개인적으로 React를 잘 다루지 못해 팀 역할에 기여하지 못하고 도움을 많이 받았습니다.
