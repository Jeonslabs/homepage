# GitHub Pages 배포 가이드 (초보자용)

이 가이드는 GitHub Pages를 처음 사용하는 분들을 위한 단계별 설명입니다.

## 📌 GitHub Pages란?

GitHub에서 제공하는 **무료 웹 호스팅 서비스**입니다. 여러분의 HTML, CSS, JavaScript 파일을 온라인에 공개할 수 있습니다.

**배포 후 URL 예시**: `https://jeonslabs.github.io/homepage`

---

## 🚀 배포 단계

### 1단계: GitHub 계정 만들기

GitHub 계정이 없다면:

1. https://github.com 접속
2. 우측 상단 **Sign up** 클릭
3. 이메일 주소, 비밀번호, 사용자명(username) 입력
4. 이메일로 받은 인증 코드 입력

> **이미 계정이 있다면 2단계로 이동하세요!**

---

### 2단계: 새 저장소(Repository) 만들기

1. GitHub에 로그인
2. 우측 상단 **+** 버튼 클릭 → **New repository** 선택
3. 저장소 정보 입력:
   - **Repository name**: `homepage` (원하는 이름으로 변경 가능)
   - **Description**: "JNS Labs 회사 홈페이지" (선택사항)
   - **Public** 선택 (무료 GitHub Pages는 Public만 가능)
   - **나머지는 체크하지 않음**
4. **Create repository** 클릭

저장소가 생성되면 URL이 표시됩니다. 예:
```
https://github.com/Jeonslabs/homepage
```

---

### 3단계: Git 초기화 및 파일 업로드

#### A. Git 설치 확인

터미널(명령 프롬프트)에서:
```bash
git --version
```

만약 "명령을 찾을 수 없습니다"라고 나오면:
- https://git-scm.com/download/win 에서 Git 다운로드 및 설치
- 설치 후 컴퓨터 재시작

#### B. Git 사용자 정보 설정 (최초 1회만)

```bash
git config --global user.name "여러분의이름"
git config --global user.email "여러분의이메일@example.com"
```

#### C. 프로젝트 폴더에서 Git 초기화

```bash
# 홈페이지 폴더로 이동
cd f:\Project\homepage

# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 커밋 (변경사항 저장)
git commit -m "Initial commit: JNS Labs homepage"

# 기본 브랜치 이름을 main으로 변경
git branch -M main
```

#### D. GitHub에 연결 및 업로드

**중요**: 아래 URL의 `Jeonslabs`를 여러분의 GitHub 사용자명으로 변경하세요!

```bash
# GitHub 저장소 연결
git remote add origin https://github.com/Jeonslabs/homepage.git

# 파일 업로드 (푸시)
git push -u origin main
```

처음 푸시할 때 GitHub 로그인 창이 뜰 수 있습니다. 로그인하면 됩니다.

---

### 4단계: GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
   - 예: `https://github.com/Jeonslabs/homepage`

2. 상단 메뉴에서 **Settings** (설정) 클릭

3. 왼쪽 사이드바에서 **Pages** 클릭

4. **Source** 섹션에서:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

5. 잠시 기다리면 (1~5분) 상단에 초록색 박스로 URL이 표시됩니다:
   ```
   Your site is live at https://jeonslabs.github.io/homepage/
   ```

---

## ✅ 완료!

축하합니다! 이제 여러분의 홈페이지가 인터넷에 공개되었습니다.

**접속 URL**: `https://여러분의사용자명.github.io/저장소이름/`

---

## 🔄 나중에 수정하려면?

파일을 수정한 후:

```bash
# 변경된 파일 추가
git add .

# 커밋 메시지와 함께 저장
git commit -m "로고 추가 및 디자인 수정"

# GitHub에 업로드
git push
```

몇 분 후 자동으로 웹사이트가 업데이트됩니다!

---

## 📞 도움이 필요하면?

- Git 관련 오류가 나면 오류 메시지를 복사해서 물어보세요
- GitHub Pages 반영이 안 되면 5~10분 정도 기다려 보세요
- 캐시 문제일 수 있으니 브라우저에서 Ctrl+F5로 새로고침하세요

---

## 💡 참고사항

- **무료 제한**: GitHub Pages는 저장소당 1GB, 월 100GB 트래픽 제한
- **HTTPS 자동 적용**: GitHub Pages는 자동으로 HTTPS를 제공합니다
- **커스텀 도메인**: Settings → Pages에서 본인 도메인 연결 가능
