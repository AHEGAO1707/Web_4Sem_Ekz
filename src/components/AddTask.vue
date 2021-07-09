<template>
  <div>
    <form class="cool-form" >
      <h1>Добавление карточки с заданием</h1>
      <div>
        <p><label for="inpType">Выберите важность задачи от 1 до 3</label></p>
        <input type="number" min="1" max="3" class="input-cool" id="inpType" required placeholder="Выбор уровня важности задачи"/>
      </div>
      <div>
        <p><label for="inpDescription">Добавьте описание карточки </label></p>
        <input class="input-cool" id="inpDescription" placeholder="Описание карточки"/>
      </div>
      <hr/>
      <div>
        <button aria-label="закрыть форму" class="cool-button" type="button" @click="closeWin" id="butBack">Закрыть</button> |
        <button aria-label="добавить карточку" class="cool-button" type="button" @click="addTask" id="butAddTask" >Добавить карточку</button>
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
        this_Comp.$store.commit('SET_Desc',description);
        document.getElementById("inpDescription").value = "";
        document.getElementById("inpType").value = "";
        this.$emit('add',{type: type, description: description});
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
  left: 35%;
  text-align: center;
  width: 30%;
  max-width: max-content;
  margin: 10% auto auto;
  background-color: white;
  border-radius: 20px;
  border-color: black;
  position: fixed;
  border: 1px solid black;
  padding: 20px;
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