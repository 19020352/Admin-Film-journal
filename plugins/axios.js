export default function ({ $axios, redirect }) {
  $axios.onError(async (error) => {
    try {
      console.log(error);
    } catch (e) {}
  });
}
