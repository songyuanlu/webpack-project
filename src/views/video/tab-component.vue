<script>
export default {
  props: {
    // index: {
    //   type: Number,
    //   required: true
    // },
    tabs: {
        type: Object,
        required: true
    }
  },
  render: function(h){
    return h(this.tabs.content);
  }
};
</script>

