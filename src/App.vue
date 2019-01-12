<template>
  <div id="app">
    <div id="header">
      <el-input prefix-icon="el-icon-search" v-model="account" placeholder="请输入EOS帐号" class="input">
        <el-button slot="append" icon="el-icon-search" v-on:click="created"></el-button>
      </el-input>
    </div>

    <el-card class="box-card">
      <el-row v-for="(value,key,index) in object " v-if='index<=3' type="flex" class="row-bg" justify="space-around">
        <el-col :span="7" style="padding-bottom: 10%;text-align: left">
          <div>{{key}}</div>
        </el-col>
        <el-col :span="5">
          <div></div>
        </el-col>
        <el-col :span="10" style="padding-bottom: 10%;text-align: right">
          <div>{{value}}</div>
        </el-col>
      </el-row>


    </el-card>

    <el-card class="box-card2">
      帐号权限
      <div style="padding-bottom: 5%;text-align: left">active:</div>
      <div style="padding-bottom: 5%;text-align: left;word-wrap: break-word;">{{object.active}}</div>
      <div style="padding-bottom: 5%;text-align: left">owner:</div>
      <div style="padding-bottom: 5%;text-align: left;word-wrap: break-word;">{{object.owner}}</div>
    </el-card>

    <el-card class="box-card3">

    </el-card>

    <footer>Powered by laoge</footer>

  </div>


</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        account: 'bocai.game',
        object: {
          EOS帐号名: 'bocai.game',
          快照余额: '90.0021',
          BOS帐号名: 'bocai.game',
          BOS余额: '90.0021',
          active: 'EOSy',
          owner: 'EOS6wiVouay8NidJNTZvKdXwX1dYFa2akVg463ABHcmKHebWDYR8y',
        },
        respone: [{
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
          alert(ress)
          // this.object.EOS帐号名=ress[0].eos_account
          // this.object.快照余额=ress[0].eos_balance
          // this.object.BOS帐号名=ress[0].bos_account
          // this.object.BOS余额=ress[0].bos_balance
          // this.object.active=ress[0].bos_balance
          // this.object.owner=ress[0].bos_balance
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
    width: 15%;
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
    padding-top: 1%;
    height: 24%;
  }


</style>
