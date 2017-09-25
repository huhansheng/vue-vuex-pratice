<template>
  <transition name="fade" model="fade-in" appare>
    <div class="card">
      <div class="card-header">
        {{title}}
      </div>
      <div class="card-container">
        <p>{{context}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: 'hhs',
    context: 'hangdsdhsdsd'
  }
}
</script>

<style lang="less" scoped>
  .card {
    width: 100%;
    min-height: 150px; 
    display: flex;
    flex-direction: column;
    border: 1px solid #efdddd;
    box-shadow: 2px 2px 2px #e5e5e5;
    .card-header {
      display: flex;
      font-size: 20px;
      font-weight: bold;
    }
    .card-container {
      display: flex;
    }
  }
</style>