<template>
  <div id="app">
    <div id="head" class="header">
      <a href="https://github.com/AHEGAO1707/Web_4Sem_Ekz"><img width="50" srcset="./assets/img320.png 320x,

             ./assets/img640.png 640x " src="./assets/img.jpg" alt="Картинка с ссылкой"></a>

      <label><H3>Алексеев</H3></label>


      <div class="edit-schema">
        <h3>Тёмная тема</h3>
        <toggle-button
            @change="editSchema"
            color="black"
            :labels="true"
            :font-size="18"
            :width='60'
            :height="30"
        />
      </div>
    </div>

    <div class="controls-holder">

      <div><h3 style="display: inline">Добавить карточку с заданием</h3> <img style=" cursor: pointer; display: inline"
                                                                              @click="add_task" id="add_task" width="30"
                                                                              src="./assets/add.png"></div>
    </div>

    <AddTask></AddTask>


    <div id="foot" class="footer">

      <label><H3>Алексеев Егор Романович</H3></label>
      <label><H3>Группа 191-361</H3></label>
      <label><H3>09.07.2021</H3></label>

    </div>

  </div>
</template>

<script>
import {ToggleButton} from 'vue-js-toggle-button';
import Vue from 'vue';
import AddTask from "@/components/AddTask";

Vue.component('ToggleButton', ToggleButton)

export default {
  name: 'App',
  components: {AddTask},
  data() {},
  methods: {
    add_task() {
      document.getElementById('ModalWindow').style.display = "inline";
    },
    editSchema() {
      if (this.clicked) {
        document.documentElement.style.setProperty('--color-title-gray', '#7f7f7f');
        document.documentElement.style.setProperty('--color-background', 'white');
      } else {
        document.documentElement.style.setProperty('--color-title-gray', '#ffffff');
        document.documentElement.style.setProperty('--color-background', '#474747');
      }
      this.clicked = !this.clicked
    }
  }
}
</script>

<style>

:root {
  --color-title-gray: #7f7f7f;
  --color-base-blue: black;
  --color-background-blue: #d4d4d4;
  --color-life-dark: #36556c;
  --color-background: white;
}

body {
  height: 100%;
  margin: 0;
  background-color: var(--color-background);
}

#app {
  max-width: 90%;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 75px;
  height: max-content;
  background-color: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border: 1px black solid;
  flex-wrap: wrap;
}

.footer {

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 75px;
  height: max-content;
  background-color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 1px black solid;
  flex-wrap: wrap;
}

.edit-schema {
  display: flex;
  align-items: center;
}

.controls-holder {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 92%;
  margin: auto;
  height: 50px;
}

</style>
