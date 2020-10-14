<template>
<div class="cart container">
  <!-- 标题 -->
    <h1 class="page-header">购物车</h1>
    <!-- 购物车内商品信息table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>商品名称</th>
          <th>商品数量</th>
          <th>价格</th>
          <th>加购时间</th>
        </tr>
      </thead>
      <tbody>
        <!-- 使用v-for将api获取的数组填入table -->
        <tr v-for="cart in carts" :key="cart.goodname">
          <td>{{cart.goodname}}</td>
          <td>{{cart.amount}}</td>
          <td>{{cart.price}}</td>
          <td>{{cart.time}}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <!-- 商品总价格lable -->
      <label v-bind="price">总价格：{{price.price}}</label>
    </div>
    <form>
      <!-- 结算提交按钮 -->
      <div class="form-group">
        <button type="submit" name="submit" class="btn btn-primary" @click="fetchOrder">
          结算
        </button>
      </div>
    </form>
     <div class="alert alert-info alert-dismissable hide" role="alert">
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
       </button>
       <strong>余额不足！</strong>
   </div>
   <div class="alert alert-success alert-dismissable hide" role="alert">
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
       </button>
       <strong>提交成功！</strong>
   </div>
</div>
</template>

<script>
// 获取localStorage中的id
var myid = localStorage.getItem('id')
// 获取localStorage中的account
var myaccount = localStorage.getItem('account')
export default {
  data () {
    return {
      // data涉及到的数据,carts数组和price
      carts: [],
      price: 0.00
    }
  },
  methods: {
    // 获取当前id购物车商品的方法
    fetchCarts () {
      this.$http.get('http://localhost:8096/cart', {
        params: {
          id: myid
        }
      },
      {emulateJSON: true})
        .then((response) => {
          // var json = response.body
          // if (json.status === 0) {
          //   this.carts = json.message
          // }
          // window.console.log(response)
          this.carts = response.body
        })
    },
    // 用于获取订单总额的方法
    fetchPrice () {
      this.$http.get('http://localhost:8096/price', {
        params: {
          id: myid
        }
      },
      {emulateJSON: true})
        .then((response) => {
          // var json = response.body
          // if (json.status === 0) {
          //   this.price = json.message
          // }
          // window.console.log(response)
          this.price = response.body
        })
    },
    // 用于向后端提交订单的方法
    fetchOrder () {
      if (myaccount < this.price.price) {
        // 这一句是弹窗，没成功
        ('.alert-info').removeClass('hide').addClass('in')
      } else {
        this.$http.get('http://localhost:8096/order', {
          params: {
            id: myid
          }
        },
        {emulateJSON: true})
        // 以下是弹窗提示的部分，并没有实现，再说吧
        const TIME_COUNT = 3;
        ('.alert-suceess').removeClass('hide').addClass('in')
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
              // 跳转的页面写在此处
              this.$router.push({ name: 'HelloWorld' })
            }
          }, 1000)
        }
      }
    }
  },
  // 页面刷新出时自动执行两个方法
  mounted: function () {
    this.fetchCarts()
    this.fetchPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
