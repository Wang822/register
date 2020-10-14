<template>
  <div class="hello">
    <h1>hello</h1>
        <form @submit.prevent="submit($event)">
        <!-- 测试localStorage时用于获取id和余额 -->
        <input type="text" class="form-control" placeholder="请输入id" ref="id" name="id">
        <input type="text" class="form-control" placeholder="请输入pw" ref="password" name="password">
        <input type="submit" value="获取" class="login" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       user: [],
    }
  },
  methods: {
      fetchUser () {
    },

    submit: function (event) {
      this.$http.get('http://localhost:8096/user', {
        params: {
        id: this.$refs.id.value
        }
      },
      {emulateJSON: true})
        .then((response) => {
          this.user = response.body 
          window.console.log(response.body)     
        })
      // 将id和account分别加入localStorage
      // localStorage.setItem('id', this.$refs.id.value)
      // localStorage.setItem('account', this.$refs.account.value)
      // 控制台打印检查一下，可以注释掉
      // window.console.log(localStorage.getItem('id'))
      // window.console.log(localStorage.getItem('account'))
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
