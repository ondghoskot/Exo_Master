<template>
  <div class="em_footer">
    <div>
      @anasschtioui
    </div>
    <div>
      ⓒ 2024, All rights reserved.
    </div>
    <div>
     Exo Master <span>
      for ALX 
     </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmFooter",
};
</script>
<style lang="scss">
.em_footer {
  display: flex;
  margin-top: 3rem;
  border-top: 1px solid #353535;
  height: 3rem;
  width: 100vw;
  font-size: 0.75rem;
  color: #666;
  justify-content: space-between;
  align-items: center;

  & > div:first-child{
    font-weight: 600;
    margin-left: 2rem;
    color: white;
  }
  & > div:last-child{
    font-weight: 600;
    color: white;
    span{
      font-weight: 400 !important;
      color: gray;
      font-size: .8rem;
      margin-right: 2rem;
    }
  }

}
</style>
