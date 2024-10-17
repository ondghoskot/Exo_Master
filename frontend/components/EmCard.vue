<template>
  <div
    :class="[wide ? 'gp_card--wide' : 'gp_card', info ? 'gp_card__info' : '']"
  >
    <img v-if="card?.gifUrl" :src="card.gifUrl" alt="" />
    <div class="gp_card__info__section" v-if="card.instructions">
      <div>
        <h2 class="p-1">{{ card.name.charAt(0).toUpperCase() + card.name.slice(1) }}</h2>
        <p class="p-1">{{ card.instructions.toString() }}</p>
      </div>
      <div class="gp_card__info__footer">
        <h5 class="p-1 text-md text-light label__card">
          <span>Secondary Muscles: </span>
          {{card.secondaryMuscles.toString()}}
        </h5>
        
        
        <p class="text-sm ">
          <h5 class="p-1 text-sm text-gray">
          Equipment: 
          {{card.equipment.toString()}}
        </h5>
        </p>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "EmCard",
  props: {
    wide: {
      type: Boolean,
      default() {
        return false;
      },
    },
    showDetailsAction: {
      type: Boolean,
      default() {
        return true;
      },
    },
    info: {
      type: Boolean,
      default() {
        return false;
      },
    },
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.gp_card {
  cursor: pointer;
  position: relative;
  .gp_rating__indicator {
    left: 1rem;
    top: 1rem;
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  &--wide {
    .gp_rating__indicator {
      left: 0.75rem;
      top: 0.75rem;
    }
    &__actions {
      background: #66666673;
      position: absolute;
      font-size: 0.65rem;
      padding: 0.5rem 0.5rem;
      text-decoration: underline;
      right: 0.5rem;
      bottom: 3.5rem;
    }
    cursor: pointer;
    position: relative;
    display: flex;
    text-align: left;
    gap: 2rem;
    img {
      width: 27rem;
      height: 20rem;
      object-fit: cover;
    }
  }
  &__info {
    // padding: 1rem;
    &__section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__footer {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      padding-right: 1.5rem;
    }
  }
}
.label__card{
  background-color: #9999996b;
  color: #7e0219;
  padding: .25rem .5rem;
  margin-left: 1rem;
  font-weight: 600;
  span{
    color: black !important;
    font-weight: 400 !important;
  }

}
</style>
