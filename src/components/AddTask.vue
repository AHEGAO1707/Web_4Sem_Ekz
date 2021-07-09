<template>
  <div>
    <form class="cool-form" >
      <h1>Добавление карточки с заданием</h1>
      <div>
        <p><label>Выберите важность задачи от 1 до 3</label></p>
        <input type="number" min="1" max="3" class="input-cool" id="inpType" required placeholder="Выбор уровня важности задачи"/>
      </div>
      <div>
        <p><label>Добавьте описание карточки </label></p>
        <input class="input-cool" id="inpDescription" placeholder="Описание карточки"/>
      </div>
      <hr/>
      <div>
        <button class="cool-button" type="button" @click="closeWin" id="butBack">Закрыть</button> |
        <button class="cool-button" type="button" @click="addTask" id="butAddTask" >Добавить карточку</button>
      </div>
    </form>
  </div>
</template>

<script>

import Swal from "sweetalert2";


export default {
  name: "AddTask",
  methods: {
    closeWin: function () {
      document.getElementById("inpDescription").value = "";
      document.getElementById("inpType").value = "";
      document.getElementById('addTask').style.display = "none";
    },
    addTask: function () {
      let type = document.getElementById("inpType").value;
      let description = document.getElementById("inpDescription").value;
      let this_Comp = this;
      if (type >= "1" && type <= "3" && description !== "") {
        this_Comp.$store.commit('SET_Type',type);
        this_Comp.$store.commit('SET_Description',description);
        document.getElementById("inpDescription").value = "";
        document.getElementById("inpType").value = "";

        document.getElementById('addTask').style.display = "none";
        Swal.fire({
          icon: 'success',
          title: 'Успех!',
          text: 'Карточка была добавлена!',
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Пожалуйста...',
          text: 'Проверьте правильность заполнения полей!',
        })
      }
    }
  }
}
</script>

<style scoped>
.cool-form{
  text-align: center;
  width: fit-content !important;
  max-width: max-content;
  margin: 10% auto auto;
  background-color: white;
  border-radius: 20px;
  border-color: black;

}
.input-cool{
  height: 20px;
  border-radius: 5px;
  width: 100%;
}
.cool-button{
  display: inline;
  background-color: #ccffd3;
  border-radius: 8px;
  border: 1px black solid;
  font-size: 16px;
}
</style>