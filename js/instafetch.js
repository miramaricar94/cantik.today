const url = "https://www.instagram.com/miramaricar91/?__a=1";
async function instafetch() {
  let promise = await new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data));
  });
  var fullname = promise.graphql.user.full_name;
  var pp = promise.graphql.user.profile_pic_url;
  var bio = promise.graphql.user.biography;
  document.getElementById("fullname").innerText = fullname;
  document.getElementById("bio").innerText = bio;
  document.getElementById("brandlogo").src = pp;
}
instafetch();