<template>
  <div class="register">
    <h1>注册</h1>
        <form @submit.prevent="submit($event)">
        <!-- 测试localStorage时用于获取id和余额 -->
        <input type="text" class="form-control" placeholder="请输入id" ref="id" name="id">
        <input type="text" class="form-control" placeholder="请输入nickname" ref="nickname" name="nickname">
        <input type="text" class="form-control" placeholder="请输入password" ref="password" name="password">
        <input type="submit" value="注册" class="login" />
    </form>
  </div>
</template>

<script>
// var myid=this.$refs.id.value;
// var mypassword=this.$refs.password.value;
// var mynickname=this.$refs.nickname.value;
export default {
  name: 'Register',
  data () {
    return {
       user: [],
    }
  },


  methods: {

    submit: function (event) {
      this.$http.get('http://localhost:8096/signup', {
        params: {
        id: this.$refs.id.value,
        password: this.$refs.password.value,
        nickname: this.$refs.nickname.value
        }
      },
      {emulateJSON: true})
        .then((response) => {
           // let user=JSON.parse(JSON.stringify(response.body))
            //this.user = user
            //this.user = response.body 
           // myid=user.id
           // window.console.log(this.user.id)
                //localStorage.setItem('id', this.$refs.id.value)
                this.$router.push({path:'/login'});  
                // window.console.log(1)
               
           })
        }
  }
}
    //   this.$http.get('http://localhost:8096/signup', {
    //     //: {
      
        // id: this.$refs.id.value,
        // password: this.$refs.password.value,
        // nickname: this.$refs.nickname.value

        
    //   })
    //  // {emulateJSON: true})
    //     .then((response) => {
    //       this.user = response.body 
    //       //window.console.log(response.body)     
    //     })
      // 将id和account分别加入localStorage
      // localStorage.setItem('id', this.$refs.id.value)
      // localStorage.setItem('account', this.$refs.account.value)
      // 控制台打印检查一下，可以注释掉
      // window.console.log(localStorage.getItem('id'))
      // window.console.log(localStorage.getItem('account'))
      //}
    
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
