<template>
  <div>
    <div class="loading" v-if="user.loading">
      loading...
    </div>
    <div class="BuySuccess-container" v-if="!user.loading">
      <div class="BuySuccess-complex">
        <div class="complex-wrapper">
          <div class="complex-wrapper-icon">
            <i class="icon icon-success" />
          </div>
          <div>付款成功</div>
        </div>
      </div>
      <div class="BuySuccess-detail">
        <div class="detail-context" v-for="item in buyMsgDetail">
          <div class="context-left">{{item.label}}</div>
          <div class="context-wrapper">{{buyDetailMsg[item.key]}}</div>
        </div>
      </div>
      <div class="BuySuccess-look">
        <a class="look-btn" @click="lookOrder">查看我的订单{{user.userInfo.name}}</a>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';
  import { buyMsgDetail } from '@/pages/home/home.config';

export default {
    data () {
      return {
        buyMsgDetail,
        buyDetailMsg: {
          money: '8.00元',
          accountTel: '18387688860',
          payType: '微信支付',
          productType: '包月'
        }
      };
    },
    computed: {
      ...mapState({
        user: (state) => state.user
      }),
      ...mapGetters(['getLength'])
    },
    methods: {
      lookOrder () {
        let user = {name: 'handsome', interest: 'looking book'};
        // this.getUserInfo(user);
        this.getUser(user);
      },
      ...mapActions(['getUserInfo', 'getUser'])
    }
};
</script>

<style lang="less" scoped>
  .loading {
    text-align: center;
    color: #ff0000;
    font-size: 20px;
  }
.BuySuccess-container {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;

  .BuySuccess-complex {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex: 0.8;
    align-items: center;
    justify-content: center;

    .complex-wrapper {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      color: #8c8c8c;
    }
    .complex-wrapper-icon {
      position: relative;
      left: 20%;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
    }
    i {
      font-size: 40px;
      color: #5cb85c;
      animation: complex .5s ease-in;
      -webkit-animation: complex .5s ease-in;
    }

    @keyframes complex {
      0% {color: #fff;}
      50% {color: #cff8cf;}
      100% {color: #5cb85c;}
    }
  }

  .BuySuccess-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    .detail-context {
      position: relative;
      display: flex;
      margin: 0 30px;
      height: 45px;
      line-height: 45px;

      .context-left {
        flex: 1;
        display: flex;
        color: #928f8f;
      }
      .context-wrapper {
        flex: 1.5;
        display: flex;
      }
    }
    .detail-context:after {
      position: absolute;
      display: block;
      content: '';
      height: 1px;
      width: 98%;
      bottom: 0;
      background-color: #e8e8e8;
    }
  }

  .BuySuccess-look {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .look-btn {
      padding: 6px;
      border: 1px solid #ff0000;
      border-radius: 20px;
      color: #ff0000;
      font-size: 13px;
    }
  }
}
</style>
