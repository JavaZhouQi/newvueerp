<template>
  <div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList:[]
    };
  },
  created() {
    this.routerList = this.$route.meta.routeList 
  },
  watch: {
    $route:function(newVal,oldVal){
      this.routerList = newVal.meta.routeList 
    }
  },
 // 或使用路由守卫beforeRouteEnter，watch和beforeRouteEnter二者其一即可
 // beforeRouteEnter(to, from, next) {
 //	next(vm=>{
 //   	vm.routeList = to.meta.routeList
 //	 })
 //	}
};
</script>
