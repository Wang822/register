<template>
  <div class="login">
    <h1>登录</h1>
        <form @submit.prevent="submit($event)">
        <!-- 输入用户ID和密码 -->
        <input type="text" class="form-control" placeholder="请输入ID" ref="id" name="id">
        <input type="text" class="form-control" placeholder="请输入密码" ref="password" name="password">
        <input type="submit" value="登录" class="log" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
       user: " "    //返回user对象
    }
  },
  methods: {
    submit: function (event) {
      this.$http.get('http://localhost:8096/user', {
        params: {
        id: this.$refs.id.value
        }
      },
      {emulateJSON: true})
        .then((response) => {
            let user=JSON.parse(JSON.stringify(response.body))   //转换成json
            this.user = user
            // window.console.log(this.user.id)
            
                //判断id和密码是否匹配
               if( this.user.id===this.$refs.id.value && this.user.password===this.$refs.password.value ){
                localStorage.setItem('id', this.$refs.id.value)  //id存入localStorage
                this.$router.push({ path:'/' });        //跳转到首页
                }
              })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>