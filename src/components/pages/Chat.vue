<template>
  <div class="chat">
    <template v-if="!isLogin" >
      <div class="login"  >
        <input type="text" placeholder="Как к вам образаться" v-model="author">
        <button v-on:click="Login">Войти</button>
      </div>
    </template>
    <template v-else>
    <div class="history" id="history">
      <div v-bind:class="[msgContainer.author==author ? 'my-msg-container' : '', 'msg-container']"
           v-for="msgContainer in chat">
        <div class="autor">{{GetInitials(msgContainer.author)}}</div>
        <div class="msg" v-for="msg in msgContainer.msgs" v-bind:data-time="new Date(msg.time).toLocaleTimeString()">
          {{msg.txt}}
        </div>
      </div>
    </div>
    <div class="send" >
      <textarea v-model="newMsg" placeholder="Написать сообщение ..."></textarea>
      <button v-on:click="SendMessages">Отправить</button>
    </div>
    </template>
  </div>
</template>

<script>
  var firebase = require('firebase')
  var config = {
    apiKey: "AIzaSyCCcUzv-LYBpwm5i0Y4WR7Z4ompwh3vioE",
    authDomain: "test-949c0.firebaseapp.com",
    databaseURL: "https://test-949c0.firebaseio.com",
    projectId: "test-949c0",
    storageBucket: "test-949c0.appspot.com",
    messagingSenderId: "999654640553"
  };
  var firebaseApp = firebase.initializeApp(config)
  var db = firebaseApp.database()

  export default {
    name: 'Chat',
    data() {
      return {
        newMsg: "",
        author: localStorage.author,
        isLogin: !!(localStorage.author||"")
      }
    },
    firebase: {
      // simple syntax, bind as an array by default
      msgs:{
        source:db.ref('msgs').orderByChild('time').limitToLast(50),
        readyCallback: function () {
          this.GoDown()
        }
      },
      users: db.ref('users'),
    },
    computed: {
      chat: function () {
        var res = this.msgs.reduce(function (sum, elem) {
          if (sum.length) {
            var last = sum[sum.length - 1]
            if (last.author === elem.author) {
              last.msgs.push({
                txt: elem.txt,
                time: elem.time
              })
              return sum
            }
          }
          sum.push({
            author: elem.author,
            msgs: [{
              txt: elem.txt,
              time: elem.time
            }]
          });
          return sum
        }, [])
        this.GoDown()
        return res

      }
    },
    methods: {
      SendMessages: function () {
        if (!this.newMsg) return

        this.$firebaseRefs.msgs.push({
          author: this.author,
          txt: this.newMsg,
          time: Date.now()
        });
        this.newMsg = ""
      },
      GetInitials: function (author) {
        var arr = author.split(" ")
        return arr[0][0] + ((arr[1] || "")[0] || "")
      },
      GoDown: function () {
        this.$nextTick(function () {
          var objDiv = document.getElementById("history");
          if(objDiv) objDiv.scrollTop = objDiv.scrollHeight;
        })
      },
      Login: function () {
        this.isLogin=!!this.author;
        if(this.isLogin){
          localStorage.author=this.author;
          this.GoDown()
        }
      }
    }
  }
</script>
<style>
  /*.block{*/
  /*width:500px;*/
  /*}*/
</style>
<style scoped>
  .history {
    display: flex;
    /*flex-direction: column;*/
    align-items: flex-end;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .chat {
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }

  .history {
    background: #cb2d3e; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #e53935, #cb2d3e); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #e53935, #cb2d3e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 15px 15px 0 15px;
    height: calc( 100vh - 100px - 60px);
    overflow-y: scroll;
  }

  .msg-container {
    position: relative;
    width: 100%;
    padding-left: 55px;
    min-height: 50px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-sizing: border-box;

  }

  .autor {
    left: 0;
    bottom: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #a30ea2;
    color: #FFF;
    font-size: 20px;
    position: absolute;
    font-family: sans-serif;
  }

  .msg {
    position: relative;
    background: #FFF;
    padding: 7px;
    border-radius: 5px;
    margin-left: 10px;
    width: 300px;
    max-width: calc( 100% - 25px);
    transform: translateY(-20px);
    font-family: sans-serif;
    font-size: 15px;
    padding-bottom: 10px;
    word-break: break-all;
  }

  .msg:before {
    position: absolute;
    right: 3px;
    bottom: 2px;
    content: attr(data-time);
    font-size: 10px;
    color: #aaa;
    z-index: 1;
  }

  .msg + .msg {
    margin-top: 5px;
  }

  .msg:last-child:after {
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #ffffff;
    border-width: 10px;
    margin-left: -10px;
    left: 0;
    bottom: 0;
  }

  .my-msg-container {
    padding-left: 0;
    padding-right: 55px;
    align-items: flex-end;
  }

  .my-msg-container .autor {
    left: auto;
    right: 0;
  }

  .my-msg-container .msg {
    margin-left: 0;
    margin-right: 10px;
  }

  .my-msg-container .msg:last-child:after {
    left: auto;
    right: 0;
    transform: translateX(50%);
  }

  .send {
    display: grid;
    grid-template: 100px 1fr / 1fr 150px;
  }

  .send textarea {
    padding: 15px;
    outline: none;
    resize: none;
  }

  .send button {
    background: #35c3e5;
    outline: 0;
    border: 0;
    font-family: sans-serif;
    font-size: 1.2em;
  }
  @media only screen and (max-width: 600px) {
    .history {
      height: calc( 100vh - 100px - 53px);
    }
  }
</style>
