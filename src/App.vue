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

      <div><h3 style="display: inline; background-color: white; border-radius: 5px">Добавить карточку с заданием</h3> <img style=" cursor: pointer; display: inline"
                                                                              @click="add_task" id="add_task" width="30"
                                                                              src="./assets/add.png"></div>
    </div>

    <AddTask id="addTask" style="display: none" @add="add" ></AddTask>


    <div class="container_grid">
      <div
          v-for="(elem, i) in task"
          :key="i"

          class="task"
          v-bind:class="[{ l1: elem.type === 1 }, { l2: elem.type === 2 }, { l3: elem.type === 3 }]"
      >
        <p>{{ elem.description }}</p>
      </div>
    </div>


    <div id="foot" class="footer">

      <label><H3>Алексеев Егор Романович </H3></label>
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
  data() {
    return {
      type: "",
      description: "",
      task: []
    }
  },
  methods: {
    add_task() {
      document.getElementById('addTask').style.display = "inline";
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
    },
    add: function (elem){
      this.task.unshift(elem)
    }

    /*computed: {
      add_task_to_grid: function () {
        let this_Comp = this;
        var type = this_Comp.$store.getters.GET_Type;
        var desc = this_Comp.$store.getters.GET_Desc;
      },
    },*/
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
.l1{
  width: 150px;
}
.l2{
  width: 200px;
}
.l3{
  width: 300px;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 90%;
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

.container_grid {
  max-width: 100%;
  padding: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  gap: 2%;
  grid-row-end: auto;
  border-radius: 10px;
}

.task {
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  /*width: 280px;*/
  border: 1px solid black;
  align-items: start;
  align-self: center;
  padding: 10px;
  border-radius: 10px;
}


</style>
