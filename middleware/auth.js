export default ({ store, app, redirect, route }) => {
  let user = app.$cookies.get("user");

  if (!user) {
    if (route.path !== "/login") {
      return redirect("/login");
    }
  }
};
