<template>
  <div class="footer">
    <div class="footer__sns">
      <a
        href="#"
        class="footer__sns--facebook"
      ></a>
      <a
        href="#"
        class="footer__sns--instagram"
      ></a>
      <a
        href="#"
        class="footer__sns--twitter"
      ></a>
      <a
        href="#"
        class="footer__sns--youtube"
      ></a>
    </div>
    <div class="footer__menu">
      <div class="footer__menu--item">화면 해설</div>
      <div class="footer__menu--item">고객 센터</div>
      <div class="footer__menu--item">기프트카드</div>
      <div class="footer__menu--item">미디어 센터</div>
      <div class="footer__menu--item">투자 정보(IR)</div>
      <div class="footer__menu--item">입사 정보</div>
      <div class="footer__menu--item">이용 약관</div>
      <div class="footer__menu--item">개인정보</div>
      <div class="footer__menu--item">법적 고지</div>
      <div class="footer__menu--item">쿠키 설정</div>
      <div class="footer__menu--item">회사 정보</div>
      <div class="footer__menu--item">문의하기</div>
    </div>
    <div class="footer__code">
      <a
        href="#"
        class="footer__code--text"
        >서비스 코드</a
      >
    </div>
    <div class="footer__address">
      <div class="footer__address--text">
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호 전화번호: 080-001-9587
      </div>
      <div class="footer__address--text">대표: 레지널드 숀 톰프슨</div>
      <div class="footer__address--text">이메일 주소: korea@netfilx.com</div>
      <div class="footer__address--text">
        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
        우편번호 03161
      </div>
      <div class="footer__address--text">사업자등록번호: 165-87-00119</div>
      <div class="footer__address--text">
        클라우드 호스팅: Amazon Web Services Inc.
      </div>
      <div class="footer__address--text">
        <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1658700119"
          >공정거래위원회 웹사이트</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin icon-style($background-image) {
  width: 30px;
  height: 30px;
  background: $background-image white;
  background-size: cover;
  border-radius: 6px;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: gray;
}
.footer {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 980px;
  margin: 0 auto;
  font-size: 13px;
  &__sns {
    display: flex;
    gap: 20px;
    &--facebook {
      @include icon-style(url('../assets/icon_facebook.png'));
    }
    &--instagram {
      @include icon-style(url('../assets/icon_instagram.png'));
    }
    &--twitter {
      @include icon-style(url('../assets/icon_twitter.png'));
    }
    &--youtube {
      @include icon-style(url('../assets/icon_youtube.png'));
    }
  }
  &__menu {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    color: gray;
  }
  &__code {
    &--text {
      color: gray;
      border: 1px solid;
      padding: 10px 5px;
    }
  }
  &__address {
    &--text {
      color: gray;
      font-size: 11px;
      margin: 5px 0;
    }
  }
}
</style>
