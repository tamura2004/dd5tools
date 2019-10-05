export default function({ app, redirect }) {
  if (!app.$party.level || !app.$party.num) {
    redirect("/party/edit");
  }
}
