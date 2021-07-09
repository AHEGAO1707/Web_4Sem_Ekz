<template>
  <div id="ModalWindow">
    <form v-on:submit.prevent="onSubmit" class="cool-form" >
      <h1>Добавление карточки с заданием</h1>
      <div>
        <p><label>Придумайте заголовок для карточки </label></p>
        <input class="input-cool" id="inpTitle" v-model="title" placeholder="Заголовок для карточки"/>
      </div>
      <div>
        <p><label>Добавьте описание карточки </label></p>
        <input class="input-cool" id="inpDescription" v-model="description" placeholder="Описание карточки"/>
      </div>
      <hr/>
      <div>
        <button class="cool-button" type="button" id="butBack" >Назад</button> |
        <button class="cool-button" type="button" id="butAddTask" >Добавить карточку</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTask"
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
  padding: 0px 20px 20px 20px;
;
}
</style>