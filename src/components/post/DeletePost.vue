<template>
  <span>
    <v-btn
      small
      depressed
      outlined
      class="delete-btn ml-2"
      @click="deletePost(post.id)"
    >
      <svg
        width="1.6em"
        height="1.6em"
        viewBox="0 0 16 16"
        class="bi bi-trash"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </v-btn>
  </span>
</template>

<script>
import fb from '@/firebase.js';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  didOpen: toast => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

export default {
  name: 'DeletePost',
  props: ['post'],
  methods: {
    deletePost(doc) {
      fb.firestore()
        .collection('posts')
        .doc(doc)
        .delete()
        .then(() => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(result => {
            if (result.isConfirmed) {
              this.$router.go();
              Toast.fire({
                icon: 'success',
                title: 'Post deleted successfully!'
              });
            }
          });
        })
        .catch(error => {
          console.error('Error removing document: ', error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.delete-btn {
  border: 1px solid var(--v-deleteBtnColor-base) !important;
  color: var(--v-deleteBtnColor-base);
  &:hover {
    background: var(--v-deleteBtnColor-base);
    color: #fff;
  }
}
</style>
