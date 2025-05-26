let user = $state.raw({
  name: "hboot",
  email: "",
});

// 不会触发更新
user.name = "svelte";

// 整个变量重新复制会触发
user = {
  name: "svelte",
  email: "",
};
