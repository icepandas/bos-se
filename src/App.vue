<template>
  <div id="app">
    <div id="header">
      <el-input prefix-icon="el-icon-search" v-model="account" placeholder="请输入EOS帐号" class="input">
        <el-button slot="append" icon="el-icon-search" v-on:click="created"></el-button>
      </el-input>
    </div>

    <el-card class="box-card">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7" style="padding-bottom: 10%;text-align: left">
          <div>EOS帐号：</div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="10" style="padding-bottom: 10%;text-align: right">
          <div>{{object.EOS帐号名}}</div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7" style="padding-bottom: 10%;text-align: left">
          <div>快照余额:</div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="10" style="padding-bottom: 10%;text-align: right">
          <div>{{object.快照余额}}</div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7" style="padding-bottom: 10%;text-align: left">
          <div>BOS帐号:</div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="10" style="padding-bottom: 10%;text-align: right">
          <div>{{object.BOS帐号名}}</div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="7" style="padding-bottom: 10%;text-align: left">
          <div>BOS余额:</div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="10" style="padding-bottom: 10%;text-align: right">
          <div>{{object.BOS余额}}</div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card2">
      帐号权限
      <div style="padding-bottom: 5%;text-align: left">active:</div>
      <div style="padding-bottom: 5%;text-align: left;word-wrap: break-word;">{{re[0].active_key}}</div>
      <div style="padding-bottom: 5%;text-align: left">owner:</div>
      <div style="padding-bottom: 5%;text-align: left;word-wrap: break-word;">{{re[0].owner_key}}</div>
    </el-card>

    <el-card class="box-card3">
      <img src="../src/assets/banner.png"/>
    </el-card>

    <footer>Powered by laoge node</footer>

  </div>


</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        account: 'bocai.game',
        object: {
          EOS帐号名: '0',
          快照余额: '0.00',
          BOS帐号名: '0',
          BOS余额: '0.00',
          active: 'EOSy',
          owner: 'EOS6w',
        },
        re: [{
          "eos_account": "bocai.game",
          "eos_balance": "53.5601 EOS",
          "bos_account": "danihzwzweuh",
          "bos_balance": "2.6780 BOS",
          "permissions": [{
            "perm_name": "active",
            "required_auth": {
              "threshold": 1,
              "keys": [{"weight": 1, "key": "EOS6wiVouay8NidJNTZvKdXwX1dYFa2akVg463ABHcmKHebWDYR8y"}],
              "accounts": [{"weight": 1, "permission": {"permission": "eosio.code"}}],
              "waits": []
            },
            "parent": "owner"
          }, {
            "perm_name": "owner",
            "required_auth": {
              "threshold": 1,
              "keys": [{"weight": 1, "key": "EOS6wiVouay8NidJNTZvKdXwX1dYFa2akVg463ABHcmKHebWDYR8y"}],
              "accounts": [],
              "waits": []
            },
            "parent": ""
          }]
        }]
      }
    },
    methods: {
      created() {
        this.$http.get('https://api.boslaoge.me/' + this.account).then(res => {
          let ress = JSON.stringify(res.body)

          if(ress.length<3){
            this.$notify.error({
              title: '输入错误',
              message: '请确定输入正确的EOS帐号...',
            })
            this.object.EOS帐号名=0
            this.object.快照余额=0
            this.object.BOS帐号名=0
            this.object.BOS余额=0
          }

          let resss =JSON.parse(ress)
          this.re=resss
          for(var i=0;i<resss.length;i++){
            this.object.EOS帐号名=resss[i].eos_account
            this.object.快照余额=resss[i].eos_balance
            this.object.BOS帐号名=resss[i].bos_account
            this.object.BOS余额=resss[i].bos_balance
            this.object.active=resss[i].active_key
            this.object.owner=resss[i].owner_key
          }

        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0px;
    margin: 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    min-height: 100%;
    border: hidden;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  img {
    width:99%;
  }

  a {
    color: #42b983;
  }

  .input {
    height: 100%;
  }


  .box-card {
    margin: 2%;
    padding-top: 1%;
    height: 30%;
  }

  #header {
    background: #1e8cc3;
    height: 4%;
    padding: 3%;
  }

  .box-card2 {
    margin: 2%;
    padding-top: 1%;
    height: 30%;
  }

  .box-card3 {
    margin: 2%;
    padding-top: 0%;
    height: 24%;
  }


</style>
