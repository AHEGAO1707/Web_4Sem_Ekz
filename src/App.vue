<template>
  <div id="app">
    <div id="head" class="header">
      <a href="https://github.com/AHEGAO1707/Web_4Sem_Ekz"><img width="50" srcset="./assets/img320.png 320x,

             ./assets/img640.png 640x " src="./assets/img.jpg" alt="Картинка с ссылкой"></a>

      <H3>Алексеев</H3>


      <div class="edit-schema">
        <h3>Тёмная тема</h3>
        <toggle-button aria-label="изменить тему"
            @change="edit_Schema"
            color="black"
            :labels="true"
            :font-size="18"
            :width='60'
            :height="30"
        />
      </div>
    </div>

    <div class="controls-holder">

      <div><h3 style="display: inline; background-color: white; border-radius: 5px">Добавить карточку с заданием</h3> <button style="background: none; border: none"><img alt="Добавить карточку" style=" cursor: pointer; display: inline"
                                                                              @click="add_task" id="add_task" width="30"
                                                                              src="./assets/add.png"></button></div>
    </div>

    <AddTask id="addTask" style="display: none" @add="add" ></AddTask>


    <div class="container_grid">
      <div
          v-for="(elem, i) in task"
          :key="i"
          class="task"
          v-bind:class="[{ type_1: elem.type === '1' }, { type_2: elem.type === '2' }, { type_3: elem.type === '3' }]"
      >
        <p class="text">{{ elem.description }}</p>

        <button style="background: none; border: none"> <img alt="Удалить задание" style="cursor: pointer; display: inline" @click="delete_task(i)" width="30"
             src="./assets/delete.png"></button>
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
import Swal from "sweetalert2";

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
    delete_task(i) {

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })

      swalWithBootstrapButtons.fire({
        title: 'Вы уверены что хотите удалить эту карточку?',
        text: "Вы не сможете отменить это действие!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Да, удалить!',
        cancelButtonText: 'Нет, стоп, отмена!',
        confirmButtonColor: '#00FF00',
        cancelButtonColor: '#FF0000',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.task.splice(i, 1);
          swalWithBootstrapButtons.fire(
              'Успех!',
              'Карточка удалена успешно!',
              'success'
          )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
              'Отмена',
              'Всё в порядке. Карточка не была удалена!',
              'error'
          )
        }
      })
    },
    edit_Schema() {
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

* {
  box-sizing: border-box;
}

.type_1{
  width: 100px;
  height: 100px;
}

.type_1>.text {
  width: 60px;
}

.type_2{
  height: 100px;
  width: 200px;
}

.type_2>.text {
  width: 160px;
}

.type_3{
  height: 100px;
  width: 300px;
}

.type_3>.text {
  width: 260px;
}

.text {
  word-wrap: break-word;
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
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 92%;
  height: 50px;
}

.container_grid {
  max-width: 100%;
  padding: 10px;
  margin-bottom: 120px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;

}

.task {
  margin: 10px;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid black;
  align-items: start;
  align-self: center;
  padding: 10px;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 80px;
}


</style>
